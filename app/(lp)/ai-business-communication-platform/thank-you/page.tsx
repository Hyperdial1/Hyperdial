import type { Metadata } from "next";
import Link from "next/link";
import "../styles.css";

export const metadata: Metadata = {
  title: "HyperDial — Demo Confirmed",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="bcp-lp">
      <nav>
        <div className="wrap nav-inner">
          <Link className="logo" href="/ai-business-communication-platform">Hyper<b>Dial</b></Link>
        </div>
      </nav>
      <section style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
        <div className="wrap" style={{ maxWidth: 560 }}>
          <div className="modal-success">
            <div className="tick">✓</div>
            <p className="eyebrow">Demo confirmed</p>
            <h1 style={{ fontSize: "2rem", margin: "10px 0 14px" }}>You&rsquo;re all set — thank you!</h1>
            <p className="sub" style={{ marginBottom: 28 }}>
              A calendar invite is on its way to your inbox. We&rsquo;re looking forward to showing you around HyperDial.
            </p>
            <Link className="btn btn-primary" href="/ai-business-communication-platform">← Back to the homepage</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
