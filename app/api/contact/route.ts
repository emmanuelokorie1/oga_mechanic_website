import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { appendToSheet } from '@/lib/google-sheets';

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";

    let name, email, message, subject;
    let attachments: any[] = [];

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      name = formData.get("name") as string;
      email = formData.get("email") as string;
      message = formData.get("message") as string;
      subject = formData.get("subject") as string;
      
      const file = formData.get("file") as File | null;
      if (file && file.size > 0) {
          const buffer = Buffer.from(await file.arrayBuffer());
          attachments.push({
              filename: file.name,
              content: buffer,
          });
      }
    } else {
      const body = await request.json();
      name = body.name;
      email = body.email;
      message = body.message;
      subject = body.subject;
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your App Password
      },
    });

    // Email options
    const defaultSubject = `New Contact Form Message from ${name}`;
    
    // Email content generation
    const isNewsletter = subject === "New Newsletter Subscription";
    const isDonation = subject === "New Donation Proof";
    
    // Modern Email Template Helper
    const createEmailTemplate = (title: string, content: string, accentColor: string = "#37A642") => `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f4; color: #333; }
          .container { width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
          .header { background-color: ${accentColor}; padding: 30px; text-align: center; }
          .header h1 { color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px; }
          .content { padding: 40px; }
          .field-label { color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; font-weight: bold; }
          .field-value { color: #333; font-size: 16px; margin-bottom: 20px; font-weight: 500; }
          .highlight-box { background-color: #f8f9fa; border-left: 4px solid ${accentColor}; padding: 20px; border-radius: 4px; margin-top: 10px; }
          .footer { background-color: #333; padding: 20px; text-align: center; color: #888; font-size: 12px; }
        </style>
      </head>
      <body>
        <div style="padding: 20px;">
          <div class="container">
            <div class="header">
              <h1>OGA MECHANIC</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0; font-size: 14px;">${title}</p>
            </div>
            <div class="content">
              ${content}
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Oga Mechanic. All rights reserved.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    let htmlContent = "";

    if (isNewsletter) {
        htmlContent = createEmailTemplate(
            "Newsletter Subscription",
            `
            <p style="font-size: 16px; margin-bottom: 24px;">A new user has subscribed to the newsletter.</p>
            
            <div class="field-label">SUBSCRIBER EMAIL</div>
            <div class="field-value" style="font-size: 18px;">${email}</div>
            
            <div class="highlight-box">
              <p style="margin: 0; font-size: 14px;">
                The subscriber has been added to the database.<br>
              </p>
            </div>
            `,
            "#B70207"
        );
    } else if (isDonation) {
        // Parse the message to extract details if possible, or just display reasonably
        const lines = message.split('\n').filter((line: string) => line.trim() !== '');
        let detailsHtml = "";
        
        lines.forEach((line: string) => {
            const [key, ...values] = line.split(':');
            if (values.length > 0) {
                const value = values.join(':').trim();
                if (key && value && !line.includes("New Donation Proof Submitted")) {
                     detailsHtml += `
                        <div class="field-label">${key.toUpperCase()}</div>
                        <div class="field-value">${value}</div>
                     `;
                }
            }
        });

        htmlContent = createEmailTemplate(
            "New Donation Proof",
            `
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="display: inline-block; background-color: #e8f5e9; color: #6A0000; padding: 8px 16px; rounded-full; border-radius: 20px; font-weight: bold; font-size: 14px;">
                    Action Required: Verify Payment
                </div>
            </div>

            <p style="margin-bottom: 25px; color: #555;">Detailed below is the proof of payment submitted by a donor. Please verify the transaction hash on the blockchain and review the attached file.</p>
            
            <div style="background-color: #fafafa; padding: 25px; border-radius: 8px; border: 1px solid #eee;">
                ${detailsHtml || `<pre style="font-family: inherit; margin: 0;">${message}</pre>`}
            </div>
            `,
            "#6A0000" // Deep red for donation/action items
        );
    } else {
        // Generic Contact Form
        htmlContent = createEmailTemplate(
            "New Web Contact",
            `
            <div class="field-label">SENDER NAME</div>
            <div class="field-value">${name || 'Anonymous'}</div>
            
            <div class="field-label">SENDER EMAIL</div>
            <div class="field-value">${email || 'Not provided'}</div>
            
            <div class="field-label" style="margin-top: 30px;">MESSAGE CONTENT</div>
            <div class="highlight-box" style="margin-top: 5px;">
              <p style="white-space: pre-wrap; margin: 0; line-height: 1.6; color: #444;">${message}</p>
            </div>
            `,
            "#B70207" // Oga Mechanic Red
        );
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_SENT_TO,
      subject: subject || defaultSubject,
      text: message, // Fallback plain text
      html: htmlContent,
      attachments: attachments,
    };

    // If this is a newsletter subscription, and we have google sheets capability
    try {
        if (isNewsletter && process.env.GOOGLE_SHEET_ID) {
            const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
            await appendToSheet([date, email]);
        }
    } catch (e) {
        console.error("Google Sheets Error:", e);
        // Don't fail the email if sheets fails
    }

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
