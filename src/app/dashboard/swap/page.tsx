"use client";

import { useState } from "react";
import { 
  SiBitcoin, 
  SiEthereum, 
  SiDogecoin,
} from "react-icons/si";
import { IoLogoUsd } from "react-icons/io";
import { FaExchangeAlt } from "react-icons/fa";

interface CryptoAsset {
  name: string;
  symbol: string;
  balance: string;
  gradientFrom: string;
  gradientTo: string;
  icon: React.ReactNode;
}

export default function SwapPage() {
  const [fromAsset, setFromAsset] = useState<CryptoAsset | null>(null);
  const [toAsset, setToAsset] = useState<CryptoAsset | null>(null);
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const cryptoAssets = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      balance: '0.0',
      gradientFrom: 'orange-400',
      gradientTo: 'orange-600',
      icon: <SiBitcoin className="w-6 h-6" />
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      balance: '0.0',
      gradientFrom: 'blue-400',
      gradientTo: 'blue-600',
      icon: <SiEthereum className="w-6 h-6" />
    },
    {
      name: 'USDC',
      symbol: 'USDC',
      balance: '0.0',
      gradientFrom: 'green-400',
      gradientTo: 'green-600',
      icon: <IoLogoUsd className="w-6 h-6" />
    },
    {
      name: 'Dogecoin',
      symbol: 'DOGE',
      balance: '0.0',
      gradientFrom: 'purple-400',
      gradientTo: 'purple-600',
      icon: <SiDogecoin className="w-6 h-6" />
    }
  ];

  const handleSwap = async () => {
    if (!fromAsset || !toAsset || !amount) return;
    
    setIsLoading(true);
    try {
      // Implement swap logic here
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulated delay
      // Reset form
      setAmount("");
      setFromAsset(null);
      setToAsset(null);
    } catch (error) {
      console.error("Swap failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8" style={{ height: "100%" }}>
      <div className="text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Swap Crypto Assets
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Exchange your crypto assets instantly with zero fees
        </p>
      </div>

      <div className="relative bg-white dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl" />
        <div className="relative space-y-6">
          {/* From Asset Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              From
            </label>
            <div className="relative group">
            <select
                value={toAsset?.name || ""}
                onChange={(e) => setToAsset(cryptoAssets.find(asset => asset.name === e.target.value) || null)}
                className="w-full p-4 bg-gray-50/50 dark:bg-gray-700/50 backdrop-blur border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-600/50 appearance-none cursor-pointer group-hover:shadow-lg group-hover:shadow-blue-500/10 font-semibold text-gray-800 dark:text-gray-100"
              >
                <option value="" className="text-gray-800 dark:text-gray-100 font-semibold">Select an asset to swap to...</option>
                {cryptoAssets.map((asset) => (
                  <option 
                    key={asset.name} 
                    value={asset.name}
                    className="py-3 font-semibold text-gray-800 dark:text-gray-100"
                  >
                    {asset.name} ({asset.symbol}) 
                  </option>
                ))}
              </select>
              {fromAsset && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br from-${fromAsset.gradientFrom} to-${fromAsset.gradientTo} flex items-center justify-center`}>
                    {fromAsset.icon}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Amount Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Amount
            </label>
            <div className="relative">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full p-4 bg-gray-50/50 dark:bg-gray-700/50 backdrop-blur border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-600/50 font-semibold text-gray-800 dark:text-gray-100"
              />
              {fromAsset && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-300 font-semibold">
                  {fromAsset.symbol}
                </span>
              )}
            </div>
          </div>

          {/* Swap Icon */}
          <div className="flex justify-center">
            <button 
              className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-blue-500/25 hover:scale-110 transition-all duration-300 transform hover:rotate-180"
              onClick={() => {
                const temp = fromAsset;
                setFromAsset(toAsset);
                setToAsset(temp);
              }}
            >
              <FaExchangeAlt className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* To Asset Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              To
            </label>
            <div className="relative group">
              <select
                value={toAsset?.name || ""}
                onChange={(e) => setToAsset(cryptoAssets.find(asset => asset.name === e.target.value) || null)}
                className="w-full p-4 bg-gray-50/50 dark:bg-gray-700/50 backdrop-blur border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-600/50 appearance-none cursor-pointer group-hover:shadow-lg group-hover:shadow-blue-500/10 font-semibold text-gray-800 dark:text-gray-100"
              >
                <option value="" className="text-gray-800 dark:text-gray-100 font-semibold">Select an asset to swap to...</option>
                {cryptoAssets.map((asset) => (
                  <option 
                    key={asset.name} 
                    value={asset.name}
                    className="py-3 font-semibold text-gray-800 dark:text-gray-100"
                  >
                    {asset.name} ({asset.symbol}) 
                  </option>
                ))}
              </select>
              {toAsset && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br from-${toAsset.gradientFrom} to-${toAsset.gradientTo} flex items-center justify-center`}>
                    {toAsset.icon}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Swap Button */}
          <button
            onClick={handleSwap}
            disabled={!fromAsset || !toAsset || !amount || isLoading}
            className={`w-full py-4 px-6 rounded-2xl text-white font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden ${
              !fromAsset || !toAsset || !amount || isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:shadow-xl hover:shadow-blue-500/25 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700"
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin" />
                <span>Swapping...</span>
              </div>
            ) : (
              "Swap Now"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
