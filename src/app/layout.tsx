import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "X-Coin Wallet",
  description: "A secure crypto wallet for managing your digital assets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {children}
      </body>
    </html>
  );
}
