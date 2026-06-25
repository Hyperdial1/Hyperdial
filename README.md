# HyperDial — marketing site + app + docs

The AI voice platform that gets smarter with every call. One Next.js project,
one Vercel deployment, three surfaces (marketing, app, docs).

**It deploys and runs with zero setup.** Content lives in files; the demo form,
scheduler, and database are optional integrations you switch on with environment
variables — nothing breaks if they're empty.

---

## Deploy in 3 steps

1. **Push to GitHub** — upload this folder to a new repo.
2. **Import to Vercel** — vercel.com → New Project → import the repo. It
   auto-detects Next.js.
3. **Deploy.** You get a live URL with the full site:
   `/`, `/product`, `/solutions/*`, `/pricing`, `/demo`, `/blog`, `/glossary`,
   `/docs`, `/privacy`, `/terms`.

Everything below is optional and makes the demo page fully functional.

---

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Node 18.18+ required.

---

## Turn on the demo form + scheduler (recommended)

Copy `.env.example` to `.env.local` (locally) and add the same variables in
Vercel → Project → Settings → Environment Variables.

### 1. Google Calendar demo scheduler

- In Google Calendar, create an **Appointment schedule** (Create → Appointment
  schedule). It auto-creates a Google Meet link per booking.
- Open the booking page, click **Share → embed**, and copy the URL inside the
  iframe `src`.
- Set `NEXT_PUBLIC_GCAL_SCHEDULE_URL` to that URL. The `/demo` page embeds it.

### 2. Lead form → Supabase (structured data)

- Create a project at supabase.com.
- Open SQL editor and run `supabase/schema.sql` (creates the `leads` table).
- From Settings → API, copy the project URL and the **service role** key into
  `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`.
  (Service role is server-only — it's used in the API route, never sent to the
  browser.)

The `leads` table columns: `name, work_email, company, phone, vertical,
monthly_call_volume, message, source, status, created_at`.

### 3. Lead form → email notification (Resend)

- Create an account at resend.com, verify your sending domain, create an API
  key.
- Set `RESEND_API_KEY`, `LEAD_NOTIFY_EMAIL` (where alerts go), and
  `LEAD_FROM_EMAIL` (a from-address on your verified domain).

The lead API (`app/api/lead/route.ts`) writes to Supabase **and** emails on each
submission. If a service isn't configured, it's skipped silently — the form
still works for the visitor.

---

## Where to change things

| You want to… | Edit… |
|---|---|
| Blog posts | `content/blog.ts` |
| Glossary terms | `content/glossary.ts` |
| Industry pages | `content/solutions.ts` |
| Docs pages | `content/docs.ts` |
| Colors / fonts | `tailwind.config.ts`, `app/layout.tsx` |
| Nav dropdowns | `components/navbar.tsx` |
| Homepage | `app/(marketing)/page.tsx` |
| Privacy / Terms | `app/(marketing)/privacy/page.tsx`, `/terms/page.tsx` |

---

## Important before launch

- **Privacy & Terms** are templates with `[BRACKETED]` placeholders, tuned for a
  product that records calls. Fill them in and have a lawyer review — call
  recording carries real consent and data-retention obligations.

---

## Optional: subdomains and a future product app

- **Subdomains** (`docs.`): set `NEXT_PUBLIC_ROOT_DOMAIN` and add the subdomain
  to the same Vercel project. See `middleware.ts`.
- There is no logged-in product app (`/dashboard`) right now — it was removed
  to keep the site focused on marketing while pre-launch. If you build one
  later, add it back as its own route group and protect it with an auth
  provider like Clerk (`npm install @clerk/nextjs`, wrap `app/layout.tsx` in
  `<ClerkProvider>`, add Clerk middleware).

---

## Tech stack

Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS · Poppins ·
react-markdown · Supabase (leads) · Resend (email) · file-based content.
