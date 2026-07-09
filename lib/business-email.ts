// Single source of truth for the business-email-only rule on lead forms.
// Client forms use it for friendly inline errors; /api/lead enforces it
// authoritatively so no surface can bypass the rule.

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
  const domain = email.trim().toLowerCase().split("@")[1] ?? "";
  if (!domain) return false;
  return (
    FREE_EMAIL_DOMAINS.has(domain) ||
    FREE_EMAIL_PREFIXES.some((p) => domain.startsWith(p))
  );
}

export const FREE_EMAIL_ERROR =
  "Please use your work email — personal addresses like Gmail, Yahoo or Outlook aren't accepted.";
