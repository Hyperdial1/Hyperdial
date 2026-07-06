import type { Metadata } from "next";
import { AiBusinessCommunicationPlatformClient } from "./client";
import "./styles.css";

export const metadata: Metadata = {
  title: "HyperDial — AI Business Communication Platform",
  description:
    "Make every call your best call. Every call recorded, transcribed and analysed — call reports, quality scores and feedback loops that make your team better with every conversation.",
  robots: { index: false, follow: false },
};

export default function AiBusinessCommunicationPlatformLp() {
  return <AiBusinessCommunicationPlatformClient />;
}
