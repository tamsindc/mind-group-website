import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.themindgroup.co"),
  title: "Mind Group — Strategy, Governance & Innovation",
  description:
    "Mind Group is a New York–based consultancy advising leaders in government, financial services, healthcare, and education on the strategy, governance, and innovation choices that shape lasting digital transformation.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Mind Group — Strategy, Governance & Innovation",
    description:
      "An advisory firm bringing the perspective of small jurisdictions to global problems, and the rigour of governance to fast-moving technology.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
