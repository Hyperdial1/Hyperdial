import type { Metadata } from "next";
import { AiBusinessCommunicationPlatformClient } from "./client";
import "./styles.css";

export const metadata: Metadata = {
  title: "HyperDial — AI Business Communication Platform",
  description:
    "Calls that get answered. Clean local numbers in every market you call, number health that protects your caller reputation, and one platform for calls, follow-ups and your CRM.",
  robots: { index: false, follow: false },
};

export default function AiBusinessCommunicationPlatformLp() {
  return <AiBusinessCommunicationPlatformClient />;
}
