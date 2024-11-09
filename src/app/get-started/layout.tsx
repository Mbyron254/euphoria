import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Wallet | X-Coin",
  description: "Create your secure crypto wallet to start managing digital assets",
};

export default function CreateWalletLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-2xl mx-auto py-12">
    

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        {children}
      </div>
    </div>
  );
}
