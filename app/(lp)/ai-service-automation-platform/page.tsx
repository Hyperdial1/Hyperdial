import type { Metadata } from "next";
import { AutomateSupportClient } from "./client";
import "./styles.css";

export const metadata: Metadata = {
  title: "HyperDial — AI Service Automation Platform",
  description:
    "Every resolution makes the next one automatic. The first time your team solves a query, HyperDial learns it — every repeat resolves itself.",
  robots: { index: false, follow: false },
};

export default function AutomateSupportLp() {
  return <AutomateSupportClient />;
}
