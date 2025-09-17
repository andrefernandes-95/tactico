export default function Hero() {
    return (
              <section className="flex flex-col items-center text-center py-24 px-6 bg-gradient-to-b from-green-700 to-green-600 text-white relative overflow-hidden">
        {/* Decorative pitch lines */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,transparent_0,transparent_95%,white_95%)]"></div>
        <h2 className="text-5xl font-extrabold mb-6 leading-tight">Dominate the Game with <span className="text-yellow-300">Tactico</span></h2>
        <p className="max-w-2xl text-lg mb-8">
          A modern football management platform — organize squads, plan matches, and boost performance with data-driven insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 z-10">
          <a
            href="/signup"
            className="px-6 py-3 bg-yellow-400 text-green-900 font-semibold rounded-lg hover:bg-yellow-500 transition"
          >
            Start Free Trial
          </a>
          <a
            href="#features"
            className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Explore Features
          </a>
        </div>
      </section>
    )
}