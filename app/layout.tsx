import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "DTI-SAU Calculator Varity",
  description: "เว็บรวบรวมเครื่องมือในการคำนวณจ่างๆ...",
  keywords: ["คำนวณ", "calculator"],
  icons: {
    icon: "/next.svg",
  },
  authors: [
    {
      name: "Adisorn",
      url: "https://sau.ac.th",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kanit.className}`}>{children}</body>
    </html>
  );
}
