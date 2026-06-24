import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type LeadInput = {
  name?: string;
  work_email?: string;
  company?: string;
  phone?: string;
  vertical?: string;
  monthly_call_volume?: string;
  message?: string;
  source?: string;
};

function clean(v: unknown): string | null {
  if (typeof v !== "string") return null;
  const t = v.trim();
  return t.length ? t.slice(0, 2000) : null;
}

export async function POST(req: NextRequest) {
  let body: LeadInput;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const lead = {
    name: clean(body.name),
    work_email: clean(body.work_email),
    company: clean(body.company),
    phone: clean(body.phone),
    vertical: clean(body.vertical),
    monthly_call_volume: clean(body.monthly_call_volume),
    message: clean(body.message),
    source: clean(body.source) ?? "demo_form",
  };

  // Minimal validation
  if (!lead.name || !lead.work_email) {
    return NextResponse.json(
      { error: "Name and work email are required." },
      { status: 400 }
    );
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(lead.work_email)) {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
  }

  const results: { supabase: string; email: string } = {
    supabase: "skipped",
    email: "skipped",
  };

  // 1) Store structured data in Supabase (if configured)
  const supaUrl = process.env.SUPABASE_URL;
  const supaKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (supaUrl && supaKey) {
    try {
      const { createClient } = await import("@supabase/supabase-js");
      const supabase = createClient(supaUrl, supaKey, {
        auth: { persistSession: false },
      });
      const { error } = await supabase.from("leads").insert(lead);
      results.supabase = error ? `error: ${error.message}` : "stored";
    } catch (e) {
      results.supabase = `error: ${e instanceof Error ? e.message : "unknown"}`;
    }
  }

  // 2) Send an email notification (if configured)
  const resendKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.LEAD_NOTIFY_EMAIL;
  const notifyFrom = process.env.LEAD_FROM_EMAIL;
  if (resendKey && notifyTo && notifyFrom) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);
      const rows = Object.entries(lead)
        .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#5B6577">${k}</td><td style="padding:4px 0"><strong>${v ?? "—"}</strong></td></tr>`)
        .join("");
      await resend.emails.send({
        from: notifyFrom,
        to: notifyTo,
        subject: `New HyperDial demo request — ${lead.company ?? lead.name}`,
        html: `<h2 style="font-family:sans-serif">New demo request</h2><table style="font-family:sans-serif;font-size:14px">${rows}</table>`,
      });
      results.email = "sent";
    } catch (e) {
      results.email = `error: ${e instanceof Error ? e.message : "unknown"}`;
    }
  }

  // Always succeed for the user as long as the request was valid.
  return NextResponse.json({ ok: true, results });
}
