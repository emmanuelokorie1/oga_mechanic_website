
import { createOpenAI } from "@ai-sdk/openai";
import { convertToModelMessages, streamText } from "ai";
import { getSimulatedResponse } from "@/lib/simulated-chat";

// Fallback to simulated response if no API key
const apiKey = process.env.OPENAI_API_KEY;

const openai = createOpenAI({
  apiKey: apiKey || "",
});

export const runtime = "edge";

// Helper function to create a streaming response for simulated chat
function createSimulatedStreamResponse(text: string) {
  const encoder = new TextEncoder();
  
  const stream = new ReadableStream({
    async start(controller) {
      // Generate a unique message ID
      const messageId = `msg_${Date.now()}`;
      
      // Send message start with ID
      controller.enqueue(encoder.encode(`data: ${JSON.stringify({
        type: "message-start",
        id: messageId,
        role: "assistant"
      })}\n\n`));
      
      // Send the text content as parts
      controller.enqueue(encoder.encode(`data: ${JSON.stringify({
        type: "content-part",
        id: messageId,
        part: {
          type: "text",
          text: text
        }
      })}\n\n`));
      
      // Send message finish
      controller.enqueue(encoder.encode(`data: ${JSON.stringify({
        type: "message-finish",
        id: messageId
      })}\n\n`));
      
      controller.enqueue(encoder.encode("data: [DONE]\n\n"));
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
    },
  });
}

export async function POST(req: Request) {
  const { messages } = await req.json();
  const lastMessage = messages[messages.length - 1];

  if (!apiKey) {
    // Return simulated response
    // Artificial delay for realism
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // Extract text from UIMessage parts
    const lastContent = lastMessage.content || 
                        (lastMessage.parts && lastMessage.parts.filter((p: any) => p.type === 'text').map((p: any) => p.text).join('')) || 
                        "";

    const simulatedText = getSimulatedResponse(lastContent);
    return createSimulatedStreamResponse(simulatedText);
  }

  try {
    console.log("Converting messages:", messages.length);
    const coreMessages = await convertToModelMessages(messages);
    console.log("Core messages converted:", coreMessages.length);

    const result = await streamText({
      model: openai("gpt-4o-mini"),
      system: `
        You are a helpful customer support assistant for Oga Mechanic, an all-in-one automotive platform in Nigeria.
        
        Your goal is to assist users with:
        - Finding mechanics (/find-mechanic)
        - Buying cars (/buy-car)
        - Selling cars (/sell-car)
        - Rides (/ride)
        - Gas Supply (/gas)
        
        Tone: Professional, friendly, slightly informal (Nigerian context appropriate).
        Keep responses concise and direct users to the relevant pages.
      `,
      messages: coreMessages,
    });

    console.log("Streaming response created");
    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Error in chat route:", error);
    // Fallback to simulated if AI fails
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    const lastContent = lastMessage.content || 
                        (lastMessage.parts && lastMessage.parts.filter((p: any) => p.type === 'text').map((p: any) => p.text).join('')) || 
                        "";
    const simulatedText = getSimulatedResponse(lastContent);
    return createSimulatedStreamResponse(simulatedText);
  }
}
