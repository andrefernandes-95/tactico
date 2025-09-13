import React from 'react';

export const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-500 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tactico</h1>
            <p className="text-lg md:text-xl mb-6">
              Build your dream football squad, simulate matches in real-time, and manage your team like a pro.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition">
                Get Started
              </button>
              <button className="border border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-green-700 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1606401782952-77625f828d0d?auto=format&fit=crop&w=600&q=80"
              alt="Football squad illustration"
              className="rounded-lg shadow-xl w-full max-w-md"
            />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Manage Your Squad</h3>
              <p>Drag and drop players, set formations, and track stats in real-time.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Simulate Matches</h3>
              <p>Run match simulations and see your strategies in action with live results.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Live Team Rooms</h3>
              <p>Use LiveKit RTC to collaborate with your coaching staff and players seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to manage your dream team?</h2>
          <p className="mb-6">Sign up now and start building your football legacy today.</p>
          <button className="bg-white text-green-700 font-semibold px-8 py-4 rounded shadow hover:bg-gray-100 transition">
            Sign Up
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-100 text-center text-gray-600">
        &copy; {new Date().getFullYear()} Táctico. All rights reserved.
      </footer>
    </div>
  );
};

export default App
