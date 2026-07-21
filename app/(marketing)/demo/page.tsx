import type { Metadata } from "next";
import { DemoPageContent } from "@/components/demo-page-content";

export const metadata: Metadata = {
  title: "Talk to us",
  description: "See HyperDial live on your real calls — book a 30-minute walkthrough.",
};

export default function DemoPage() {
  return <DemoPageContent />;
}
