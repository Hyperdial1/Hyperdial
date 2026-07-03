const steps = [
  {
    label: "Observe",
    desc: "Captures how your agents actually resolve each issue across every channel — silently, in the background.",
    icon: "👁️",
  },
  {
    label: "Learn",
    desc: "Distils each resolution into a reusable pattern — intent, steps, actions, outcome.",
    icon: "🧠",
  },
  {
    label: "Verify",
    desc: "A manager reviews and approves every candidate pattern before it ever goes live. You stay in control.",
    icon: "✅",
  },
  {
    label: "Deploy",
    desc: "Approved patterns execute instantly on chat, email, social, and your help desk.",
    icon: "🚀",
  },
];

export function AopLoop() {
  return (
    <section className="py-16 bg-deep text-white">
      <div className="wrap max-w-4xl mx-auto text-center">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-brand-light mb-4">
          The AOP Layer
        </p>
        <h2 className="font-display text-3xl font-semibold text-white mb-4">
          A learning loop, not a script library.
        </h2>
        <p className="text-slate-soft mb-12 max-w-xl mx-auto">
          Every conversation your team handles feeds a supervised loop that compounds — your automation rate rises every week, with a human approving every pattern before it ships.
        </p>
        <div className="grid sm:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center gap-3 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                {step.icon}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-brand-light uppercase tracking-widest">
                  0{i + 1}
                </span>
                <span className="text-sm font-semibold text-white">{step.label}</span>
              </div>
              <p className="text-xs text-slate-soft leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <span className="hidden sm:block absolute top-7 left-full w-6 text-white/20 text-xl -translate-x-3" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-white/40">
          Your pattern library is built from your own calls. It compounds over time and never transfers to a competitor.
        </p>
      </div>
    </section>
  );
}
