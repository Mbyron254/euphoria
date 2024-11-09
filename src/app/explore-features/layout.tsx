import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | X-Coin",
  description: "Explore the powerful features of X-Coin Wallet",
};

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          X-Coin Features
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Discover how X-Coin Wallet combines security, speed, and simplicity to provide the best crypto management experience
        </p>
      </div>

      <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-3xl shadow-xl p-8">
        {children}
      </div>
    </div>
  );
}
