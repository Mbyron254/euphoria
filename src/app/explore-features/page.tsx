export default function ExploreFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white dark:bg-gray-800/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="h-14 w-14 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-6">
          <svg className="h-7 w-7 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-4">Advanced Security Features</h3>
        <ul className="space-y-4 text-gray-600 dark:text-gray-300">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Multi-factor authentication with biometric support
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Hardware security module integration
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Encrypted backup and recovery options
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Real-time security monitoring and alerts
          </li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="h-14 w-14 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mb-6">
          <svg className="h-7 w-7 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-4">Smart Trading Tools</h3>
        <ul className="space-y-4 text-gray-600 dark:text-gray-300">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Real-time market data and analytics
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Automated trading strategies
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Price alerts and notifications
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Portfolio tracking and reporting
          </li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="h-14 w-14 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-6">
          <svg className="h-7 w-7 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-4">Cross-Chain Integration</h3>
        <ul className="space-y-4 text-gray-600 dark:text-gray-300">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Support for multiple blockchain networks
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Cross-chain token swaps
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Unified asset management
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Bridge protocol integration
          </li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-800/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="h-14 w-14 bg-pink-100 dark:bg-pink-900 rounded-xl flex items-center justify-center mb-6">
          <svg className="h-7 w-7 text-pink-600 dark:text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-4">Lightning Network Support</h3>
        <ul className="space-y-4 text-gray-600 dark:text-gray-300">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Instant micropayments
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Low transaction fees
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Payment channel management
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            Network routing optimization
          </li>
        </ul>
      </div>
    </div>
  );
}
