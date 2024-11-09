export default function Home() {
  return (
    <div className="min-h-screen">
      <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">X-Coin</span>
              </a>
              <div className="hidden md:flex items-center space-x-8 ml-10">
                <a href="/features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</a>
                <a href="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pricing</a>
                <a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/login" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Login</a>
              <a href="/signup" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">Sign Up</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20 p-7">
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
            Welcome to X-Coin Wallet
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience the next generation of crypto management with our secure, lightning-fast, and intuitive digital wallet
          </p>
        </section>

        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-16 w-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center mb-6 transform rotate-3">
              <svg className="h-8 w-8 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Military-Grade Security</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Rest easy knowing your assets are protected by advanced encryption, multi-signature authentication, and hardware security modules. We employ industry-leading security protocols to keep your investments safe.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-16 w-16 bg-green-100 dark:bg-green-900 rounded-2xl flex items-center justify-center mb-6 transform -rotate-3">
              <svg className="h-8 w-8 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Lightning Transactions</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Execute trades and transfers in seconds, not minutes. Our optimized network ensures minimal fees and maximum speed, with real-time transaction tracking and smart routing technology.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-16 w-16 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mb-6 transform rotate-3">
              <svg className="h-8 w-8 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Universal Chain Support</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Seamlessly manage assets across Ethereum, Binance Smart Chain, Polygon, Solana, and more. Our smart interface unifies your crypto portfolio with real-time analytics and cross-chain bridges.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Begin Your Crypto Journey</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied users who trust X-Coin Wallet for their digital asset management
          </p>
          <div className="flex gap-6 justify-center">
            <a href="/signup" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              Get Started
            </a>
            <a href="/explore-features" className="bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-500 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              Explore Features
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
