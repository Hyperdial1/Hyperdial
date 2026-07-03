"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CALENDLY_URL = "https://calendly.com/deepak-hyperdial/30min";

const COUNTRIES = [
  "India", "USA", "UK", "UAE", "Canada", "Australia",
  "Singapore", "South Africa", "Other",
];

type ModalPhase = "form" | "calendar" | "booked";

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
    const t = setTimeout(openModal, 400);
    return () => clearTimeout(t);
  }, [openModal]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeModal]);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.data?.event === "calendly.event_scheduled") setPhase("booked");
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
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      submittingRef.current = false;
    }
  }

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
                <form onSubmit={onSubmit}>
                  <div className="row2">
                    <div className="field"><label htmlFor="fn">First name</label><input id="fn" name="first_name" required autoComplete="given-name" /></div>
                    <div className="field"><label htmlFor="ln">Last name</label><input id="ln" name="last_name" required autoComplete="family-name" /></div>
                  </div>
                  <div className="field"><label htmlFor="em">Work email</label><input id="em" name="work_email" type="email" required autoComplete="email" placeholder="you@company.com" /></div>
                  <div className="field"><label htmlFor="ph">Phone</label><input id="ph" name="phone" type="tel" autoComplete="tel" /></div>
                  <div className="field"><label htmlFor="eu">How many end users?</label><input id="eu" name="end_users" type="number" placeholder="e.g. 500" required /></div>
                  <MultiSelect name="countries" label="Which countries will you be calling?" options={COUNTRIES} />
                  <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
                    {status === "sending" ? "Saving…" : "Book my demo — pick a time →"}
                  </button>
                  {status === "error" && <p className="micro" style={{ color: "#B91C1C" }}>{error}</p>}
                  <p className="micro">No credit card. Keep your existing number. Set up in under 5 minutes.</p>
                </form>
              </div>
            )}
            {phase === "calendar" && (
              <div>
                <p className="eyebrow">Almost there</p>
                <h2>Pick a time</h2>
                <p className="sub">Choose whatever slot works best for you.</p>
                <iframe src={calUrl} title="Pick a time with HyperDial" style={{ width: "100%", height: 480, border: "none", borderRadius: 8 }} />
                <button type="button" className="micro" style={{ background: "none", border: "none", cursor: "pointer", textDecoration: "underline", display: "block", margin: "10px auto 0" }} onClick={() => setPhase("booked")}>
                  Already booked? Click here →
                </button>
              </div>
            )}
            {phase === "booked" && (
              <div className="modal-success" style={{ display: "block" }}>
                <div className="tick">✓</div>
                <h2>You&rsquo;re booked in.</h2>
                <p className="sub" style={{ marginTop: 8 }}>A calendar invite is on its way. Meanwhile, see what your phone system is missing ↓</p>
                <button className="btn btn-ghost" onClick={closeModal}>Explore smart calling</button>
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
            <p className="eyebrow">AI-powered business phone system</p>
            <h1>More calls answered. <em>Zero leads lost.</em></h1>
            <p className="lead">Calling, routing and follow-ups on one smart phone system. Set up in minutes, keep your existing number — and every call gets answered, logged, transcribed and followed up. Automatically.</p>
            <div className="hero-ctas">
              <a href="#" className="btn btn-primary" onClick={demoClick}>Book a demo →</a>
              <a href="#features" className="btn btn-ghost-inv">See all features</a>
            </div>
            <p className="hero-note">&lt; 5-minute setup · 99.9% uptime · works with your existing number</p>
          </div>
          <div className="callcard" aria-hidden="true">
            <div className="cc-bar"><span><span className="pulse"></span>Live call</span><span>Smart line · +64 9 ···</span></div>
            <div className="cc-call">
              <div className="cc-ava">JM</div>
              <div><div><b>James M.</b> — inbound, routed to Sales</div><div className="t">Matched by IVR intent · &ldquo;pricing question&rdquo;</div></div>
              <div className="cc-timer">02:47</div>
            </div>
            <div className="cc-line"><span className="tag tg-live">TRANSCRIBING</span><span className="txt">&ldquo;…so we&rsquo;d need around twenty seats from March…&rdquo;</span></div>
            <div className="cc-line" style={{ animationDelay: ".6s" }}><span className="tag tg-ai">AI NOTE</span><span className="txt">Budget confirmed · decision by Friday · send Team plan pricing</span></div>
            <div className="cc-line" style={{ animationDelay: "1.2s" }}><span className="tag tg-task">FOLLOW-UP</span><span className="txt">Task created: email proposal today, call back Thursday 10am</span></div>
            <div className="cc-line" style={{ animationDelay: "1.8s" }}><span className="tag tg-ai">AI SUMMARY</span><span className="txt">Logged to CRM automatically <span>· 0 manual notes taken</span></span></div>
          </div>
        </div>
      </header>

      {/* ratings strip */}
      <div className="ratings">
        <div className="wrap">
          <span className="t">Trusted by growing teams</span>
          <span className="rate"><span className="stars">★★★★★</span> 4.6 on G2 (placeholder)</span>
          <span className="rate"><span className="stars">★★★★★</span> 4.5 on Capterra (placeholder)</span>
          <span className="rate">99.9% uptime SLA</span>
          <span className="rate">Numbers in 150+ countries</span>
        </div>
      </div>

      {/* ================= RESULTS STATS ================= */}
      <section style={{ padding: "72px 0" }}>
        <div className="wrap">
          <div className="sec-head center rv" style={{ marginBottom: 40 }}>
            <p className="eyebrow">Why teams switch</p>
            <h2>What happens when no call falls through the cracks.</h2>
          </div>
          <div className="stats rv">
            <div className="stat"><b><span data-count="0">0</span></b><span>missed calls with smart auto-routing</span></div>
            <div className="stat"><b><span data-count="4">0</span>×</b><span>more conversations per rep with the dialer</span></div>
            <div className="stat"><b>&lt;<span data-count="5">0</span><small> min</small></b><span>from sign-up to your first live call</span></div>
            <div className="stat"><b><span data-count="100">0</span>%</b><span>of calls transcribed, summarised &amp; logged</span></div>
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
            <div className="card rv"><div className="ico">📵</div><h3>Missed calls go to competitors</h3><p>Every unanswered ring is a lead calling the next number on their list. After hours, on weekends, when lines are busy — they don&rsquo;t wait.</p></div>
            <div className="card rv"><div className="ico">🔀</div><h3>Numbers are an admin nightmare</h3><p>Multiple lines, teams and regions mean forwarding rules, spreadsheets and SIM cards nobody wants to manage.</p></div>
            <div className="card rv"><div className="ico">📝</div><h3>Context dies after hang-up</h3><p>Manual call logging and follow-up tracking means notes get skipped, promises get forgotten, and deals quietly go cold.</p></div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section id="features">
        <div className="wrap">
          <div className="sec-head rv">
            <p className="eyebrow">Features</p>
            <h2>Everything a modern phone system should do — in one place.</h2>
            <p>The full calling stack, with AI built into every call rather than bolted on.</p>
          </div>
          <div className="featgrid">
            <div className="feat rv"><div className="fi">🌍</div><h3>Global virtual numbers</h3><p>Local, mobile and toll-free numbers in 150+ countries — buy in a click, go live instantly.</p></div>
            <div className="feat rv"><div className="fi">🔁</div><h3>Number porting</h3><p>Keep your existing business number. Port it in without downtime or telco paperwork.</p></div>
            <div className="feat rv"><div className="fi">🧭</div><h3>Smart call routing</h3><p>Route by team, time zone, language or intent — every caller reaches the right person, first time.</p></div>
            <div className="feat rv"><div className="fi">🎛️</div><h3>Multi-level IVR</h3><p>A phone menu callers don&rsquo;t hate — AI understands what they say, not just what they press.</p></div>
            <div className="feat rv"><div className="fi">⚡</div><h3>Power &amp; auto dialer</h3><p>Burn through call lists without manual dialling — reps just talk, the dialer does the rest.</p></div>
            <div className="feat rv"><div className="fi">🎙️</div><h3>Call recording &amp; transcription</h3><p>Every call recorded and transcribed automatically — searchable forever, compliant by design.</p></div>
            <div className="feat rv"><div className="fi">🧠</div><h3>AI notes, summaries &amp; tasks</h3><p>Key points, commitments and next steps captured on every call — logged to your CRM, no typing.</p></div>
            <div className="feat rv"><div className="fi">📥</div><h3>Call queuing &amp; distribution</h3><p>Fair, automatic distribution across your team with queue callbacks so nobody hangs up angry.</p></div>
            <div className="feat rv"><div className="fi">👂</div><h3>Live monitoring, whisper &amp; barge</h3><p>Coach reps silently mid-call, whisper prompts only they hear, or jump in when it matters.</p></div>
            <div className="feat rv"><div className="fi">🌙</div><h3>After-hours &amp; voicemail drop</h3><p>Business-hour rules, smart voicemail with instant transcripts, and automated callback follow-ups.</p></div>
            <div className="feat rv"><div className="fi">📊</div><h3>Call analytics dashboard</h3><p>Answer rates, wait times, outcomes and rep performance — live, per team and per number.</p></div>
            <div className="feat rv"><div className="fi">🔗</div><h3>CRM &amp; helpdesk integrations</h3><p>Two-way sync with your CRM, helpdesk and Slack — calls, notes and tasks land where you work.</p></div>
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
            <p className="eyebrow">Customers</p>
            <h2>Built for teams who live on the phone.</h2>
          </div>
          <div className="quotes" style={{ marginTop: 0 }}>
            <div className="quote rv"><span className="m">0 missed</span><p>&ldquo;We went from missing a third of inbound calls to missing none. The after-hours AI alone paid for the whole system.&rdquo;</p><cite>Ops Lead, logistics (placeholder)</cite></div>
            <div className="quote rv"><span className="m">3× calls</span><p>&ldquo;The power dialer tripled our outbound conversations, and the AI notes mean reps actually update the CRM now — because they don&rsquo;t have to.&rdquo;</p><cite>Sales Manager, SaaS (placeholder)</cite></div>
            <div className="quote rv"><span className="m">12 numbers</span><p>&ldquo;Twelve numbers across four countries, managed from one dashboard. We deleted the forwarding spreadsheet forever.&rdquo;</p><cite>Founder, e-commerce (placeholder)</cite></div>
          </div>
          <div className="trust rv">
            <span className="badge"><b>99.9%</b> uptime SLA</span>
            <span className="badge"><b>Encrypted</b> calls &amp; recordings</span>
            <span className="badge"><b>GDPR</b> ready</span>
            <span className="badge"><b>SOC 2</b> (in progress — placeholder)</span>
            <span className="badge"><b>150+</b> countries</span>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section id="faq" style={{ background: "var(--soft)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <div className="sec-head rv"><p className="eyebrow">FAQ</p><h2>Before you ask —</h2></div>
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
            <a href="#" className="btn btn-primary" onClick={demoClick}>Book my demo — pick a time →</a>
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
