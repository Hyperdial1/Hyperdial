import type { Metadata } from "next";
import { AiBusinessCommunicationPlatformClient } from "./client";
import "./styles.css";

export const metadata: Metadata = {
  title: "HyperDial — AI Business Communication Platform",
  description:
    "More calls answered. Zero leads lost. Calling, routing and follow-ups on one smart phone system — set up in minutes, keep your existing number.",
  robots: { index: false, follow: false },
};

export default function AiBusinessCommunicationPlatformLp() {
  return <AiBusinessCommunicationPlatformClient />;
}
