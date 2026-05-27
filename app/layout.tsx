import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientEinsteinBot from "@/components/learning/ClientEinsteinBot";
import { EinsteinProvider } from "./context/EinsteinContext";
import { UserProvider } from "./context/UserContext";

const inter = Inter({ subsets: ["latin"], display: "swap" });

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
        <div className="fixed inset-0 bg-[url('/images/stardust.png')] opacity-20 pointer-events-none" />
        <div className="fixed inset-0 bg-gradient-to-tr from-cyan-950/20 via-transparent to-blue-950/20 pointer-events-none" />

        <UserProvider>
          <EinsteinProvider>
            <main className="relative z-10">
              {children}
            </main>
            <ClientEinsteinBot />
          </EinsteinProvider>
        </UserProvider>
      </body>
    </html>
  );
}
