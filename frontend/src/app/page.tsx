import Features from "@/app/components/features";
import Footer from "@/app/components/footer";
import Hero from "@/app/components/hero";
import Navbar from "@/app/components/navbar";
import Pricing from "@/app/components/pricing";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}