// Pricing data sourced from HyperDial_Pricing_v2.xlsx — three sheets:
// Plans Overview + Highlighted (Top Section) -> tiers below
// Full Feature Matrix -> featureMatrix below
// ROI & Value -> roiStory below
// vs Competitors -> competitors below

export type Tier = {
  id: "pilot" | "growth" | "scale";
  name: string;
  tagline: string;
  pricePerSeat: string;
  priceNote: string;
  monthlyTenSeats: string;
  who: string;
  comparison: string;
  deployment: string;
  highlightLabel: string;
  highlights: string[];
  earlyAccess?: string;
  featured?: boolean;
};

export const tiers: Tier[] = [
  {
    id: "pilot",
    name: "Pilot — Intelligence Layer",
    tagline: "Add a layer of Agent Intelligence Processing to your current setup and automate your calls and conversations.",
    pricePerSeat: "$20",
    priceNote: "/ seat / mo",
    monthlyTenSeats: "$200 / mo at 10 seats",
    who: "Teams that want their existing support tool to perform better — without switching.",
    comparison: "A smart AI layer on top of your current tool — but it learns from every call and conversation.",
    deployment: "Webhook integration on top of your existing tool — built case-by-case. No rip-and-replace.",
    highlightLabel: "Highlighted features",
    highlights: [
      "Agent Intelligence Processing where AI learns from every call",
      "AI auto-answers customer queries",
      "AI call summary & transcription — included on every plan",
      "Connect your knowledge base",
      "Knowledge base that builds itself",
      "Human handoff with full context",
      "Sits on top of your existing CRM or tool, no switching",
      "Read-only + ticket actions (zero risk)",
    ],
    earlyAccess: "Locked for life for founding customers",
  },
  {
    id: "growth",
    name: "Growth — Full Platform",
    tagline: "Run your entire calling operation on HyperDial, with Agent Intelligence Processing across every call and conversation.",
    pricePerSeat: "$32",
    priceNote: "/ seat / mo",
    monthlyTenSeats: "$320 / mo at 10 seats",
    who: "Teams ready to run their full support engine on HyperDial.",
    comparison: "A full helpdesk (like Zendesk/Intercom) — fully loaded, plus AOP that learns from every call.",
    deployment: "Native HyperDial platform + bring-your-own-number / forwarding.",
    highlightLabel: "Everything in Pilot, plus",
    highlights: [
      "Integrated telephony with unlimited calls*",
      "Fully AI integrated conversations",
      "Human hand-off with AI learning from every conversation across channels",
      "All channels — emails, chats, calls, SMS and socials",
      "Full analytics & reporting",
      "Automations and triggers",
      "AI pattern approval workflow + AI self learning",
      "Sentiment analysis on every recorded call",
      "Integration with Jira, Salesforce, HubSpot and other platforms",
    ],
    featured: true,
  },
  {
    id: "scale",
    name: "Scale — Enterprise + ROI",
    tagline: "Manage multiple entities, enterprise-grade with real-time ROI tracking.",
    pricePerSeat: "$44",
    priceNote: "/ seat or custom",
    monthlyTenSeats: "$440+ / mo at 10 seats",
    who: "Larger teams replacing their tools and wanting more — with a partner accountable for ROI.",
    comparison: "Enterprise CX suite — multi-brand, proactive, real-time, fully customised.",
    deployment: "Native platform + custom integrations & API.",
    highlightLabel: "Everything in Growth, plus",
    highlights: [
      "Free QA users and manager dashboards",
      "Proactive support & AI recommendations",
      "Multiple brand identities & help centers",
      "Custom AI voice",
      "Multi-lingual AI agents",
      "Custom cross-channel workflows",
      "Custom roles, SSO, HIPAA, audit trail",
      "Real-time ROI & savings dashboard",
      "Custom modules & routing",
      "Personalized onboarding + dedicated ROI partner",
      "Custom dashboards & deep customization",
      "Dedicated sandbox",
      "Dedicated account manager",
    ],
  },
];

export type FeatureRow = { feature: string; pilot: string; growth: string; scale: string };
export type FeatureSection = { section: string; rows: FeatureRow[] };

export const featureMatrix: FeatureSection[] = [
  {
    section: "AI intelligence (the core)",
    rows: [
      { feature: "Connect & ingest your knowledge base", pilot: "✓", growth: "✓", scale: "✓" },
      { feature: "AI auto-answers customer queries", pilot: "✓", growth: "✓", scale: "✓" },
      { feature: "Agent Intelligence Engine — learns from every conversation", pilot: "✓", growth: "✓", scale: "✓" },
      { feature: "Knowledge base that builds itself", pilot: "✓", growth: "✓", scale: "✓" },
      { feature: "Pattern library", pilot: "✓", growth: "✓", scale: "✓" },
      { feature: "Manager review & approval", pilot: "✓", growth: "✓", scale: "✓" },
      { feature: "Multi-source generative answers", pilot: "✓", growth: "✓", scale: "✓" },
      { feature: "Suggested / auto-draft replies (agent copilot)", pilot: "✓", growth: "✓", scale: "✓" },
      { feature: "Human handoff with full context", pilot: "✓", growth: "✓", scale: "✓" },
      { feature: "Multilingual answers", pilot: "Core", growth: "Expanded", scale: "60+ / custom" },
      { feature: "Tone of voice / brand voice", pilot: "Basic", growth: "✓", scale: "✓" },
      { feature: "Personalized answers (customer context)", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Decay detection on patterns", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Learns from every voice call", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Proactive AI recommendations & insights", pilot: "—", growth: "—", scale: "✓" },
      { feature: "Testing & simulations", pilot: "—", growth: "✓", scale: "✓" },
    ],
  },
  {
    section: "Voice & call features",
    rows: [
      { feature: "Buy local / toll-free numbers", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Inbound + outbound AI calls", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Call recording", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Call transcripts & summaries", pilot: "✓", growth: "✓", scale: "✓" },
      { feature: "Caller ID & custom greetings", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Mute, hold & transfer", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Team routing", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "IVR / voice workflows", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Call CSAT", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Forward / callback / overflow", pilot: "—", growth: "—", scale: "✓" },
      { feature: "Real-time call monitoring & dashboards", pilot: "—", growth: "—", scale: "✓" },
      { feature: "Call barging / live monitoring", pilot: "—", growth: "—", scale: "✓" },
      { feature: "Standard call reports", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Custom call reports", pilot: "—", growth: "—", scale: "✓" },
    ],
  },
  {
    section: "Channels",
    rows: [
      { feature: "AI and human handling over calls", pilot: "Integrated", growth: "✓", scale: "✓" },
      { feature: "AI and human handling over chat", pilot: "Integrated", growth: "✓", scale: "✓" },
      { feature: "AI and human handling over email", pilot: "Integrated", growth: "✓", scale: "✓" },
      { feature: "AI and human handling over WhatsApp", pilot: "Integrated", growth: "✓", scale: "✓" },
      { feature: "AI and human handling over SMS", pilot: "Integrated", growth: "✓", scale: "✓" },
      { feature: "AI over social (Instagram / FB / X)", pilot: "Integrated", growth: "✓", scale: "✓" },
      { feature: "Web messenger / widget", pilot: "Integrated", growth: "✓", scale: "✓" },
    ],
  },
  {
    section: "Reporting & analytics",
    rows: [
      { feature: "Deflection / volume dashboard", pilot: "✓", growth: "✓", scale: "✓" },
      { feature: "AI performance report", pilot: "✓", growth: "✓", scale: "✓" },
      { feature: "CSAT tracking", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Cost-per-ticket tracking", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Full intent & outcome analytics", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Report builder & pre-built reports", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Data export", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Advanced / custom reports", pilot: "—", growth: "—", scale: "✓" },
      { feature: "Real-time dashboard", pilot: "—", growth: "—", scale: "✓" },
    ],
  },
  {
    section: "Helpdesk / inbox",
    rows: [
      { feature: "Shared inbox", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Inbox views", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Macros", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Assign & snooze conversations", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Multiple team inboxes", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Round-robin assignment", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Office hours & reply time", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Workload management", pilot: "—", growth: "—", scale: "✓" },
      { feature: "Service level agreements (SLAs)", pilot: "—", growth: "—", scale: "✓" },
    ],
  },
  {
    section: "Ticketing",
    rows: [
      { feature: "Ticketing system", pilot: "Creates in your tool", growth: "✓", scale: "✓" },
      { feature: "Ticket forms", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Ticket data attributes", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Tickets portal", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Side conversations", pilot: "—", growth: "—", scale: "✓" },
    ],
  },
  {
    section: "Help center / knowledge",
    rows: [
      { feature: "Connect existing knowledge base", pilot: "✓", growth: "✓", scale: "✓" },
      { feature: "Public help center", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Unlimited articles & collections", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Help center customization", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Multilingual help center", pilot: "—", growth: "—", scale: "✓" },
      { feature: "Private / unbranded help center", pilot: "—", growth: "—", scale: "✓" },
      { feature: "Multiple help centers", pilot: "—", growth: "—", scale: "✓" },
    ],
  },
  {
    section: "Proactive support",
    rows: [
      { feature: "Proactive messages / banners / tooltips", pilot: "—", growth: "—", scale: "✓" },
      { feature: "Surveys", pilot: "—", growth: "—", scale: "✓" },
      { feature: "Product tours / checklists", pilot: "—", growth: "—", scale: "✓" },
    ],
  },
  {
    section: "Handling & safety",
    rows: [
      { feature: "Read-only + ticket actions (never risky actions)", pilot: "✓", growth: "✓", scale: "✓" },
      { feature: "Escalation rules", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Consent / call-recording compliance", pilot: "Via your tool", growth: "✓", scale: "✓" },
    ],
  },
  {
    section: "Integrations",
    rows: [
      { feature: "Connect existing tool via webhooks (case-by-case)", pilot: "✓", growth: "✓", scale: "✓" },
      { feature: "HubSpot / Salesforce / Zendesk / Slack / Pipedrive", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Custom actions", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "API access", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Extended API limits & custom integrations", pilot: "—", growth: "—", scale: "✓" },
    ],
  },
  {
    section: "Platform, security & admin",
    rows: [
      { feature: "Data encryption (in transit & at rest)", pilot: "✓", growth: "✓", scale: "✓" },
      { feature: "Custom objects & events", pilot: "—", growth: "—", scale: "✓" },
      { feature: "Workspace sandbox", pilot: "—", growth: "—", scale: "✓" },
      { feature: "Custom roles", pilot: "—", growth: "—", scale: "✓" },
      { feature: "SSO & identity management", pilot: "—", growth: "—", scale: "✓" },
      { feature: "Role-based access", pilot: "—", growth: "—", scale: "✓" },
      { feature: "Audit trail", pilot: "—", growth: "—", scale: "✓" },
      { feature: "HIPAA support", pilot: "—", growth: "—", scale: "✓" },
    ],
  },
  {
    section: "Multi-brand & customization",
    rows: [
      { feature: "Multiple brand identities", pilot: "—", growth: "—", scale: "✓" },
      { feature: "Multibrand messenger / email", pilot: "—", growth: "—", scale: "✓" },
      { feature: "Custom branding / white-label", pilot: "—", growth: "—", scale: "✓" },
      { feature: "Multiple workspaces", pilot: "—", growth: "—", scale: "✓" },
    ],
  },
  {
    section: "Support & success",
    rows: [
      { feature: "Email support", pilot: "✓", growth: "✓", scale: "✓" },
      { feature: "Priority support", pilot: "—", growth: "✓", scale: "✓" },
      { feature: "Self-serve onboarding", pilot: "✓", growth: "✓", scale: "—" },
      { feature: "Personalized onboarding", pilot: "—", growth: "—", scale: "✓" },
      { feature: "Dedicated support & SLAs", pilot: "—", growth: "—", scale: "✓" },
      { feature: "Dedicated ROI partner / CSM", pilot: "—", growth: "—", scale: "✓" },
    ],
  },
];

export const roiStory = {
  title: "The ROI story (10-seat team)",
  rows: [
    { metric: "Support headcount", today: "10 agents", withHyperDial: "10 seats (AI-augmented)" },
    { metric: "Fully-loaded cost per agent / month", today: "$5,000", withHyperDial: "—" },
    { metric: "Total human cost / month", today: "$50,000", withHyperDial: "$50,000 (initially)" },
    { metric: "HyperDial cost / month (10 × $32)", today: "—", withHyperDial: "$320" },
    { metric: "HyperDial as % of human cost", today: "—", withHyperDial: "<1%" },
    { metric: "Typical volume the AI handles", today: "0%", withHyperDial: "60–80% (grows weekly)" },
    { metric: "Effect", today: "Hire more agents as volume grows", withHyperDial: "Handle 2–3x volume without adding heads" },
    { metric: "Illustrative saving (avoid 4 hires)", today: "—", withHyperDial: "~$20,000 / month" },
  ],
  footnote:
    "At under 1% of what a human team costs, HyperDial pays for itself the moment it lets you avoid a single hire. Figures illustrative; finalised with each pilot.",
};

export type CompetitorRow = { capability: string; hyperdial: string; intercom: string; zendesk: string; decagon: string; voiceTools: string };

export const competitors: { columns: string[]; rows: CompetitorRow[] } = {
  columns: ["HyperDial", "Intercom Fin", "Zendesk AI", "Decagon", "Vapi / Bland / Retell"],
  rows: [
    { capability: "Voice / calling", hyperdial: "✓", intercom: "✓", zendesk: "✓ (EAP)", decagon: "✓", voiceTools: "✓" },
    { capability: "Chat / email / social", hyperdial: "✓", intercom: "✓", zendesk: "✓", decagon: "✓", voiceTools: "—" },
    { capability: "Learns from YOUR agents", hyperdial: "✓", intercom: "—", zendesk: "—", decagon: "—", voiceTools: "—" },
    { capability: "Predictable per-seat pricing", hyperdial: "✓", intercom: "— ($/resolution)", zendesk: "— ($/resolution)", decagon: "— (custom)", voiceTools: "— ($/min)" },
    { capability: "Sits on top of your existing tool", hyperdial: "✓", intercom: "Partial", zendesk: "Partial", decagon: "—", voiceTools: "—" },
    { capability: "Built for SMB / mid-market budget", hyperdial: "✓", intercom: "Partial", zendesk: "Partial", decagon: "— (enterprise)", voiceTools: "✓ (DIY)" },
    { capability: "Read-only + ticket safety", hyperdial: "✓", intercom: "Partial", zendesk: "Partial", decagon: "Partial", voiceTools: "—" },
    { capability: "Knowledge base builds itself", hyperdial: "✓", intercom: "—", zendesk: "—", decagon: "—", voiceTools: "—" },
  ],
};
