"use client";

import { useState } from "react";
import { 
  SiBitcoin, 
  SiEthereum, 
  SiDogecoin,
  SiCardano,
  SiTether
} from "react-icons/si";
import { IoLogoUsd } from "react-icons/io";
import { TbCurrencySolana } from "react-icons/tb";

interface CryptoAsset {
  name: string;
  symbol: string;
  available: string;
  balance: number;
  gradientFrom: string;
  gradientTo: string;
  icon: React.ReactNode;
}

export default function SendPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<CryptoAsset | null>(null);
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const cryptoAssets = [
    {
      name: 'Bitcoin',
      symbol: '₿',
      available: '0.0 BTC',
      balance: 0,
      gradientFrom: 'orange-400',
      gradientTo: 'orange-600',
      icon: <SiBitcoin className="w-8 h-8" />
    },
    {
      name: 'Ethereum',
      symbol: 'Ξ', 
      available: '0.0 ETH',
      balance: 0,
      gradientFrom: 'blue-400',
      gradientTo: 'blue-600',
      icon: <SiEthereum className="w-8 h-8" />
    },
    {
      name: 'USDC',
      symbol: '$',
      available: '0.0 USDC',
      balance: 0,
      gradientFrom: 'green-400',
      gradientTo: 'green-600',
      icon: <IoLogoUsd className="w-8 h-8" />
    },
    {
      name: 'Dogecoin',
      symbol: 'Ð',
      available: '0.0 DOGE',
      balance: 0,
      gradientFrom: 'purple-400',
      gradientTo: 'purple-600',
      icon: <SiDogecoin className="w-8 h-8" />
    },
    {
      name: 'Solana',
      symbol: 'S',
      available: '0.0 SOL',
      balance: 0,
      gradientFrom: 'pink-400',
      gradientTo: 'pink-600',
      icon: <TbCurrencySolana className="w-8 h-8" />
    },
    {
      name: 'Cardano',
      symbol: 'C',
      available: '0.0 ADA',
      balance: 0,
      gradientFrom: 'red-400',
      gradientTo: 'red-600',
      icon: <SiCardano className="w-8 h-8" />
    },
    {
      name: 'USDT',
      symbol: '$',
      available: '1,500 USDT',
      balance: 1500,
      gradientFrom: 'green-400',
      gradientTo: 'green-600',
      icon: <SiTether className="w-8 h-8" />
    }
  ];

  const handleSend = (asset: CryptoAsset) => {
    setSelectedAsset(asset);
    setIsModalOpen(true);
    setShowError(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedAsset && Number(amount) > selectedAsset.balance) {
      setShowError(true);
      return;
    }
    
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Handle transfer logic here
      console.log(`Sending ${amount} ${selectedAsset?.name} to ${address}`);
      setSelectedAsset(null);
      setAmount("");
      setAddress("");
      setIsModalOpen(false);
      setShowError(false);
    } catch {
      setShowError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAsset(null);
    setAmount("");
    setAddress("");
    setShowError(false);
  };

  return (
    <div className="space-y-6 h-[calc(100vh-12rem)] overflow-auto">
      {showError && (
        <div className="fixed top-4 right-4 flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 z-50" role="alert">
          <div className="ms-3 text-sm font-medium">
            {selectedAsset ? 
              `Insufficient funds. You cannot send more than your available balance of ${selectedAsset.available}.` :
              'An error occurred while processing your transaction.'
            }
          </div>
          <button
            type="button"
            onClick={() => setShowError(false)}
            className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
          >
            <span className="sr-only">Close</span>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
          </button>
        </div>
      )}

      <div className="grid gap-4">
        {cryptoAssets.map((asset, index) => (
          <div 
            key={index} 
            onClick={() => asset.balance > 0 && handleSend(asset)}
            className={`group relative overflow-hidden p-4 rounded-xl bg-gradient-to-br from-gray-50/90 to-gray-50/70 dark:from-gray-700/50 dark:to-gray-800/30 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-xl hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 ${asset.balance > 0 ? 'cursor-pointer' : 'cursor-not-allowed'}`}
          >
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${asset.gradientFrom} to-${asset.gradientTo} flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300`}>
                  {asset.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{asset.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Available: <span className="font-medium">{asset.available}</span></p>
                </div>
              </div>
              <button 
                type="button"
                disabled={asset.balance === 0}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  asset.balance === 0 
                    ? 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed text-gray-500 dark:text-gray-400' 
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                Send
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedAsset && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 max-w-lg w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${selectedAsset.gradientFrom} to-${selectedAsset.gradientTo} flex items-center justify-center`}>
                {selectedAsset.icon}
              </div>
              <h2 className="text-xl font-semibold">Send {selectedAsset.name}</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Recipient Address
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  placeholder="Enter recipient's address"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Network
                </label>
                <select
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  defaultValue="mainnet"
                >
                  <option value="mainnet">Etherium</option>
                  <option value="testnet">Tron</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Amount
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    max={selectedAsset.balance}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="0.00"
                    step="any"
                    required
                  />
                  <span className="absolute right-4 top-2 text-gray-500">
                    {selectedAsset.name}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Available balance: {selectedAsset.available}
                </p>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={Number(amount) > selectedAsset.balance || isLoading}
                  className={`flex-1 py-2 rounded-lg transition-colors relative ${
                    Number(amount) > selectedAsset.balance || isLoading
                      ? 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed text-gray-500 dark:text-gray-400'
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <span className="opacity-0">Confirm Send</span>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    </>
                  ) : (
                    'Confirm Send'
                  )}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={isLoading}
                  className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <p className="text-sm text-gray-500 dark:text-gray-400 text-center font-medium animate-pulse">
        Select a cryptocurrency above to initiate a transfer
      </p>
    </div>
  );
}
