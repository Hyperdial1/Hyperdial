import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// Existing fields (used by the old /demo LeadForm — kept for backward compatibility)
// + new fields added for the /book-a-demo booking wizard.
type LeadInput = {
  // shared / legacy
  name?: string;
  work_email?: string;
  company?: string;
  phone?: string;
  vertical?: string;
  monthly_call_volume?: string;
  message?: string;
  source?: string;

  // new — booking wizard
  first_name?: string;
  last_name?: string;
  job_title?: string;
  company_website?: string;
  company_size?: string;
  annual_support_volume?: string;
  needs?: string[];
  current_solution?: string;
  timeline?: string;
  country?: string;
};

function clean(v: unknown): string | null {
  if (typeof v !== "string") return null;
  const t = v.trim();
  return t.length ? t.slice(0, 2000) : null;
}

function cleanArray(v: unknown): string[] | null {
  if (!Array.isArray(v)) return null;
  const arr = v
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 20); // sane upper bound
  return arr.length ? arr : null;
}

export async function POST(req: NextRequest) {
  let body: LeadInput;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const firstName = clean(body.first_name);
  const lastName = clean(body.last_name);
  // Backward compatible: old LeadForm sends a single `name` field.
  // New wizard sends first_name + last_name — combine them into `name`
  // so anything still reading `name` (dashboards, the email template) keeps working.
  const combinedName =
    firstName && lastName ? `${firstName} ${lastName}` : clean(body.name);

  const lead = {
    // legacy / shared
    name: combinedName,
    work_email: clean(body.work_email),
    company: clean(body.company),
    phone: clean(body.phone),
    vertical: clean(body.vertical),
    monthly_call_volume: clean(body.monthly_call_volume),
    message: clean(body.message),
    source: clean(body.source) ?? "demo_form",

    // new — booking wizard (all optional; null if not sent by the old LeadForm)
    first_name: firstName,
    last_name: lastName,
    job_title: clean(body.job_title),
    company_website: clean(body.company_website),
    company_size: clean(body.company_size),
    annual_support_volume: clean(body.annual_support_volume),
    needs: cleanArray(body.needs),
    current_solution: clean(body.current_solution),
    timeline: clean(body.timeline),
    country: clean(body.country),
  };

  // Minimal validation — unchanged from before
  if (!lead.name || !lead.work_email) {
    return NextResponse.json(
      { error: "Name and work email are required." },
      { status: 400 }
    );
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(lead.work_email)) {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
  }

  const results: { supabase: string; email: string; sheets: string } = {
    supabase: "skipped",
    email: "skipped",
    sheets: "skipped",
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

  // 2) Send an email notification via Gmail SMTP (if configured)
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const notifyTo = process.env.LEAD_NOTIFY_EMAIL;
  if (gmailUser && gmailPass && notifyTo) {
    try {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: gmailUser, pass: gmailPass },
      });
      const rows = Object.entries(lead)
        .filter(([, v]) => v !== null && v !== undefined)
        .map(([k, v]) => {
          const display = Array.isArray(v) ? v.join(", ") : String(v);
          return `<tr><td style="padding:4px 12px 4px 0;color:#5B6577">${k}</td><td style="padding:4px 0"><strong>${display}</strong></td></tr>`;
        })
        .join("");
      await transporter.sendMail({
        from: `"HyperDial Leads" <${gmailUser}>`,
        to: notifyTo,
        subject: `New HyperDial demo request — ${lead.company ?? lead.name}`,
        html: `<h2 style="font-family:sans-serif">New demo request</h2><table style="font-family:sans-serif;font-size:14px">${rows}</table>`,
      });
      results.email = "sent";
    } catch (e) {
      results.email = `error: ${e instanceof Error ? e.message : "unknown"}`;
    }
  }

  // 3) Send to Google Sheets via Apps Script webhook (if configured)
  const sheetsWebhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (sheetsWebhook) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    try {
      await fetch(sheetsWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...lead, submitted_at: new Date().toISOString() }),
        signal: controller.signal,
      });
      results.sheets = "sent";
    } catch (e) {
      results.sheets = `error: ${e instanceof Error ? e.message : "unknown"}`;
    } finally {
      clearTimeout(timeout);
    }
  }

  // Always succeed for the user as long as the request was valid.
  return NextResponse.json({ ok: true, results });
}
