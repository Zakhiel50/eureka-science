import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import EinsteinBot from "@/components/learning/EinsteinBot";
import { EinsteinProvider } from "./context/EinsteinContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EUREKA : L'Odyssée des Sciences",
  description: "Apprendre les sciences en s'amusant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-[#020617] text-slate-200 min-h-screen selection:bg-cyan-500/30`}>
        <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />
        <div className="fixed inset-0 bg-gradient-to-tr from-cyan-950/20 via-transparent to-blue-950/20 pointer-events-none" />
        <EinsteinProvider>
          <main className="relative z-10">
            {children}
          </main>
          <EinsteinBot />
        </EinsteinProvider>
      </body>
    </html>
  );
}
