import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientEinsteinBot from "@/components/learning/ClientEinsteinBot";
import ClientGuidedTour from "@/components/learning/ClientGuidedTour";
import { EinsteinProvider } from "./context/EinsteinContext";
import { UserProvider } from "./context/UserContext";
import ThemeToggle from "@/components/ThemeToggle";
import AnimatedBackground from "@/components/AnimatedBackground";
import ButtonDonation from "@/components/ButtonDonation";
import BackgroundToggle from "@/components/BackgroundToggle";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const viewport: Viewport = {
  themeColor: "#0891b2",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "EUREKA Science",
  description: "Apprendre les sciences en s'amusant",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "EUREKA Science : L'Odyssée des Sciences",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    apple: "/icon-192x192.png",
  },
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-[200] focus:px-6 focus:py-3 focus:bg-cyan-600 focus:text-white focus:rounded-xl focus:font-bold focus:shadow-2xl"
        >
          Passer au contenu principal
        </a>
        <UserProvider>
          <AnimatedBackground />
          <ThemeToggle />
          <BackgroundToggle />
          <ButtonDonation />
          <EinsteinProvider>
            <main id="main-content" className="relative z-10">
              {children}
            </main>
            <ClientEinsteinBot />
            <ClientGuidedTour />
          </EinsteinProvider>
        </UserProvider>
      </body>
    </html>
  );
}

