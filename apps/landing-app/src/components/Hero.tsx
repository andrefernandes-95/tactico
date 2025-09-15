export default function Hero() {
  return (
    <header
      className="relative bg-green-700 text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-green-700/60"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-24 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Text & Buttons */}
        <div className="md:w-1/2 flex flex-col justify-center text-left z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 drop-shadow-lg">
            Tactico
          </h1>
          <h3 className="text-1xl md:text-2xl font-semibold mb-2 drop-shadow-lg">
            Team Management Made Simple
          </h3>
          <p className="text-lg md:text-xl mb-6 drop-shadow-lg">
            <em>From practice to match day, manage every step toward victory</em>
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition drop-shadow-lg">
                <p className=" drop-shadow-lg">
                    Get Started
                </p>
            </button>
            <button className="border border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-green-700 transition drop-shadow-lg">
                <p className=" drop-shadow-lg">
                    Learn More
                </p>
            </button>
          </div>
        </div>
      </div>

      {/* Subtle photo credit */}
      <p className="absolute bottom-2 right-2 text-xs text-white/70 z-10 drop-shadow-sm">
        Photo by <a href="https://unsplash.com/@vegfrt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" className="underline">Aliaksei Lepik</a> on <a href="https://unsplash.com/photos/an-aerial-view-of-a-soccer-field-in-a-city-nXGNhHC1VlY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" className="underline">Unsplash</a>
      </p>
    </header>
  )
}
