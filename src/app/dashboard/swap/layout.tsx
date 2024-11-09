"use client";

import { ReactNode } from "react";

interface SwapLayoutProps {
  children: ReactNode;
}

export default function SwapLayout({ children }: SwapLayoutProps) {
  return (
    <div className="max-w-2xl mx-auto p-4 md:p-6 lg:p-8" >
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
        {children}
      </div>
    </div>
  );
}
