import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import PageHeader from "@/components/PageHeader";

export default function PricingPage() {
    return (
        <main className="min-h-screen text-white">
            <Navbar />
            <PageHeader
                title="Simple, Transparent Pricing"
                subtitle="One plan, everything included. No hidden fees."
            />
            <Pricing />
            <FAQ />
            <Footer />
        </main>
    );
}
