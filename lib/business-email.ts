// Single source of truth for the business-email-only rule on lead forms.
// Client forms use it for friendly inline errors; /api/lead enforces it
// authoritatively so no surface can bypass the rule.
//
// MASTER SWITCH: flip ENFORCE_BUSINESS_EMAIL to true to re-enable the block
// everywhere (all 3 LP forms, the booking wizard, and the API) plus the
// "(no Gmail / Yahoo / Outlook)" field labels. Currently OFF — normal emails
// are accepted (Krish, 2026-07-08: "allow normal email for now, shift later").
export const ENFORCE_BUSINESS_EMAIL = false;

export const WORK_EMAIL_LABEL = ENFORCE_BUSINESS_EMAIL
  ? "Work email (no Gmail / Yahoo / Outlook)"
  : "Work email";
export const BUSINESS_EMAIL_LABEL = ENFORCE_BUSINESS_EMAIL
  ? "Business email (no Gmail / Yahoo / Outlook)"
  : "Business email";

const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "msn.com",
  "yahoo.com",
  "ymail.com",
  "rocketmail.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "pm.me",
  "zohomail.com",
  "zohomail.in",
  "rediffmail.com",
  "mail.com",
  "email.com",
  "gmx.com",
  "gmx.net",
  "yandex.com",
  "yandex.ru",
  "mail.ru",
]);

// Catches country variants like yahoo.co.in, hotmail.co.uk, outlook.co.in…
const FREE_EMAIL_PREFIXES = ["yahoo.", "hotmail.", "live.", "outlook.", "gmx.", "yandex."];

export function isFreeEmail(email: string): boolean {
  if (!ENFORCE_BUSINESS_EMAIL) return false;
  const domain = email.trim().toLowerCase().split("@")[1] ?? "";
  if (!domain) return false;
  return (
    FREE_EMAIL_DOMAINS.has(domain) ||
    FREE_EMAIL_PREFIXES.some((p) => domain.startsWith(p))
  );
}

export const FREE_EMAIL_ERROR =
  "Please use your work email — personal addresses like Gmail, Yahoo or Outlook aren't accepted.";
