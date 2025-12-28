import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white overflow-x-hidden">
      <Navbar />
      <Hero />

      {/* Highlights Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Why Choose Botyama?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-gray-400">Optimized for speed and performance.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold mb-2">Secure</h3>
              <p className="text-gray-400">Enterprise-grade security included.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold mb-2">Scalable</h3>
              <p className="text-gray-400">Grows with your business needs.</p>
            </div>
          </div>
          <Link href="/features" className="text-primary hover:underline text-lg">
            Explore all features &rarr;
          </Link>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </main>
  );
}
