import Link from "next/link";
import Image from "next/image";

export function Wordmark({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const hyper = variant === "light" ? "text-white" : "text-ink";
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <Image
        src="/logo.png"
        alt="HyperDial"
        width={28}
        height={28}
        className="h-7 w-7 rounded-lg"
        priority
      />
      <span className="font-display text-lg font-semibold tracking-tight">
        <span className={hyper}>Hyper</span>
        <span className="text-brand">Dial</span>
      </span>
    </Link>
  );
}
