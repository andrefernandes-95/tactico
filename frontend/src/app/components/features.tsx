export default function Features() {
    return (

      <section id="features" className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-green-900">Game-Changing Features</h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white shadow rounded-2xl p-6 text-center border-t-4 border-green-600">
            <h4 className="text-xl font-semibold mb-2">Squad Management</h4>
            <p className="text-gray-600">Easily manage players, coaches, and staff like a pro.</p>
          </div>
          <div className="bg-white shadow rounded-2xl p-6 text-center border-t-4 border-green-600">
            <h4 className="text-xl font-semibold mb-2">Match Planning</h4>
            <p className="text-gray-600">Plan lineups and strategies with a digital tactics board.</p>
          </div>
          <div className="bg-white shadow rounded-2xl p-6 text-center border-t-4 border-green-600">
            <h4 className="text-xl font-semibold mb-2">Performance Analytics</h4>
            <p className="text-gray-600">Turn stats into winning insights for your team.</p>
          </div>
          <div className="bg-white shadow rounded-2xl p-6 text-center border-t-4 border-green-600">
            <h4 className="text-xl font-semibold mb-2">Communication Hub</h4>
            <p className="text-gray-600">Announcements, chat, and updates all in one place.</p>
          </div>
          <div className="bg-white shadow rounded-2xl p-6 text-center border-t-4 border-green-600">
            <h4 className="text-xl font-semibold mb-2">Mobile Ready</h4>
            <p className="text-gray-600">Stay connected on the pitch and off it with ease.</p>
          </div>
          <div className="bg-white shadow rounded-2xl p-6 text-center border-t-4 border-green-600">
            <h4 className="text-xl font-semibold mb-2">Collaboration</h4>
            <p className="text-gray-600">Empower staff and players with shared access tools.</p>
          </div>
        </div>
      </section>

    )
}