import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientEinsteinBot from "@/components/learning/ClientEinsteinBot";
import { EinsteinProvider } from "./context/EinsteinContext";
import { UserProvider } from "./context/UserContext";
import ThemeToggle from "@/components/ThemeToggle";

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
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                  if (!theme && supportDarkMode) theme = 'dark';
                  if (!theme) theme = 'dark';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen selection:bg-cyan-500/30`}>
        <div className="fixed inset-0 bg-[url('/images/stardust.png')] opacity-[0.03] dark:opacity-20 pointer-events-none transition-opacity duration-300" />
        <div className="fixed inset-0 bg-gradient-to-tr from-cyan-950/5 via-transparent to-blue-950/5 dark:from-cyan-950/20 dark:to-blue-950/20 pointer-events-none transition-opacity duration-300" />

        <UserProvider>
          <ThemeToggle />
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
