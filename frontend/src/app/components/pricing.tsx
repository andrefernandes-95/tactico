export default function Pricing() {
    return (
      <section id="pricing" className="py-20 px-6 bg-green-100">
        <h3 className="text-3xl font-bold text-center mb-12 text-green-900">Choose Your Plan</h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow p-8 text-center">
            <h4 className="text-xl font-bold mb-2">Starter</h4>
            <p className="text-3xl font-bold mb-4">Free</p>
            <p className="text-gray-600 mb-6">For grassroots teams and small clubs.</p>
            <a href="/signup" className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
              Get Started
            </a>
          </div>
          <div className="bg-white rounded-2xl shadow p-8 text-center border-2 border-green-600">
            <h4 className="text-xl font-bold mb-2">Pro</h4>
            <p className="text-3xl font-bold mb-4">$29/mo</p>
            <p className="text-gray-600 mb-6">For ambitious teams looking to grow.</p>
            <a href="/signup" className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
              Choose Pro
            </a>
          </div>
          <div className="bg-white rounded-2xl shadow p-8 text-center">
            <h4 className="text-xl font-bold mb-2">Elite</h4>
            <p className="text-3xl font-bold mb-4">$99/mo</p>
            <p className="text-gray-600 mb-6">For professional clubs and academies.</p>
            <a href="/signup" className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
              Go Elite
            </a>
          </div>
        </div>
      </section>

    )
}