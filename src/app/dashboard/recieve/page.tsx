"use client";

import { useState } from "react";
import { FaQrcode, FaCopy } from "react-icons/fa";
import { 
  SiBitcoin, 
  SiEthereum, 
  SiDogecoin,
  SiCardano
} from "react-icons/si";
import { IoLogoUsd } from "react-icons/io";
import { TbCurrencySolana } from "react-icons/tb";

interface CryptoWallet {
  name: string;
  symbol: string;
  address: string;
  gradientFrom: string;
  gradientTo: string;
  icon: React.ReactNode;
}

export default function ReceivePage() {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<CryptoWallet | null>(null);
  const [showCopied, setShowCopied] = useState(false);

  const wallets = [
    {
      name: 'Bitcoin',
      symbol: '₿',
      address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
      gradientFrom: 'orange-400',
      gradientTo: 'orange-600',
      icon: <SiBitcoin className="w-8 h-8" />
    },
    {
      name: 'Ethereum',
      symbol: 'Ξ',
      address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
      gradientFrom: 'blue-400',
      gradientTo: 'blue-600',
      icon: <SiEthereum className="w-8 h-8" />
    },
    {
      name: 'USDC',
      symbol: '$',
      address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
      gradientFrom: 'green-400',
      gradientTo: 'green-600',
      icon: <IoLogoUsd className="w-8 h-8" />
    },
    {
      name: 'Dogecoin',
      symbol: 'Ð',
      address: 'D8vFz4p1L37jdg47HXKtSHA5uVrbtRvYBx',
      gradientFrom: 'purple-400',
      gradientTo: 'purple-600',
      icon: <SiDogecoin className="w-8 h-8" />
    },
    {
      name: 'Solana',
      symbol: 'S',
      address: '7ZWZqVaQW4MknUqF3GXMAyUpNenWLdpw9DxmCT4jLfxp',
      gradientFrom: 'pink-400',
      gradientTo: 'pink-600',
      icon: <TbCurrencySolana className="w-8 h-8" />
    },
    {
      name: 'Cardano',
      symbol: 'C',
      address: 'addr1qy2jt0qpqz2z9rmf8x6lcwnf0je8qcncv7h5rqq9uygfxu42x35l',
      gradientFrom: 'red-400',
      gradientTo: 'red-600',
      icon: <SiCardano className="w-8 h-8" />
    }
  ];

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wallets.map((wallet) => (
          <div 
            key={wallet.name}
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
          >
            <div className={`flex items-center justify-between mb-4`}>
              <div className="flex items-center gap-3">
                <div className={`text-${wallet.gradientFrom}`}>
                  {wallet.icon}
                </div>
                <div className={`text-2xl font-bold bg-gradient-to-r from-${wallet.gradientFrom} to-${wallet.gradientTo} bg-clip-text text-transparent`}>
                  {wallet.name}
                </div>
              </div>
              <div className="text-3xl bg-gradient-to-r from-${wallet.gradientFrom} to-${wallet.gradientTo} bg-clip-text text-transparent">
                {wallet.symbol}
              </div>
            </div>
            
            <div className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
              <div className="flex-1 truncate font-mono text-sm text-gray-600 dark:text-gray-300">
                {wallet.address}
              </div>
              <button
                onClick={() => copyToClipboard(wallet.address)}
                className="p-2 hover:bg-white dark:hover:bg-gray-600 rounded-lg transition-colors duration-200 relative group"
                title="Copy address"
              >
                <FaCopy className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200" />
                {showCopied && (
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded">
                    Copied!
                  </span>
                )}
              </button>
              <button
                onClick={() => {
                  setSelectedWallet(wallet);
                  setIsQRModalOpen(true);
                }}
                className="p-2 hover:bg-white dark:hover:bg-gray-600 rounded-lg transition-colors duration-200 group"
                title="Show QR code"
              >
                <FaQrcode className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* QR Code Modal */}
      {isQRModalOpen && selectedWallet && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all animate-slideUp">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className={`text-${selectedWallet.gradientFrom}`}>
                {selectedWallet.icon}
              </div>
              <h3 className={`text-2xl font-bold text-center bg-gradient-to-r from-${selectedWallet.gradientFrom} to-${selectedWallet.gradientTo} bg-clip-text text-transparent`}>
                {selectedWallet.name} Address
              </h3>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-inner mb-6">
              <div className="flex justify-center mb-4">
                {/* <QRCode
                  data={selectedWallet.address}
                  options={{
                    width: 240,
                    height: 240,
                    dotsOptions: { type: "dots", color: "#000000" },
                    backgroundOptions: { color: "#ffffff" },
                    imageOptions: { hideBackgroundDots: true, imageSize: 0.4, margin: 0 }
                  }}
                /> */}
              </div>
              <div className="font-mono text-sm text-gray-600 dark:text-gray-400 text-center break-all">
                {selectedWallet.address}
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => copyToClipboard(selectedWallet.address)}
                className="flex-1 py-3 px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                Copy Address
              </button>
              <button
                onClick={() => setIsQRModalOpen(false)}
                className={`flex-1 py-3 px-4 bg-gradient-to-r from-${selectedWallet.gradientFrom} to-${selectedWallet.gradientTo} text-white rounded-xl hover:opacity-90 transition-opacity duration-200`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
