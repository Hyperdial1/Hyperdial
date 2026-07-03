import type { Metadata } from "next";
import { AutomateSupportClient } from "./automate-support-client";
import "./automate-support.css";

export const metadata: Metadata = {
  title: "HyperDial — Automate Support",
  description:
    "Every resolution makes the next one automatic. The first time your team solves a query, HyperDial learns it — every repeat resolves itself.",
  robots: { index: false, follow: false },
};

export default function AutomateSupportLp() {
  return <AutomateSupportClient />;
}
