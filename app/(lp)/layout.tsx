export default function LpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-ink antialiased">
      {children}
    </div>
  );
}
