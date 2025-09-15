import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';

export const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Hero />

      {/* Features Section */}
     <Features />

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
