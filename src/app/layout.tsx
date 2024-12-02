import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evellyn precisa parar de falar com ex",
  description: "por favor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
