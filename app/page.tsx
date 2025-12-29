import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function Home() {
  const steps = [
    { number: "01", title: "Discovery", desc: "We analyze your business needs." },
    { number: "02", title: "Strategy", desc: "We design a custom AI roadmap." },
    { number: "03", title: "Development", desc: "We build and integrate your agents." },
    { number: "04", title: "Launch", desc: "We deploy and optimize for performance." },
  ];

  return (
    <main className="min-h-screen text-white overflow-x-hidden relative">
      <Navbar />
      <Hero />

      <ServicesGrid />

      {/* Process Section (Inline) */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How We Work</h2>
            <p className="text-gray-400">A simple, transparent process to get you results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-4xl font-bold text-primary/20 mb-4 block">{step.number}</span>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Pricing />
      <FAQ />

      {/* Contact Section (Inline) */}
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <p className="text-gray-400 mb-12 text-lg">
            Join the AI revolution today. Schedule a free consultation with our experts.
          </p>
          <Link href="/contact">
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
              Contact Us Now
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
