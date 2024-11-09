import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | X-Coin",
  description: "Manage your crypto portfolio with X-Coin Wallet",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto ">
      <div className=" shadow-lg p-2" style={{ height: "100vh" }}>
        {children}
      </div>
    </div>
  );
}
