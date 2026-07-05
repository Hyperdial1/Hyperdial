"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CALENDLY_URL = "https://calendly.com/deepak-hyperdial/30min";

type ModalPhase = "form" | "calendar" | "booked";

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
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      submittingRef.current = false;
    }
  }

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
                <form onSubmit={onSubmit}>
                  <div className="row2">
                    <div className="field"><label htmlFor="fn">First name</label><input id="fn" name="first_name" required autoComplete="given-name" /></div>
                    <div className="field"><label htmlFor="ln">Last name</label><input id="ln" name="last_name" required autoComplete="family-name" /></div>
                  </div>
                  <div className="field"><label htmlFor="em">Work email</label><input id="em" name="work_email" type="email" required autoComplete="email" placeholder="you@company.com" /></div>
                  <div className="field"><label htmlFor="ph">Phone</label><input id="ph" name="phone" type="tel" autoComplete="tel" /></div>
                  <div className="row2">
                    <div className="field"><label htmlFor="ts">Support agents on team</label>
                      <input id="ts" name="team_size" type="number" placeholder="e.g. 20" required /></div>
                    <div className="field"><label htmlFor="tv">Monthly ticket volume</label>
                      <input id="tv" name="monthly_tickets" placeholder="e.g. 5,000" required /></div>
                  </div>
                  <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
                    {status === "sending" ? "Saving…" : "Book my demo →"}
                  </button>
                  {status === "error" && <p className="micro" style={{ color: "#B91C1C" }}>{error}</p>}
                  <p className="micro">No credit card. No commitment. We&rsquo;ll tailor the walkthrough to your channels.</p>
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
                <p className="sub" style={{ marginTop: 8 }}>A calendar invite is on its way. Meanwhile, take a look at the platform ↓</p>
                <button className="btn btn-ghost" onClick={closeModal}>Explore the platform</button>
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
            <p className="eyebrow">The AI customer service platform</p>
            <h1>Tickets, chats, socials and calls. <em>One platform.</em></h1>
            <p className="lead">HyperDial brings every customer conversation into a single AI-powered workspace. Your team answers anywhere; the AI learns from every conversation — past and live — and quietly takes more of the routine work off their plate.</p>
            <div className="hero-ctas">
              <a href="#" className="btn btn-primary" onClick={demoClick}>Book a demo →</a>
              <a href="#platform" className="btn btn-ghost-inv">Explore the platform</a>
            </div>
            <p className="hero-note">Free 30-minute walkthrough · works alongside your existing tools · live in days, not months</p>
          </div>
          <div className="inbox" aria-hidden="true">
            <div className="inbox-bar"><span><span className="pulse"></span>All conversations</span><span>One queue</span></div>
            <div className="convo"><span className="ch ch-call">CALL</span><span className="who">Aroha M. — billing dispute <span>· transcribed &amp; summarised</span></span><span className="state st-co">Agent + AI</span></div>
            <div className="convo" style={{ animationDelay: ".5s" }}><span className="ch ch-chat">CHAT</span><span className="who">Daniel R. — &ldquo;reset my password&rdquo;</span><span className="state st-ai">AI resolved</span></div>
            <div className="convo" style={{ animationDelay: "1s" }}><span className="ch ch-soc">SOCIAL</span><span className="who">@kiwistartup — plan upgrade DM</span><span className="state st-ai">AI resolved</span></div>
            <div className="convo" style={{ animationDelay: "1.5s" }}><span className="ch ch-mail">EMAIL</span><span className="who">Priya S. — API integration question</span><span className="state st-open">Assigned · draft ready</span></div>
            <div className="convo" style={{ animationDelay: "2s" }}><span className="ch ch-chat">CHAT</span><span className="who">Tom W. — &ldquo;where&rsquo;s my invoice?&rdquo;</span><span className="state st-ai">AI resolved</span></div>
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
            <div className="chcard rv"><div className="ico">📞</div><h3>Voice &amp; calls</h3><p>Cloud calling with live transcription, AI call summaries, and instant post-call ticket creation.</p></div>
            <div className="chcard rv"><div className="ico">💬</div><h3>Live chat &amp; messaging</h3><p>Website chat and in-app messaging with AI agents on the front line and humans one click away.</p></div>
            <div className="chcard rv"><div className="ico">✉️</div><h3>Email &amp; ticketing</h3><p>A modern help desk — routing, SLAs, priorities and AI-drafted replies, without the clutter.</p></div>
            <div className="chcard rv"><div className="ico">🌐</div><h3>Social &amp; WhatsApp</h3><p>Instagram, Facebook, X and WhatsApp DMs handled in the same queue as everything else.</p></div>
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
            <p className="eyebrow">Customers</p>
            <h2>One platform. Measurable results.</h2>
          </div>
          <div className="stats rv">
            <div className="stat"><b data-count="6">0</b><span>channels unified in one workspace</span></div>
            <div className="stat"><b data-count="40">0</b><span>% of conversations resolved by AI</span></div>
            <div className="stat"><b data-count="35">0</b><span>% faster average resolution time</span></div>
            <div className="stat"><b data-count="2">0</b><span>days to go live alongside your stack</span></div>
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
