export default function Navbar() {
    return (
        <header className="flex justify-between items-center px-8 py-4 bg-green-900 text-white shadow">
        <h1 className="text-2xl font-bold">Tactico</h1>
        <nav className="flex gap-6 font-medium">
          <a href="#features" className="hover:text-yellow-300">Features</a>
          <a href="#pricing" className="hover:text-yellow-300">Pricing</a>
          <a href="#about" className="hover:text-yellow-300">About</a>
        </nav>
        <a
          href="/signup"
          className="px-4 py-2 bg-yellow-400 text-green-900 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Get Started
        </a>
      </header>
    )
}