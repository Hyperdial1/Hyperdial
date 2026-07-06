"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CALENDLY_URL = "https://calendly.com/deepak-hyperdial/30min";

const PLATFORMS = [
  "WhatsApp", "Instagram", "Facebook", "Email", "Live Chat",
  "Ticketing (Zendesk / Freshdesk)", "CRM (Salesforce / HubSpot)",
  "SMS", "Twitter / X", "Other",
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
  bot: <><path d="M12 8V4H8" /><rect x="4" y="8" width="16" height="12" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></>,
  refresh: <><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></>,
  branch: <><path d="M6 3v12" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 9a9 9 0 0 1-9 9" /></>,
  sparkles: <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />,
  rocket: <><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></>,
  timer: <><line x1="10" x2="14" y1="2" y2="2" /><line x1="12" x2="15" y1="14" y2="11" /><circle cx="12" cy="14" r="8" /></>,
  check: <><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></>,
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
                borderColor: selected.includes(opt) ? "var(--accent)" : "var(--line)",
                background: selected.includes(opt) ? "var(--sage)" : "#fff",
                color: selected.includes(opt) ? "var(--accent-deep)" : "var(--ink-soft)",
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

export function AutomateSupportClient() {
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

  // Escape closes
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeModal]);

  // Calendly booking confirmation
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.data?.event === "calendly.event_scheduled") window.location.href = "/ai-service-automation-platform/thank-you";
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  // Scroll reveal + counters
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
    const platforms = fd.getAll("platforms");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, platforms, source: "lp_omni", name: fullName }),
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
      <div className="field"><label htmlFor={`${p}eu`}>How many users?</label><input id={`${p}eu`} name="end_users" type="number" placeholder="e.g. 1,000" required /></div>
      <MultiSelect name="platforms" label="Which platforms do you want to integrate?" options={PLATFORMS} />
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Saving…" : "Book my demo →"}
      </button>
      {status === "error" && <p className="micro" style={{ color: "#B91C1C" }}>{error}</p>}
      <p className="micro">No credit card. No setup fee. 20-minute walkthrough, your data stays yours.</p>
    </form>
  );

  return (
    <div className="mockup-lp">
      {/* ================= DEMO MODAL ================= */}
      <div className={`modal-veil${modalOpen ? " open" : ""}`} role="dialog" aria-modal="true" aria-labelledby="mtitle" onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
        <div className="modal">
          <button className="modal-close" aria-label="Close and view the page" onClick={closeModal}>×</button>
          {phase === "form" && (
            <div>
              <p className="eyebrow">Live walkthrough · 30 min</p>
              <h2 id="mtitle">See your support run itself</h2>
              <p className="sub">Book a demo with the founding team. We&rsquo;ll map your top repeat queries and show the automation live — no commitment.</p>
              {renderForm("m")}
            </div>
          )}
          {phase === "calendar" && (
            <div>
              <p className="eyebrow">Almost there</p>
              <h2>Pick a time</h2>
              <p className="sub">Choose whatever slot works best for you.</p>
              <iframe src={calUrl} title="Pick a time with HyperDial" style={{ width: "100%", height: 480, border: "none", borderRadius: 8 }} />
              <button type="button" className="micro" style={{ background: "none", border: "none", cursor: "pointer", textDecoration: "underline", display: "block", margin: "10px auto 0" }} onClick={() => { window.location.href = "/ai-service-automation-platform/thank-you"; }}>
                Already booked? Click here →
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ================= NAV ================= */}
      <nav>
        <div className="wrap nav-inner">
          <a className="logo" href="#top">Hyper<b>Dial</b></a>
          <div className="nav-links">
            <a href="#how">How it works</a>
            <a href="#aop">The learning loop</a>
            <a href="#results">Results</a>
            <a href="#faq">FAQ</a>
            <a href="#" className="btn btn-primary" onClick={demoClick}>Book a demo</a>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <header className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">AI support automation for scaling teams</p>
            <h1>Every resolution makes the next one <em>automatic</em>.</h1>
            <p className="lead">The first time your team solves a query, HyperDial learns it. Every repeat after that — on chat, email, social and your help desk — resolves itself. No scripts. No decision trees. No stale chatbot.</p>
            <div className="hero-ctas">
              <a href="#" className="btn btn-primary" onClick={demoClick}>Book a demo →</a>
              <a href="#how" className="btn btn-ghost">See how it works</a>
            </div>
            <p className="hero-note">Free 20-minute walkthrough · live in under 2 days · works with your existing help desk</p>
          </div>
          <div className="hero-form">
            <p className="hf-eyebrow">Live walkthrough · 30 min</p>
            <h2>Book your demo</h2>
            <p className="hf-sub">We&rsquo;ll map your top repeat queries and show the automation live — no commitment.</p>
            {renderForm("h")}
          </div>
        </div>
      </header>

      {/* ================= PROBLEM ================= */}
      <section id="problem">
        <div className="wrap">
          <div className="sec-head rv">
            <p className="eyebrow">The problem</p>
            <h2>Your team answers the same question 200 times a month.</h2>
            <p>And your chatbot still can&rsquo;t answer it once.</p>
          </div>
          <div className="cards3">
            <div className="card rv"><div className="ico" style={{ color: "var(--accent)" }}><Svg size={22}>{ICONS.bot}</Svg></div><h3>Static chatbots deflect, not resolve</h3><p>Decision-tree bots frustrate customers, escalate anyway, and quietly burn your CSAT.</p></div>
            <div className="card rv"><div className="ico" style={{ color: "var(--accent)" }}><Svg size={22}>{ICONS.refresh}</Svg></div><h3>Solved knowledge evaporates</h3><p>Your best agents solve the same issue daily — and none of that resolution is ever captured or reused.</p></div>
            <div className="card rv"><div className="ico" style={{ color: "var(--accent)" }}><Svg size={22}>{ICONS.branch}</Svg></div><h3>Scripted automation doesn&rsquo;t scale</h3><p>Manual flows go stale the day your product changes. Someone has to maintain every branch, forever.</p></div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section id="how" className="alt-band">
        <div className="wrap">
          <div className="sec-head rv">
            <p className="eyebrow">How it works</p>
            <h2>Your team solves it once. HyperDial takes it from there.</h2>
          </div>
          <div className="steps">
            <div className="step rv"><h3>Connect your channels</h3><p>Plug into your existing chat, email, social and ticketing stack in minutes. Nothing to migrate, nothing to rebuild.</p></div>
            <div className="step rv"><h3>Work exactly as you do today</h3><p>Your agents resolve new issues the normal way. HyperDial observes every resolution — silently, in the background.</p></div>
            <div className="step rv"><h3>Repeats resolve themselves</h3><p>The next time that issue appears — however it&rsquo;s phrased, on any channel — HyperDial resolves it end-to-end automatically.</p></div>
          </div>
        </div>
      </section>

      {/* ================= AOP LOOP ================= */}
      <section id="aop">
        <div className="wrap">
          <div className="aop rv">
            <div className="wrap" style={{ padding: 0 }}>
              <p className="eyebrow">Agent Orchestration Process</p>
              <h2>A learning loop, not a script library.</h2>
              <p>Every conversation your team handles feeds a supervised loop that compounds — your automation rate rises every week, with a human approving every pattern before it ships.</p>
              <div className="aop-grid">
                <div className="aop-node"><span className="n">Observe</span><h3>Watch real resolutions</h3><p>Captures how your agents actually resolve each issue across every channel.</p></div>
                <div className="aop-node"><span className="n">Learn</span><h3>Extract the pattern</h3><p>Distils each resolution into a reusable pattern — intent, steps, actions, outcome.</p></div>
                <div className="aop-node"><span className="n">Verify</span><h3>You stay in control</h3><p>A manager reviews and approves every candidate pattern before it ever goes live.</p></div>
                <div className="aop-node"><span className="n">Deploy</span><h3>Resolve everywhere</h3><p>Approved patterns execute instantly on chat, email, social and your help desk.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RESULTS / STATS ================= */}
      <section id="results">
        <div className="wrap">
          <div className="sec-head rv">
            <p className="eyebrow pill">Results</p>
            <h2>The maths of solving things once.</h2>
            <p>Every resolution your team makes compounds — here&rsquo;s what that adds up to.</p>
          </div>
          <div className="metrics rv">
            <div className="metric"><div className="mi" style={{ color: "var(--accent)" }}><Svg>{ICONS.sparkles}</Svg></div><b><span data-count="70">0</span>% resolved automatically</b><p>Repeat queries handled end to end — however they&rsquo;re phrased, on any channel.</p></div>
            <div className="metric"><div className="mi" style={{ color: "var(--green)" }}><Svg>{ICONS.rocket}</Svg></div><b><span data-count="2">0</span> days to go live</b><p>Plugs into your existing stack. Nothing to migrate, nothing to rebuild.</p></div>
            <div className="metric"><div className="mi" style={{ color: "var(--amber)" }}><Svg>{ICONS.timer}</Svg></div><b><span data-count="6">0</span>-second resolutions</b><p>Median time for an automated answer a customer actually accepts.</p></div>
            <div className="metric"><div className="mi" style={{ color: "var(--coral)" }}><Svg>{ICONS.check}</Svg></div><b><span data-count="0">0</span> scripts to maintain</b><p>No decision trees, no stale flows — the loop maintains itself.</p></div>
          </div>
          <div className="cmp-scroll rv" style={{ marginTop: 56 }}>
            <table className="cmp">
              <tbody>
                <tr><th></th><th>Static chatbot</th><th>Scripted automation</th><th>HyperDial</th></tr>
                <tr><td>Learns from your team&rsquo;s real resolutions</td><td className="no">No</td><td className="no">No</td><td className="yes">Yes — automatically</td></tr>
                <tr><td>Improves without manual maintenance</td><td className="no">No</td><td className="no">No — flows go stale</td><td className="yes">Yes — every week</td></tr>
                <tr><td>Human approval before anything ships</td><td className="no">—</td><td className="no">Author-dependent</td><td className="yes">Built in</td></tr>
                <tr><td>Works across chat, email, social, help desk</td><td className="no">Chat only</td><td className="no">Per-channel builds</td><td className="yes">Every channel, one brain</td></tr>
                <tr><td>Time to value</td><td className="no">Weeks of setup</td><td className="no">Months of authoring</td><td className="yes">&lt; 2 days</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= FIT ================= */}
      <section id="fit" className="alt-band">
        <div className="wrap">
          <div className="sec-head rv">
            <p className="eyebrow">Is this you?</p>
            <h2>HyperDial is built for you if…</h2>
          </div>
          <ul className="fit">
            <li className="rv">A meaningful share of your tickets are <b>repeat questions</b> your team has already answered.</li>
            <li className="rv">You run support on <b>chat, email or social</b> — and want one automation layer across all of it.</li>
            <li className="rv">You&rsquo;ve <b>tried a chatbot before</b> and watched customers rage-click &ldquo;talk to a human.&rdquo;</li>
            <li className="rv">You want resolutions <b>captured automatically</b> — not written into scripts somebody has to maintain.</li>
          </ul>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section id="faq">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <div className="sec-head rv"><p className="eyebrow">FAQ</p><h2>Before you ask —</h2></div>
          <details className="rv"><summary>Does anything go live without our approval?</summary><p>No. Every candidate pattern sits in a review queue until a manager approves it. You control exactly what the AI is allowed to resolve.</p></details>
          <details className="rv"><summary>Do we have to replace our help desk?</summary><p>No. HyperDial layers on top of your existing chat, email, social and ticketing tools. Your team keeps working exactly where they work today.</p></details>
          <details className="rv"><summary>How long does implementation take?</summary><p>Most teams are live in under two days. There&rsquo;s nothing to script — the system starts learning from your very next resolved ticket.</p></details>
          <details className="rv"><summary>What happens to conversations the AI can&rsquo;t handle?</summary><p>They route straight to your team, exactly as they do now — and become the next thing HyperDial learns.</p></details>
          <details className="rv"><summary>Is our customer data used to train models for anyone else?</summary><p>No. Your resolution patterns are learned from your conversations and used only for your workspace.</p></details>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section>
        <div className="wrap">
          <div className="final rv">
            <p className="eyebrow">Ready when you are</p>
            <h2>Watch your top 10 repeat queries<br />resolve themselves — live.</h2>
            <p>30 minutes with the founding team. We&rsquo;ll map your queue and show the loop running on your real use cases.</p>
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
