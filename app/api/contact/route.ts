import { NextResponse } from "next/server";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxRequestBytes = 16_384;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function errorResponse(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

function isContactPayload(payload: unknown): payload is ContactPayload {
  return typeof payload === "object" && payload !== null && !Array.isArray(payload);
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > maxRequestBytes) {
    return errorResponse("Your message is too large.", 413);
  }

  let payload: unknown;
  try {
    const body = await request.text();
    if (new TextEncoder().encode(body).byteLength > maxRequestBytes) {
      return errorResponse("Your message is too large.", 413);
    }
    payload = JSON.parse(body);
  } catch {
    return errorResponse("Send a valid JSON request.", 400);
  }

  if (!isContactPayload(payload)) {
    return errorResponse("Send a valid contact message.", 400);
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (!name || name.length > 100) {
    return errorResponse("Name must be between 1 and 100 characters.", 400);
  }
  if (!email || email.length > 254 || !emailPattern.test(email)) {
    return errorResponse("Enter a valid email address.", 400);
  }
  if (!message || message.length > 5000) {
    return errorResponse("Message must be between 1 and 5000 characters.", 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !recipient || !sender) {
    console.error("Contact email delivery is not configured.");
    return errorResponse("The contact form is temporarily unavailable. Please email me directly.", 503);
  }

  let delivery: Response;
  try {
    delivery = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: "New portfolio contact message",
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });
  } catch (error) {
    console.error("Contact email provider request failed.", error);
    return errorResponse("Your message could not be sent right now. Please try again later.", 502);
  }

  if (!delivery.ok) {
    const details = await delivery.text();
    console.error("Contact email provider rejected the message.", delivery.status, details);
    return errorResponse("Your message could not be sent right now. Please try again later.", 502);
  }

  return NextResponse.json({ message: "Thanks for reaching out. Your message has been sent." });
}
