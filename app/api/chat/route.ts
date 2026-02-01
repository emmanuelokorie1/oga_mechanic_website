
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { convertToModelMessages, streamText } from "ai";
import { getSimulatedResponse } from "@/lib/simulated-chat";

// Fallback to simulated response if no API key
const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

const google = createGoogleGenerativeAI({
  apiKey: apiKey || "",
});

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();
  const lastMessage = messages[messages.length - 1];

  if (!apiKey) {
    // Return simulated response
    // Artificial delay for realism
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // Extract text from UIMessage parts if possible, or fallback to simple check
    // UIMessage from useChat (AI SDK 3.x) uses parts.
    // lastMessage.content is getting deprecated/removed or was from older version.
    // We try to access content or parts
    const lastContent = lastMessage.content || 
                        (lastMessage.parts && lastMessage.parts.filter((p: any) => p.type === 'text').map((p: any) => p.text).join('')) || 
                        "";

    const simulatedText = getSimulatedResponse(lastContent);
    return new Response(simulatedText);
  }

  try {
    console.log("Converting messages:", messages.length);
    const coreMessages = await convertToModelMessages(messages);
    console.log("Core messages converted:", coreMessages.length);

    const result = await streamText({
      model: google("gemini-2.0-flash"),
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
    // Extract content safely from UIMessage format
    const lastContent = lastMessage.content || 
                        (lastMessage.parts && lastMessage.parts.filter((p: any) => p.type === 'text').map((p: any) => p.text).join('')) || 
                        "";
    const simulatedText = getSimulatedResponse(lastContent);
    return new Response(simulatedText);
  }
}
