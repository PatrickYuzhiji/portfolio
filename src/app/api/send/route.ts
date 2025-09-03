// app/api/send/route.ts

import { Resend } from "resend";
import { NextResponse } from "next/server";

// Initialize Resend only when needed, not at module load time
function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY environment variable is not set');
  }
  return new Resend(apiKey);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate the required fields
    const { subject, details, email } = body;

    if (!subject || !details || !email) {
      return NextResponse.json(
        { error: "Missing required fields: subject, details, and email are required" },
        { status: 400 }
      );
    }

    try {
      const resend = getResend();
      
      // Send notification email to Patrick
      const businessEmail = await resend.emails.send({
        from: "hi@patrickyu.work",
        to: "hi@patrickyu.work",
        subject: `Contact Form: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>From:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
              <h3 style="color: #333; margin-top: 0;">Message Details:</h3>
              <p style="line-height: 1.6; color: #555;">${details.replace(/\n/g, '<br>')}</p>
            </div>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #666; font-size: 14px;">
              <p>This message was sent from your portfolio contact form.</p>
            </div>
          </div>
        `,
      });

      // Send confirmation email to customer
      const customerEmail = await resend.emails.send({
        from: "hi@patrickyu.work",
        to: email,
        subject: "Thank you for contacting Patrick Yu!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
              Thank You for Your Message!
            </h2>
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p>Hi there,</p>
              <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
            </div>
            <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
              <h3 style="color: #333; margin-top: 0;">Your Message:</h3>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <p style="line-height: 1.6; color: #555;">${details.replace(/\n/g, '<br>')}</p>
            </div>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #666; font-size: 14px;">
              <p>Best regards,<br>Patrick Yu</p>
              <p>Software Engineer & Full-Stack Developer</p>
            </div>
          </div>
        `,
      });

      if (businessEmail.error || customerEmail.error) {
        console.error(
          "Resend API error:",
          businessEmail.error || customerEmail.error
        );
        return NextResponse.json(
          {
            error: "Failed to send email. Please try again later.",
          },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Email sent successfully!",
        data: {
          businessEmail: businessEmail.data,
          customerEmail: customerEmail.data,
        },
      });
    } catch (resendError) {
      console.error("Resend API error details:", {
        error: resendError,
        stack: resendError instanceof Error ? resendError.stack : undefined,
        message:
          resendError instanceof Error ? resendError.message : "Unknown error",
      });

      return NextResponse.json(
        {
          error: "Failed to process email request. Please try again later.",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
