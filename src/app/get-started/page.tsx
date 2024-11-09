'use client';

import { useState } from 'react';

export default function CreateWallet() {
  const [step, setStep] = useState(1);
  const [walletData, setWalletData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    walletKey: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const handleCreateWallet = async () => {
    if (walletData.password !== walletData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    setStep(2);
    setIsGenerating(true);
    
    // Simulate wallet key generation
    setTimeout(() => {
      const generatedKey = Array.from({length: 16}, () => 
        Math.random().toString(36).substring(2, 15)
      ).join('-');
      
      setWalletData(prev => ({...prev, walletKey: generatedKey}));
      setIsGenerating(false);
    }, 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletData.walletKey);
    alert('Wallet key copied to clipboard!');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center">
        Create Your Wallet
      </h1>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        {step === 1 && (
          <>
            <h2 className="text-2xl font-bold mb-6">Create Account</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Enter your email and choose a strong password to protect your wallet.
            </p>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                  value={walletData.email}
                  onChange={(e) => setWalletData({...walletData, email: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                  value={walletData.password}
                  onChange={(e) => setWalletData({...walletData, password: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                  value={walletData.confirmPassword}
                  onChange={(e) => setWalletData({...walletData, confirmPassword: e.target.value})}
                />
              </div>
              <button
                onClick={handleCreateWallet}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Create Wallet
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Generating Your Wallet</h2>
            {isGenerating ? (
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-600 dark:text-gray-300">Generating your secure wallet key...</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Your wallet key has been generated. Please save this key in a secure location.
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg break-all font-mono text-sm">
                    {walletData.walletKey}
                  </div>
                </div>
                <div className="space-y-4">
                  <button
                    onClick={copyToClipboard}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
                  >
                    Copy Wallet Key
                  </button>
                  <a
                    href="/dashboard"
                    className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
                  >
                    Go to Dashboard
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
