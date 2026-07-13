"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { isFreeEmail, FREE_EMAIL_ERROR, WORK_EMAIL_LABEL } from "@/lib/business-email";

const CALENDLY_URL = "https://calendly.com/deepak-hyperdial/30min";

type ModalPhase = "form" | "calendar";

function Svg({ children, size = 24 }: { children: React.ReactNode; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

const ICONS = {
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />,
  chat: <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>,
  globe: <><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /></>,
  inbox: <><polyline points="22 12 16 12 14 15 10 15 8 12 2 12" /><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /></>,
  sparkles: <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />,
  gauge: <><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></>,
  rocket: <><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></>,
} as const;

export function AiCustomerServicePlatformClient() {
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
      if (e.data?.event === "calendly.event_scheduled") window.location.href = "/ai-customer-service-platform/thank-you";
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
    if (isFreeEmail(email)) {
      setStatus("error");
      setError(FREE_EMAIL_ERROR);
      (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", "lead_blocked_free_email", { lp_source: "lp_automate_support" });
      submittingRef.current = false;
      return;
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "lp_automate_support", name: fullName }),
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
      <div className="field"><label htmlFor={`${p}em`}>{WORK_EMAIL_LABEL}</label><input id={`${p}em`} name="work_email" type="email" required autoComplete="email" placeholder="you@company.com" /></div>
      <div className="field"><label htmlFor={`${p}ph`}>Phone</label><input id={`${p}ph`} name="phone" type="tel" autoComplete="tel" /></div>
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Saving…" : "Book my demo →"}
      </button>
      {status === "error" && <p className="micro" style={{ color: "#B91C1C" }}>{error}</p>}
      <p className="micro">No credit card. No commitment. We&rsquo;ll tailor the walkthrough to your channels.</p>
    </form>
  );

  return (
    <div className="csp-lp">
      {/* ================= DEMO MODAL ================= */}
      <div className={`modal-veil${modalOpen ? " open" : ""}`} role="dialog" aria-modal="true" aria-labelledby="mtitle" onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
        <div className="modal">
          <div className="modal-band"></div>
          <button className="modal-close" aria-label="Close and view the page" onClick={closeModal}>×</button>
          <div className="modal-inner">
            {phase === "form" && (
              <div>
                <p className="eyebrow">Personalised demo · 30 min</p>
                <h2 id="mtitle">See every channel in one workspace</h2>
                <p className="sub">Book a demo and we&rsquo;ll show HyperDial running your tickets, chats, socials and calls — with AI working alongside your team.</p>
                {renderForm("m")}
              </div>
            )}
            {phase === "calendar" && (
              <div>
                <p className="eyebrow">Almost there</p>
                <h2>Pick a time</h2>
                <p className="sub">Choose whatever slot works best for you.</p>
                <iframe src={calUrl} title="Pick a time with HyperDial" style={{ width: "100%", height: 480, border: "none", borderRadius: 8 }} />
                <button type="button" className="micro" style={{ background: "none", border: "none", cursor: "pointer", textDecoration: "underline", display: "block", margin: "10px auto 0" }} onClick={() => { window.location.href = "/ai-customer-service-platform/thank-you"; }}>
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
          <a className="logo" href="#top"><img src="/logo.png" alt="" /><span>Hyper<b>Dial</b></span></a>
          <a href="#" className="btn btn-primary" onClick={demoClick}>Book a demo</a>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <header className="hero" id="top">
        <div className="glow glow-1"></div><div className="glow glow-2"></div>
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">The AI customer service platform</p>
            <h1>Tickets, chats, socials and calls. <em>One platform.</em></h1>
            <p className="lead">HyperDial brings every customer conversation into a single AI-powered workspace. Your team answers anywhere; the AI learns from every conversation — past and live — and quietly takes more of the routine work off their plate.</p>
            <div className="hero-ctas">
              <a href="#" className="btn btn-primary" onClick={demoClick}>Book a demo →</a>
              <a href="#platform" className="btn btn-ghost-inv">Explore the platform</a>
            </div>
            <p className="hero-note">Free 30-minute walkthrough · works alongside your existing tools · live in days, not months</p>
          </div>
          <div className="hero-form">
            <p className="hf-eyebrow">Personalised demo · 30 min</p>
            <h2>Book your demo</h2>
            <p className="hf-sub">We&rsquo;ll show HyperDial running your tickets, chats, socials and calls — no commitment.</p>
            {renderForm("h")}
          </div>
        </div>
      </header>

      {/* ================= PLATFORM PILLARS ================= */}
      <section id="platform">
        <div className="wrap">
          <div className="sec-head rv">
            <p className="eyebrow">The platform</p>
            <h2>Everything customer service needs, in one place.</h2>
            <p>Not another tool bolted onto your stack — the workspace your whole support operation runs in.</p>
          </div>

          <div className="pillar rv">
            <div>
              <p className="eyebrow">Unified inbox</p>
              <h3>Every channel, one queue, full context.</h3>
              <p>Tickets, live chat, WhatsApp and social DMs, and voice calls land in one inbox. Agents see the customer&rsquo;s entire history — every past conversation on every channel — before they say a word.</p>
              <a className="more" href="#" onClick={demoClick}>See the inbox in a demo →</a>
            </div>
            <div className="pillar-visual"><div className="pv-inner">
              <span className="tag">Context</span>
              <p>&ldquo;Aroha has 3 previous conversations: 1 call, 2 chats — last resolved 12 days ago (billing).&rdquo;</p>
              <p className="dim">Shown to the agent automatically, before they answer.</p>
            </div></div>
          </div>

          <div className="pillar rv">
            <div>
              <p className="eyebrow">AI agents</p>
              <h3>Routine requests answered instantly — on any channel.</h3>
              <p>AI agents resolve password resets, order status, plan changes and other everyday requests end-to-end, in your brand voice. Anything they can&rsquo;t finish is handed to your team with a summary and full context — never a cold start.</p>
              <a className="more" href="#" onClick={demoClick}>Watch an AI resolution live →</a>
            </div>
            <div className="pillar-visual"><div className="pv-inner">
              <span className="tag">AI resolved</span>
              <p>&ldquo;Your invoice for June has been emailed to you — and I&rsquo;ve switched your billing to annual as requested.&rdquo;</p>
              <p className="dim">Resolved in 8 seconds · CSAT ★★★★★</p>
            </div></div>
          </div>

          <div className="pillar rv">
            <div>
              <p className="eyebrow">Agent copilot</p>
              <h3>An AI teammate beside every agent.</h3>
              <p>On live chats and calls, the copilot drafts replies, surfaces the right answer from past conversations, transcribes and summarises calls, and suggests the next step — so new agents perform like your best ones.</p>
              <a className="more" href="#" onClick={demoClick}>See the copilot in action →</a>
            </div>
            <div className="pillar-visual"><div className="pv-inner">
              <span className="tag">Copilot suggestion</span>
              <p>&ldquo;This matches 14 previous refund cases. Suggested reply drafted — policy 4.2 applies. Approve to send?&rdquo;</p>
              <p className="dim">Suggested during a live chat.</p>
            </div></div>
          </div>

          <div className="pillar rv">
            <div>
              <p className="eyebrow">Automation &amp; insights</p>
              <h3>Automation that grows out of your own conversations.</h3>
              <p>No decision trees to build. HyperDial studies how your team resolves issues and proposes automations you approve with one click — while dashboards show automation rate, CSAT, and resolution time across every channel.</p>
              <a className="more" href="#" onClick={demoClick}>Get a walkthrough →</a>
            </div>
            <div className="pillar-visual"><div className="pv-inner">
              <span className="tag">Ready for review</span>
              <p>&ldquo;New automation candidate: &lsquo;change billing date&rsquo; — learned from 23 agent resolutions. Approve?&rdquo;</p>
              <p className="dim">One click to deploy across all channels.</p>
            </div></div>
          </div>
        </div>
      </section>

      {/* ================= CHANNELS ================= */}
      <section id="channels" style={{ background: "var(--soft)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="sec-head rv">
            <p className="eyebrow">Channels</p>
            <h2>Meet customers wherever they already are.</h2>
          </div>
          <div className="chgrid">
            <div className="chcard rv"><div className="ico" style={{ color: "var(--brand)" }}><Svg size={22}>{ICONS.phone}</Svg></div><h3>Voice &amp; calls</h3><p>Cloud calling with live transcription, AI call summaries, and instant post-call ticket creation.</p></div>
            <div className="chcard rv"><div className="ico" style={{ color: "var(--green)" }}><Svg size={22}>{ICONS.chat}</Svg></div><h3>Live chat &amp; messaging</h3><p>Website chat and in-app messaging with AI agents on the front line and humans one click away.</p></div>
            <div className="chcard rv"><div className="ico" style={{ color: "var(--amber)" }}><Svg size={22}>{ICONS.mail}</Svg></div><h3>Email &amp; ticketing</h3><p>A modern help desk — routing, SLAs, priorities and AI-drafted replies, without the clutter.</p></div>
            <div className="chcard rv"><div className="ico" style={{ color: "var(--coral)" }}><Svg size={22}>{ICONS.globe}</Svg></div><h3>Social &amp; WhatsApp</h3><p>Instagram, Facebook, X and WhatsApp DMs handled in the same queue as everything else.</p></div>
          </div>
        </div>
      </section>

      {/* ================= AI LEARNING ================= */}
      <section id="ai">
        <div className="wrap">
          <div className="learn rv">
            <div className="glow"></div>
            <p className="eyebrow">The intelligence layer</p>
            <h2>AI that learns from your conversations — not someone else&rsquo;s.</h2>
            <p>Generic bots answer from generic knowledge. HyperDial&rsquo;s AI is trained by your own support operation, from two sources that keep it current:</p>
            <div className="learn-cols">
              <div className="learn-col">
                <span className="n">Source 1 — Your history</span>
                <h3>Every past conversation</h3>
                <p>Connect your existing help desk and the AI studies years of resolved tickets, chats and call transcripts — so it starts smart on day one, in your tone, with your policies.</p>
              </div>
              <div className="learn-col">
                <span className="n">Source 2 — Your team, live</span>
                <h3>Every human conversation, in real time</h3>
                <p>As your agents resolve new issues, the AI watches and learns the pattern. What your best agent solved this morning, the platform can handle by this afternoon.</p>
              </div>
            </div>
            <p className="learn-note"><b>You stay in control:</b> nothing the AI learns goes live without a manager&rsquo;s approval, and your data is never used to train models for anyone else.</p>
          </div>
        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <section id="results">
        <div className="wrap">
          <div className="sec-head rv">
            <p className="eyebrow pill">Customers</p>
            <h2>One platform. Measurable results.</h2>
            <p>The numbers support teams track — unified channels, AI resolution and time to value.</p>
          </div>
          <div className="metrics rv">
            <div className="metric"><div className="mi" style={{ color: "var(--brand)" }}><Svg>{ICONS.inbox}</Svg></div><b><span data-count="6">0</span> channels, one workspace</b><p>Voice, chat, email, WhatsApp and socials in a single queue.</p></div>
            <div className="metric"><div className="mi" style={{ color: "var(--green)" }}><Svg>{ICONS.sparkles}</Svg></div><b><span data-count="40">0</span>% resolved by AI</b><p>Routine conversations handled end to end, without an agent.</p></div>
            <div className="metric"><div className="mi" style={{ color: "var(--amber)" }}><Svg>{ICONS.gauge}</Svg></div><b><span data-count="35">0</span>% faster resolutions</b><p>Average handle time drops as the AI drafts, routes and summarises.</p></div>
            <div className="metric"><div className="mi" style={{ color: "var(--coral)" }}><Svg>{ICONS.rocket}</Svg></div><b><span data-count="2">0</span> days to go live</b><p>Runs alongside your current stack — migrate at your own pace.</p></div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section id="faq" style={{ background: "var(--soft)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <div className="sec-head rv"><p className="eyebrow">FAQ</p><h2>Good questions, straight answers.</h2></div>
          <details className="rv"><summary>Do we have to rip out our current help desk?</summary><p>No. HyperDial can run alongside your existing tools and import your conversation history — many teams migrate channel by channel, at their own pace.</p></details>
          <details className="rv"><summary>Does the AI answer customers without our approval?</summary><p>Only within the scope you approve. Every learned automation sits in a review queue until a manager signs it off, and you can scope the AI to specific topics or channels.</p></details>
          <details className="rv"><summary>What happens when the AI can&rsquo;t help?</summary><p>The conversation hands to your team instantly — with a summary, the customer&rsquo;s history, and a suggested next step. Customers never get stuck in a bot loop.</p></details>
          <details className="rv"><summary>How long does setup take?</summary><p>Most teams are live within days. Connect your channels, import history, and the AI starts learning immediately — no flows to build first.</p></details>
          <details className="rv"><summary>Is our data used to train models for other companies?</summary><p>No. What the AI learns from your conversations stays in your workspace, full stop.</p></details>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section>
        <div className="wrap">
          <div className="final rv">
            <div className="glow"></div>
            <p className="eyebrow" style={{ color: "var(--brand-light)", position: "relative" }}>See it with your own channels</p>
            <h2>Your tickets, chats, socials and calls —<br />running in one workspace, live.</h2>
            <p>Book a 30-minute demo. We&rsquo;ll tailor it to the channels you support and show the AI learning from a real conversation.</p>
            <a href="#" className="btn btn-primary" onClick={demoClick}>Book a demo →</a>
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
