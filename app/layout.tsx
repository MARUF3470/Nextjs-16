import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import LightRays from "@/components/LightRays";
import NavBar from "@/components/NavBar";
import { PostHogProvider } from "@/components/PostHogProvider";
import { PostHogPageView } from "@/components/PostHogPageView";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const schibsted_Grotesk = Schibsted_Grotesk({
  variable: "--font-schibsted_Grotesk",
  subsets: ["latin"],
});

const martian_Mono = Martian_Mono({
  variable: "--font-martian_Mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevEvent",
  description: "The hub for Every Dev Event You Mustn't miss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true}
      lang="en"
      className={cn("antialiased", schibsted_Grotesk.variable, martian_Mono.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-screen flex flex-col">
        <PostHogProvider>
          <PostHogPageView />
          <NavBar />
          <div className="absolute inset-0 z-[-1] top-0 min-h-screen">
            <LightRays
              raysOrigin="top-center-offset"
              raysColor="#5dfeca"
              raysSpeed={1}
              lightSpread={0.9}
              rayLength={1.4}
              followMouse={true}
              mouseInfluence={0.02}
              noiseAmount={0}
              distortion={0.01}
            />
          </div>
          <main>

            {children}
          </main>
        </PostHogProvider>
      </body>
    </html>
  );
}
