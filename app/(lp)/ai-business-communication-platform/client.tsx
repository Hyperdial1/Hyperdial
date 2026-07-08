"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CALENDLY_URL = "https://calendly.com/deepak-hyperdial/30min";

const COUNTRIES = [
  "India", "USA", "UK", "UAE", "Canada", "Australia",
  "Singapore", "South Africa", "Other",
];

type ModalPhase = "form" | "calendar";

function Svg({ children, size = 24 }: { children: React.ReactNode; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

const ICONS = {
  globe: <><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /></>,
  repeat: <><path d="m17 2 4 4-4 4" /><path d="M3 11v-1a4 4 0 0 1 4-4h14" /><path d="m7 22-4-4 4-4" /><path d="M21 13v1a4 4 0 0 1-4 4H3" /></>,
  split: <><path d="M16 3h5v5" /><path d="M8 3H3v5" /><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" /><path d="m15 9 6-6" /></>,
  layers: <><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" /><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" /><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" /></>,
  zap: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  mic: <><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /></>,
  sparkles: <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
  headphones: <><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Z" /><path d="M21 14h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-5Z" /><path d="M3 14v-3a9 9 0 0 1 18 0v3" /></>,
  moon: <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />,
  chart: <><path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></>,
  link: <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></>,
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />,
  shuffle: <><path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.8-1.1 2-1.7 3.3-1.7H22" /><path d="m18 2 4 4-4 4" /><path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2" /><path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8" /><path d="m18 14 4 4-4 4" /></>,
  file: <><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M16 13H8" /><path d="M16 17H8" /></>,
  target: <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>,
  clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  shield: <><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1 1 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></>,
  refresh: <><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></>,
} as const;

function MultiSelect({ name, label, options }: { name: string; label: string; options: string[] }) {
  const [selected, setSelected] = useState<string[]>([]);
  function toggle(opt: string) {
    setSelected((prev) => (prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]));
  }
  return (
    <div className="field">
      <label>{label}</label>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 6 }}>
        {options.map((opt) => (
          <label key={opt} style={{ cursor: "pointer", marginBottom: 0 }}>
            <input type="checkbox" name={name} value={opt} checked={selected.includes(opt)} onChange={() => toggle(opt)} style={{ display: "none" }} />
            <span
              style={{
                display: "inline-flex", alignItems: "center", borderRadius: 999, padding: "6px 12px",
                fontSize: ".78rem", fontWeight: 600, border: "1.5px solid",
                borderColor: selected.includes(opt) ? "var(--brand)" : "var(--line)",
                background: selected.includes(opt) ? "var(--tint)" : "#fff",
                color: selected.includes(opt) ? "var(--brand)" : "var(--muted)",
              }}
            >
              {opt}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

export function AiBusinessCommunicationPlatformClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [phase, setPhase] = useState<ModalPhase>("form");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");
  const [calUrl, setCalUrl] = useState("");
  const submittingRef = useRef(false);

  const openModal = useCallback(() => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  }, []);
  const closeModal = useCallback(() => {
    setModalOpen(false);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeModal]);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.data?.event === "calendly.event_scheduled") window.location.href = "/ai-business-communication-platform/thank-you";
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));

    const cio = new IntersectionObserver(
      (es) => es.forEach((en) => {
        if (!en.isIntersecting) return;
        cio.unobserve(en.target);
        const el = en.target as HTMLElement;
        const target = +(el.dataset.count ?? 0);
        if (target === 0) { el.textContent = "0"; return; }
        const t0 = performance.now(), dur = 1200;
        const tick = (t: number) => {
          const p = Math.min((t - t0) / dur, 1);
          el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }),
      { threshold: 0.6 },
    );
    document.querySelectorAll("[data-count]").forEach((el) => cio.observe(el));

    return () => { io.disconnect(); cio.disconnect(); };
  }, []);

  const demoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setPhase("form");
    openModal();
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submittingRef.current) return;
    submittingRef.current = true;
    setStatus("sending");
    setError("");

    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const fullName = `${data.first_name ?? ""} ${data.last_name ?? ""}`.trim();
    const email = (data.work_email as string) ?? "";
    const countries = fd.getAll("countries");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, countries, source: "lp_smart_calling", name: fullName }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");

      const params = new URLSearchParams({
        name: fullName,
        email,
        embed_domain: window.location.hostname,
        embed_type: "Inline",
        hide_gdpr_banner: "1",
      });
      setCalUrl(`${CALENDLY_URL}?${params.toString()}`);
      setPhase("calendar");
      setStatus("idle");
      openModal();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      submittingRef.current = false;
    }
  }

  const renderForm = (p: string) => (
    <form onSubmit={onSubmit}>
      <div className="row2">
        <div className="field"><label htmlFor={`${p}fn`}>First name</label><input id={`${p}fn`} name="first_name" required autoComplete="given-name" /></div>
        <div className="field"><label htmlFor={`${p}ln`}>Last name</label><input id={`${p}ln`} name="last_name" required autoComplete="family-name" /></div>
      </div>
      <div className="field"><label htmlFor={`${p}em`}>Work email</label><input id={`${p}em`} name="work_email" type="email" required autoComplete="email" placeholder="you@company.com" /></div>
      <div className="field"><label htmlFor={`${p}ph`}>Phone</label><input id={`${p}ph`} name="phone" type="tel" autoComplete="tel" /></div>
      <div className="field"><label htmlFor={`${p}eu`}>How many end users?</label><input id={`${p}eu`} name="end_users" type="number" placeholder="e.g. 500" required /></div>
      <MultiSelect name="countries" label="Which countries will you be calling?" options={COUNTRIES} />
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Saving…" : "Book my demo →"}
      </button>
      {status === "error" && <p className="micro" style={{ color: "#B91C1C" }}>{error}</p>}
      <p className="micro">No credit card. Keep your existing number. Set up in under 5 minutes.</p>
    </form>
  );

  return (
    <div className="bcp-lp">
      {/* ================= DEMO MODAL ================= */}
      <div className={`modal-veil${modalOpen ? " open" : ""}`} role="dialog" aria-modal="true" aria-labelledby="mtitle" onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
        <div className="modal">
          <div className="modal-band"></div>
          <button className="modal-close" aria-label="Close and view the page" onClick={closeModal}>×</button>
          <div className="modal-inner">
            {phase === "form" && (
              <div>
                <p className="eyebrow">Live demo · 30 min</p>
                <h2 id="mtitle">Hear your calls run themselves</h2>
                <p className="sub">Book a demo — we&rsquo;ll set up a working number on the call and show smart routing, AI notes and follow-ups live. No commitment, no sales pitch.</p>
                {renderForm("m")}
              </div>
            )}
            {phase === "calendar" && (
              <div>
                <p className="eyebrow">Almost there</p>
                <h2>Pick a time</h2>
                <p className="sub">Choose whatever slot works best for you.</p>
                <iframe src={calUrl} title="Pick a time with HyperDial" style={{ width: "100%", height: 480, border: "none", borderRadius: 8 }} />
                <button type="button" className="micro" style={{ background: "none", border: "none", cursor: "pointer", textDecoration: "underline", display: "block", margin: "10px auto 0" }} onClick={() => { window.location.href = "/ai-business-communication-platform/thank-you"; }}>
                  Already booked? Click here →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ================= NAV — logo + CTA only ================= */}
      <nav>
        <div className="wrap nav-inner">
          <a className="logo" href="#top">Hyper<b>Dial</b></a>
          <a href="#" className="btn btn-primary" onClick={demoClick}>Book a demo</a>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <header className="hero" id="top">
        <div className="glow glow-1"></div><div className="glow glow-2"></div>
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Business calling, built to be answered</p>
            <h1>Calls that get <em>answered.</em></h1>
            <p className="lead">Every unanswered call is a customer you paid to reach and never met. HyperDial gives you clean local numbers in every market you call, number health that protects your caller reputation, and one platform for calls, follow-ups and your CRM — so more conversations start, and none slip through the cracks. Behind it all: real humans who pick up when you need help, and AI that makes every call smarter than the last.</p>
            <div className="hero-ctas">
              <a href="#" className="btn btn-primary" onClick={demoClick}>Book a demo →</a>
              <a href="#features" className="btn btn-ghost-inv">See all features</a>
            </div>
            <p className="hero-note">&lt; 5-minute setup · keep your existing number · founder-level support</p>
          </div>
          <div className="hero-form">
            <p className="hf-eyebrow">Live demo · 30 min</p>
            <h2>Book your demo</h2>
            <p className="hf-sub">We&rsquo;ll set up a clean local number on the call and show routing, follow-ups and AI notes live — no commitment, no sales pitch.</p>
            {renderForm("h")}
          </div>
        </div>
      </header>

      {/* ratings strip */}
      <div className="ratings">
        <div className="wrap">
          <span className="t">Trusted by growing teams</span>
          <span className="rate">99.9% uptime SLA</span>
          <span className="rate">5-minute setup</span>
          <span className="rate">Numbers in 150+ countries</span>
        </div>
      </div>

      {/* ================= RESULTS STATS ================= */}
      <section style={{ padding: "72px 0" }}>
        <div className="wrap">
          <div className="sec-head center rv" style={{ marginBottom: 48 }}>
            <p className="eyebrow pill">Why teams switch</p>
            <h2>What happens when no call falls through the cracks.</h2>
            <p>HyperDial drives measurable gains in answer rates, rep productivity and follow-through.</p>
          </div>
          <div className="metrics rv">
            <div className="metric"><div className="mi" style={{ color: "var(--brand)" }}><Svg>{ICONS.target}</Svg></div><b><span data-count="0">0</span> missed calls</b><p>Smart routing and after-hours AI pick up every ring — nights and weekends included.</p></div>
            <div className="metric"><div className="mi" style={{ color: "var(--green)" }}><Svg>{ICONS.zap}</Svg></div><b><span data-count="4">0</span>× more conversations</b><p>The power dialer keeps reps talking instead of dialling, waiting and logging.</p></div>
            <div className="metric"><div className="mi" style={{ color: "var(--amber)" }}><Svg>{ICONS.clock}</Svg></div><b>&lt;<span data-count="5">0</span> min to go live</b><p>From sign-up to your first live call on a working business number.</p></div>
            <div className="metric"><div className="mi" style={{ color: "var(--coral)" }}><Svg>{ICONS.refresh}</Svg></div><b><span data-count="100">0</span>% of calls logged</b><p>Every call transcribed, summarised and written to your CRM automatically.</p></div>
          </div>
        </div>
      </section>

      {/* ================= PROBLEM ================= */}
      <section style={{ background: "var(--soft)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="sec-head rv">
            <p className="eyebrow">The problem</p>
            <h2>The calls you miss are the revenue you lose.</h2>
          </div>
          <div className="cards3">
            <div className="card rv"><div className="ico" style={{ color: "var(--brand)" }}><Svg size={22}>{ICONS.phone}</Svg></div><h3>Missed calls go to competitors</h3><p>Every unanswered ring is a lead calling the next number on their list. After hours, on weekends, when lines are busy — they don&rsquo;t wait.</p></div>
            <div className="card rv"><div className="ico" style={{ color: "var(--brand)" }}><Svg size={22}>{ICONS.globe}</Svg></div><h3>Nobody answers a foreign number</h3><p>Calling from an overseas or spam-flagged caller ID kills your answer rate — your outreach dies before anyone hears a word.</p></div>
            <div className="card rv"><div className="ico" style={{ color: "var(--brand)" }}><Svg size={22}>{ICONS.file}</Svg></div><h3>Context dies after hang-up</h3><p>Manual call logging and follow-up tracking means notes get skipped, promises get forgotten, and deals quietly go cold.</p></div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section id="features">
        <div className="wrap">
          <div className="sec-head rv">
            <p className="eyebrow pill">Platform</p>
            <h2>The pillars of serious business calling.</h2>
            <p>Numbers, routing, dialling and coaching — with intelligence working every call, not bolted on after.</p>
          </div>
          <div className="featgrid">
            <div className="feat rv"><div className="fi" style={{ color: "var(--brand)" }}><Svg>{ICONS.globe}</Svg></div><h3>Local numbers, local caller ID</h3><p>Clean local, mobile and toll-free numbers in 150+ countries — because nobody answers a foreign number. Or port the one your customers already know.</p></div>
            <div className="feat rv"><span className="tag">Flagship</span><div className="fi" style={{ color: "var(--indigo)" }}><Svg>{ICONS.shield}</Svg></div><h3>Number health &amp; rotation</h3><p>Monitoring and rotation hygiene that guards your caller reputation call after call — before answer rates dip.</p></div>
            <div className="feat rv"><div className="fi" style={{ color: "var(--green)" }}><Svg>{ICONS.split}</Svg></div><h3>Smart call routing</h3><p>Route by team, time zone, language or intent. Every caller reaches the right person, first time.</p></div>
            <div className="feat rv"><div className="fi" style={{ color: "var(--amber)" }}><Svg>{ICONS.layers}</Svg></div><h3>Multi-level IVR</h3><p>A phone menu callers don&rsquo;t hate. AI understands what they say — not just what they press.</p></div>
            <div className="feat rv"><span className="tag">Popular</span><div className="fi" style={{ color: "var(--coral)" }}><Svg>{ICONS.zap}</Svg></div><h3>Power &amp; auto dialer</h3><p>Reps just talk. The dialer works the list, skips dead numbers and paces itself.</p></div>
            <div className="feat rv"><div className="fi" style={{ color: "var(--brand)" }}><Svg>{ICONS.mic}</Svg></div><h3>Call recording &amp; transcription</h3><p>Every call recorded and transcribed automatically. Searchable forever. Compliant by design.</p></div>
            <div className="feat rv"><div className="fi" style={{ color: "var(--indigo)" }}><Svg>{ICONS.sparkles}</Svg></div><h3>AI notes, summaries &amp; tasks</h3><p>Key points, commitments and next steps — logged to your CRM before you&rsquo;ve hung up.</p></div>
            <div className="feat rv"><div className="fi" style={{ color: "var(--green)" }}><Svg>{ICONS.users}</Svg></div><h3>Call queuing &amp; distribution</h3><p>Fair automatic distribution with queue callbacks. Nobody waits on hold, nobody hangs up angry.</p></div>
            <div className="feat rv"><span className="tag">New</span><div className="fi" style={{ color: "var(--amber)" }}><Svg>{ICONS.headphones}</Svg></div><h3>Live monitoring, whisper &amp; barge</h3><p>Coach silently mid-call. Whisper prompts only your rep hears. Jump in when it matters.</p></div>
            <div className="feat rv"><div className="fi" style={{ color: "var(--coral)" }}><Svg>{ICONS.moon}</Svg></div><h3>After-hours &amp; voicemail drop</h3><p>Business-hour rules, instant voicemail transcripts and automated callback follow-ups.</p></div>
            <div className="feat rv"><div className="fi" style={{ color: "var(--brand)" }}><Svg>{ICONS.chart}</Svg></div><h3>Call analytics dashboard</h3><p>Answer rates, wait times, outcomes and rep performance — live, per team, per number.</p></div>
            <div className="feat rv"><div className="fi" style={{ color: "var(--indigo)" }}><Svg>{ICONS.link}</Svg></div><h3>CRM &amp; helpdesk integrations</h3><p>Two-way sync with your CRM, helpdesk and Slack. Calls, notes and tasks land where you work.</p></div>
          </div>
        </div>
      </section>

      {/* ================= AI BAND ================= */}
      <section id="ai" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="learn rv">
            <div className="glow"></div>
            <p className="eyebrow">AI on every call</p>
            <h2>Your phone system finally has a brain.</h2>
            <p>Most phone systems stop at connecting the call. HyperDial works the call — before, during and after:</p>
            <div className="learn-cols">
              <div className="learn-col"><span className="n">Before</span><h3>Smart answer &amp; route</h3><p>AI greets callers, understands intent and routes to the right team — 24/7, so no ring goes unanswered.</p></div>
              <div className="learn-col"><span className="n">During</span><h3>Live transcription</h3><p>Every word captured in real time, with sentiment and key moments flagged as they happen.</p></div>
              <div className="learn-col"><span className="n">After</span><h3>Summary &amp; CRM log</h3><p>A clean summary, outcomes and commitments written to your CRM the second you hang up.</p></div>
              <div className="learn-col"><span className="n">Always</span><h3>Automatic follow-ups</h3><p>Callbacks scheduled, emails drafted, tasks assigned — the follow-through happens without you.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section style={{ background: "var(--soft)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="sec-head rv">
            <p className="eyebrow">How it works</p>
            <h2>From sign-up to first smart call in under 5 minutes.</h2>
          </div>
          <div className="steps">
            <div className="step rv"><h3>Get your number</h3><p>Port your existing business number or pick a new local, mobile or toll-free number in 150+ countries — live instantly.</p></div>
            <div className="step rv"><h3>Turn on the AI</h3><p>Set your teams and hours; the AI handles inbound routing, after-hours answering and outbound follow-ups automatically.</p></div>
            <div className="step rv"><h3>Watch nothing slip</h3><p>Every call is transcribed, summarised and logged, with follow-up tasks created — zero manual admin.</p></div>
          </div>
        </div>
      </section>

      {/* ================= RESULTS / QUOTES ================= */}
      <section id="results">
        <div className="wrap">
          <div className="sec-head rv">
            <p className="eyebrow">Trust &amp; reliability</p>
            <h2>Built for teams who live on the phone.</h2>
          </div>
          <div className="trust rv">
            <span className="badge"><b>Founder-level</b> support — minutes, not days</span>
            <span className="badge"><b>99.9%</b> uptime SLA</span>
            <span className="badge"><b>Encrypted</b> calls &amp; recordings</span>
            <span className="badge"><b>GDPR</b> ready</span>
            <span className="badge"><b>SOC 2</b> in progress</span>
            <span className="badge"><b>150+</b> countries</span>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section id="faq" style={{ background: "var(--soft)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <div className="sec-head rv"><p className="eyebrow">FAQ</p><h2>Before you ask —</h2></div>
          <details className="rv"><summary>Why do more of my calls get answered with HyperDial?</summary><p>Two reasons. Prospects see a clean local number for their market instead of a foreign or flagged one — and number health monitoring rotates and protects your caller IDs before reputation problems dent your answer rate.</p></details>
          <details className="rv"><summary>Can I keep my existing business number?</summary><p>Yes. Port your current number in with no downtime — or run it alongside new HyperDial numbers during the transition.</p></details>
          <details className="rv"><summary>Do I need any hardware or a new SIM?</summary><p>No. HyperDial runs on the devices you already have — desktop, browser and mobile apps. If you can open a laptop, you can run a call centre.</p></details>
          <details className="rv"><summary>How long does setup really take?</summary><p>Under 5 minutes for a working number. Routing rules, teams and the AI assistant are configured the same day — we&rsquo;ll do it with you on the demo call.</p></details>
          <details className="rv"><summary>What happens to calls after business hours?</summary><p>The AI answers, helps where it can, takes a structured message when it can&rsquo;t, and schedules the callback — so Monday starts with a task list, not a voicemail box.</p></details>
          <details className="rv"><summary>Are calls and recordings secure?</summary><p>Calls and recordings are encrypted, access is role-based, and data handling is GDPR-ready. Recordings live in your workspace, not anyone else&rsquo;s training data.</p></details>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section>
        <div className="wrap">
          <div className="final rv">
            <div className="glow"></div>
            <p className="eyebrow" style={{ color: "var(--brand-light)", position: "relative" }}>Ready when you are</p>
            <h2>We&rsquo;ll set up a working number<br />live on your demo call.</h2>
            <p>30 minutes, no commitment, no sales pitch. Bring your call volume — leave with a phone system that never misses.</p>
            <a href="#" className="btn btn-primary" onClick={demoClick}>Book my demo →</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <span>© {new Date().getFullYear()} HyperDial. All rights reserved.</span>
          <span><a href="/privacy">Privacy</a> · <a href="/terms">Terms</a></span>
        </div>
      </footer>
    </div>
  );
}
