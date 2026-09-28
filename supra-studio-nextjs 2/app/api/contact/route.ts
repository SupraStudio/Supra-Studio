import { NextResponse } from "next/server";

// Sends the contact form straight to your inbox using Resend's free tier
// (100 emails/day, 3 000/month — plenty for a contact form).
//
// Setup required (one-time, ~5 minutes):
// 1. Create a free account at https://resend.com
// 2. Verify the suprastudio.fr domain in Resend (Domains → Add Domain,
//    then add the DNS records they give you — this lets you send FROM
//    contact@suprastudio.fr instead of a generic address).
// 3. Create an API key (API Keys → Create API Key).
// 4. In Vercel: Project Settings → Environment Variables, add
//    RESEND_API_KEY = the key you just created. Redeploy.
//
// Until RESEND_API_KEY is set, this route returns a clear "not configured"
// error instead of silently failing.

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "missing_fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set — contact form cannot send email.");
      return NextResponse.json({ error: "not_configured" }, { status: 500 });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Supra Studio — Site web <contact@suprastudio.fr>",
        to: ["contact@suprastudio.fr"],
        reply_to: email,
        subject: `Nouveau message de ${name} — suprastudio.fr`,
        text: [
          `Nom : ${name}`,
          `Email : ${email}`,
          `Téléphone : ${phone || "—"}`,
          "",
          "Message :",
          message,
        ].join("\n"),
      }),
    });

    if (!res.ok) {
      const details = await res.text();
      console.error("Resend error:", details);
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
