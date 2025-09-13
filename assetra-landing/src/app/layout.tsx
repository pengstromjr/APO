import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assetra — Own iconic culture, one share at a time",
  description:
    "Join Assetra to own fractions of cultural collectibles. Get early access to curated drops. Invite friends to move up the waitlist and unlock rewards.",
  openGraph: {
    title: "Assetra — Own iconic culture",
    description:
      "Own fractions of iconic culture with early access to curated drops.",
    images: [
      { url: "/og.jpg", width: 1200, height: 630, alt: "Assetra preview" }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Assetra — Own iconic culture",
    description:
      "Own fractions of iconic culture with early access to curated drops.",
    images: ["/og.jpg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}