export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Squad Management</h3>
            <p>
              Take full control of your team — organize players, track performance, and set up tactics for every match.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Player Feedback & Growth</h3>
            <p>
              Empower your players with clear objectives, training schedules, medical tracking, and personalized game feedback to help them improve.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Competitive Insights</h3>
            <p>
              Analyze opponents, study game footage, and receive AI-driven insights to prepare your team for victory against other squads.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
