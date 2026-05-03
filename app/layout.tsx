import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Changelog Impact Analyzer",
  description: "Analyze changelog impact on user behavior. Correlate feature releases with engagement, churn, and support tickets."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b78a07d0-2acc-46de-ba11-43dae123ef01"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
