import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-b9398e34/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form submission endpoint
app.post("/make-server-b9398e34/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return c.json({ 
        success: false, 
        error: "Missing required fields: name, email, and message are required" 
      }, 400);
    }

    // Get Resend API key from environment
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (!resendApiKey) {
      console.error("RESEND_API_KEY not configured");
      return c.json({ 
        success: false, 
        error: "Email service not configured. Please set up RESEND_API_KEY." 
      }, 500);
    }

    // Store submission in KV store for record keeping
    const submissionId = crypto.randomUUID();
    const timestamp = new Date().toISOString();
    
    await kv.set(`contact_submission_${submissionId}`, {
      id: submissionId,
      name,
      email,
      phone: phone || "",
      company: company || "",
      message,
      timestamp,
      status: "pending"
    });

    // Send email using Resend API
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Hookimpex Website <onboarding@resend.dev>",
        to: ["allyuneed37@gmail.com"], // Verified email - will forward to enquiry@hookimpex.com once domain is verified
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #3B82F6; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
              <h2 style="margin: 0; color: white;">🔔 New Contact Form Submission</h2>
              <p style="margin: 5px 0 0 0; color: #E0E7FF; font-size: 14px;">From Hookimpex Website</p>
            </div>
            
            <div style="background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px;">
              <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                <h3 style="color: #1F2937; margin-top: 0; border-bottom: 2px solid #3B82F6; padding-bottom: 10px;">Contact Information</h3>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #6B7280; font-weight: 600; width: 120px;">👤 Name:</td>
                    <td style="padding: 8px 0; color: #1F2937;"><strong>${name}</strong></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6B7280; font-weight: 600;">📧 Email:</td>
                    <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #3B82F6; text-decoration: none;">${email}</a></td>
                  </tr>
                  ${phone ? `
                  <tr>
                    <td style="padding: 8px 0; color: #6B7280; font-weight: 600;">📞 Phone:</td>
                    <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #3B82F6; text-decoration: none;">${phone}</a></td>
                  </tr>
                  ` : ""}
                  ${company ? `
                  <tr>
                    <td style="padding: 8px 0; color: #6B7280; font-weight: 600;">🏢 Company:</td>
                    <td style="padding: 8px 0; color: #1F2937;">${company}</td>
                  </tr>
                  ` : ""}
                  <tr>
                    <td style="padding: 8px 0; color: #6B7280; font-weight: 600;">🕒 Submitted:</td>
                    <td style="padding: 8px 0; color: #1F2937;">${new Date(timestamp).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
                  </tr>
                </table>
              </div>
              
              <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                <h3 style="color: #1F2937; margin-top: 0; border-bottom: 2px solid #F97316; padding-bottom: 10px;">💬 Message</h3>
                <div style="background: #F9FAFB; padding: 15px; border-left: 4px solid #3B82F6; border-radius: 4px; white-space: pre-wrap; color: #1F2937; line-height: 1.6;">${message}</div>
              </div>
              
              <div style="background: #FEF3C7; border: 1px solid #FCD34D; padding: 15px; border-radius: 8px; margin-top: 20px;">
                <p style="margin: 0; color: #92400E; font-size: 13px;">
                  <strong>⚠️ Note:</strong> This email is being sent to allyuneed37@gmail.com for testing. 
                  To receive at <strong>enquiry@hookimpex.com</strong>, verify your domain at 
                  <a href="https://resend.com/domains" style="color: #3B82F6;">resend.com/domains</a>
                </p>
              </div>
            </div>
            
            <div style="text-align: center; padding: 20px; color: #6B7280; font-size: 12px;">
              <p style="margin: 0;">This email was sent from the Hookimpex website contact form</p>
              <p style="margin: 5px 0 0 0;">📍 No.6 Veeramani Street, Madipakkam, Chennai | 📞 +91 9994295638</p>
            </div>
          </div>
        `,
      }),
    });

    const emailResult = await emailResponse.json();

    if (!emailResponse.ok) {
      console.error("Failed to send email via Resend:", emailResult);
      
      // Update submission status
      await kv.set(`contact_submission_${submissionId}`, {
        id: submissionId,
        name,
        email,
        phone: phone || "",
        company: company || "",
        message,
        timestamp,
        status: "email_failed",
        error: emailResult
      });

      return c.json({ 
        success: false, 
        error: `Failed to send email: ${emailResult.message || "Unknown error"}` 
      }, 500);
    }

    // Update submission status to success
    await kv.set(`contact_submission_${submissionId}`, {
      id: submissionId,
      name,
      email,
      phone: phone || "",
      company: company || "",
      message,
      timestamp,
      status: "sent",
      emailId: emailResult.id
    });

    console.log(`Contact form submission processed successfully. Email ID: ${emailResult.id}`);

    return c.json({ 
      success: true, 
      message: "Your message has been sent successfully! We'll get back to you within 24 hours.",
      submissionId 
    });

  } catch (error) {
    console.error("Error processing contact form submission:", error);
    return c.json({ 
      success: false, 
      error: `Server error while processing contact form: ${error.message}` 
    }, 500);
  }
});

Deno.serve(app.fetch);