import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIDES-T2D Study | Portal Access",
  description: "Secure access portal for the AIDES-T2D research study.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      {/* This layout renders the child page (Login or Register) directly.
        We keep this simple so that each page can control its own 
        Split-Screen layout (Form on left, Info on right).
      */}
      <main className="w-full h-full min-h-screen">
        {children}
      </main>
    </div>
  );
}