'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  SiBitcoin,
  SiEthereum,
  SiCardano,
  SiPolkadot,
  SiBinance
} from "react-icons/si";
import { IoLogoUsd, IoChevronDown, IoSettingsSharp, IoLogOutOutline } from "react-icons/io5";
import { TbCurrencySolana } from "react-icons/tb";
import { FaFire, FaUser, FaChevronLeft } from "react-icons/fa";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    {
      section: 'main',
      items: [
        { label: 'Profile', icon: <FaUser className="w-5 h-5" />, href: '/profile' },
        { label: 'Settings', icon: <IoSettingsSharp className="w-5 h-5" />, href: '/settings' }
      ]
    },
    {
      section: 'danger',
      items: [
        { label: 'Sign Out', icon: <IoLogOutOutline className="w-5 h-5" />, href: '/signout', className: 'text-red-600 dark:text-red-400' }
      ]
    }
  ];

  return (
    <div>
      <nav className="flex justify-between items-center mb-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg p-4 rounded-xl shadow-lg">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => router.back()}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
          >
            <FaChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
          <a href="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-xl font-bold text-white">X</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              X-Coin
            </span>
          </a>
        </div>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-x-4 rounded-full pr-4 pl-1.5 py-1.5 bg-white/10 hover:bg-white/20 transition-colors"
          >
            <div className="h-8 w-8 rounded-full ring-2 ring-white/20 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
              <FaUser className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
              John Doe
            </span>
            <IoChevronDown 
              className={`h-4 w-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {isOpen && (
            <div
              className="absolute right-0 mt-2 w-56 rounded-xl bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black/5 dark:ring-white/10 divide-y divide-gray-100 dark:divide-gray-700"
              onMouseLeave={() => setIsOpen(false)}
            >
              <div className="px-4 py-3">
                <p className="text-sm font-medium text-gray-900 dark:text-white">John Doe</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">john@example.com</p>
              </div>
              {menuItems.map((section, idx) => (
                <div key={idx} className="py-1">
                  {section.items.map((item, itemIdx) => (
                    <a 
                      key={itemIdx}
                      href={item.href} 
                      className={`group flex items-center px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700/50 ${item?.className || 'text-gray-700 dark:text-gray-300'}`}
                    >
                      <span className="mr-3 text-gray-400 group-hover:text-gray-500">
                        {item.icon}
                      </span>
                      {item.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>

      <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 sm:p-10 mb-8 shadow-lg">
        <div className="relative">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Total Balance</h3>
          <p className="text-5xl sm:text-6xl font-bold mb-8 tracking-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            $12,345.67
          </p>
          
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-2 sm:mb-0">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <SiBitcoin className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium text-gray-900 dark:text-gray-100">Bitcoin</span>
              </div>
              <div className="flex flex-col sm:items-end">
                <span className="font-semibold text-gray-900 dark:text-gray-100">0.28 BTC</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">$8,234.56</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <a href="https://www.kraken.com/" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1.5 transition-all duration-300">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
          <div className="absolute -inset-3 bg-blue-500/20 blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
          <div className="relative flex flex-col items-center">
            <svg className="h-8 w-8 text-white mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="text-sm text-white font-medium tracking-wide">Buy Crypto</span>
          </div>
        </a>
        
        <a href="/dashboard/recieve" className="group relative overflow-hidden bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-purple-500/25 hover:-translate-y-1.5 transition-all duration-300">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
          <div className="absolute -inset-3 bg-purple-500/20 blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
          <div className="relative flex flex-col items-center">
            <svg className="h-8 w-8 text-white mb-3 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17l-4 4m0 0l-4-4m4 4V3" />
            </svg>
            <span className="text-sm text-white font-medium tracking-wide">Receive</span>
          </div>
        </a>

        <a href="/dashboard/swap" className="group relative overflow-hidden bg-gradient-to-br from-pink-500 to-pink-600 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-pink-500/25 hover:-translate-y-1.5 transition-all duration-300">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
          <div className="absolute -inset-3 bg-pink-500/20 blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
          <div className="relative flex flex-col items-center">
            <svg className="h-8 w-8 text-white mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <span className="text-sm text-white font-medium tracking-wide">Swap</span>
          </div>
        </a>

        <a href="/dashboard/send" className="group relative overflow-hidden bg-gradient-to-br from-indigo-500 to-indigo-600 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 hover:-translate-y-1.5 transition-all duration-300">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
          <div className="absolute -inset-3 bg-indigo-500/20 blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
          <div className="relative flex flex-col items-center">
            <svg className="h-8 w-8 text-white mb-3 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <span className="text-sm text-white font-medium tracking-wide">Send</span>
          </div>
        </a>
      </div>

      <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Trending Currencies</h3>
        <div className="space-y-4 h-[400px] overflow-auto scrollbar-hide hover:scrollbar-default transition-all">
          {[
            {
              name: 'Bitcoin',
              icon: <SiBitcoin className="w-5 h-5 text-white" />,
              price: '$29,342.00',
              change: '+2.4%',
              changeColor: 'text-green-500',
              gradient: 'from-orange-400 to-orange-600'
            },
            {
              name: 'Ethereum',
              icon: <SiEthereum className="w-5 h-5 text-white" />,
              price: '$1,842.15', 
              change: '-1.2%',
              changeColor: 'text-red-500',
              gradient: 'from-blue-400 to-blue-600'
            },
            {
              name: 'USDC',
              icon: <IoLogoUsd className="w-5 h-5 text-white" />,
              price: '$1.00',
              change: '0.0%',
              changeColor: 'text-gray-500',
              gradient: 'from-green-400 to-green-600'
            },
            {
              name: 'Binance Coin',
              icon: <SiBinance className="w-5 h-5 text-white" />,
              price: '$243.15',
              change: '+1.8%',
              changeColor: 'text-green-500',
              gradient: 'from-yellow-400 to-yellow-600'
            },
            {
              name: 'Solana',
              icon: <TbCurrencySolana className="w-5 h-5 text-white" />,
              price: '$84.32',
              change: '+5.2%',
              changeColor: 'text-green-500', 
              gradient: 'from-purple-400 to-purple-600'
            },
            {
              name: 'Cardano',
              icon: <SiCardano className="w-5 h-5 text-white" />,
              price: '$0.52',
              change: '-0.8%',
              changeColor: 'text-red-500',
              gradient: 'from-blue-500 to-blue-700'
            },
            {
              name: 'Polkadot',
              icon: <SiPolkadot className="w-5 h-5 text-white" />,
              price: '$6.84',
              change: '+3.1%',
              changeColor: 'text-green-500',
              gradient: 'from-pink-400 to-pink-600'
            },
            {
              name: 'Avalanche',
              icon: <FaFire className="w-5 h-5 text-white" />,
              price: '$34.21',
              change: '+4.3%',
              changeColor: 'text-green-500',
              gradient: 'from-red-400 to-red-600'
            }
          ].map((coin, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${coin.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                  {coin.icon}
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">{coin.name}</p>
                  <p className={`text-sm ${coin.changeColor}`}>{coin.change}</p>
                </div>
              </div>
              <p className="font-semibold text-gray-900 dark:text-gray-100 group-hover:scale-105 transition-transform duration-200">{coin.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
