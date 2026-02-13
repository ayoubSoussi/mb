import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { AudioProvider } from "./components/AudioProvider";
import ConditionalAudioControl from "./components/ConditionalAudioControl";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Our Love Story | Maryam & Ayoub",
  description: "A special Valentine's Day surprise - the story of how we met",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${sourceSans.variable} antialiased`}
      >
        <AudioProvider>
          <ConditionalAudioControl />
          {children}
        </AudioProvider>
      </body>
    </html>
  );
}
