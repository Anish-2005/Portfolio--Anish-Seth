export const runtime = 'nodejs';
// import axios from 'axios';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create and configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, 
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY, 
  },
});

// Helper function to send a message via Telegram
async function sendTelegramMessage(token, chat_id, message) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
    console.log('[Telegram] Sending message (fetch):', { url, chat_id, message });
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: message,
        chat_id,
      }),
    });
    const data = await res.json();
    console.log('[Telegram] Response:', data);
    return { ok: data.ok, error: null, data };
  } catch (error) {
    // Log the full error object for debugging
    console.error('[Telegram] Error sending message (fetch):', error);
    return { ok: false, error: error.message, data: null };
  }
};

// HTML email template
const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #007BFF;">New Message Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px; margin-left: 0;">
        ${userMessage}
      </blockquote>
      <p style="font-size: 12px; color: #888;">Click reply to respond to the sender.</p>
    </div>
  </div>
`;

// Helper function to send an email via Nodemailer
async function sendEmail(payload, message) {
  const { name, email, message: userMessage } = payload;
  
  const mailOptions = {
    from: "Portfolio",
    to: email, // Send to the user's entered email
    subject: `New Message From ${name}`,
    text: message,
    html: generateEmailTemplate(name, email, userMessage),
    replyTo: email,
  };
  
  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error while sending email:', error.message);
    return false;
  }
};

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message: userMessage } = payload;
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chat_id = process.env.TELEGRAM_CHAT_ID;

    // Log environment variables (mask secrets)
    console.log('[API] TELEGRAM_BOT_TOKEN present:', !!token);
    console.log('[API] TELEGRAM_CHAT_ID:', chat_id);

    // Validate environment variables
    if (!token || !chat_id) {
      return NextResponse.json({
        success: false,
        message: 'Telegram token or chat ID is missing.',
      }, { status: 400 });
    }

    const message = `New message from ${name}\n\nEmail: ${email}\n\nMessage:\n\n${userMessage}\n\n`;

    // Send Telegram message
    const telegramResult = await sendTelegramMessage(token, chat_id, message);
    console.log('[API] Telegram full response:', telegramResult);
    if (!telegramResult.ok) {
      console.error('[API] Telegram message failed to send.', telegramResult.error);
    }

    // Send email
    const emailSuccess = await sendEmail(payload, message);
    if (!emailSuccess) {
      console.error('[API] Email failed to send.');
    }

    if (telegramResult.ok && emailSuccess) {
      return NextResponse.json({
        success: true,
        message: 'Message and email sent successfully!',
        telegram: telegramResult.data,
      }, { status: 200 });
    }

    return NextResponse.json({
      success: false,
      message: `Failed to send message or email. Telegram: ${telegramResult.ok}, Email: ${emailSuccess}`,
      telegramError: telegramResult.error,
      telegramResponse: telegramResult.data,
    }, { status: 500 });
  } catch (error) {
    console.error('API Error:', error.message);
    return NextResponse.json({
      success: false,
      message: 'Server error occurred.',
      error: error.message,
    }, { status: 500 });
  }
}

// Add a GET endpoint for direct Telegram testing
export async function GET() {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chat_id = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chat_id) {
    return NextResponse.json({
      success: false,
      message: 'Telegram token or chat ID is missing.',
    }, { status: 400 });
  }
  const testMessage = 'Test message from Portfolio API (GET /api/contact)';
  const telegramResult = await sendTelegramMessage(token, chat_id, testMessage);
  console.log('[API] Telegram test full response:', telegramResult);
  if (telegramResult.ok) {
    return NextResponse.json({
      success: true,
      message: 'Test message sent to Telegram!',
      telegram: telegramResult.data,
    }, { status: 200 });
  } else {
    return NextResponse.json({
      success: false,
      message: 'Failed to send test message to Telegram.',
      telegramError: telegramResult.error,
      telegramResponse: telegramResult.data,
    }, { status: 500 });
  }
}
