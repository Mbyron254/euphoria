import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Receive | X-Coin Dashboard",
  description: "Receive crypto assets to your X-Coin wallet",
};

export default function ReceiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Receive Crypto
        </h1>
        {children}
      </div>
    </div>
  );
}
