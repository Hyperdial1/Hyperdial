import type { Metadata } from "next";
import { AiCustomerServicePlatformClient } from "./client";
import "./styles.css";

export const metadata: Metadata = {
  title: "HyperDial — The AI Customer Service Platform",
  description:
    "Tickets, chats, socials and calls — one AI-powered workspace. Your team answers anywhere; the AI learns from every conversation and takes the routine work off their plate.",
  robots: { index: false, follow: false },
};

export default function AiCustomerServicePlatformLp() {
  return <AiCustomerServicePlatformClient />;
}
