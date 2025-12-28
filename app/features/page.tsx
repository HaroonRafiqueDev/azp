import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import PageHeader from "@/components/PageHeader";

export default function FeaturesPage() {
    return (
        <main className="min-h-screen bg-background text-white">
            <Navbar />
            <PageHeader
                title="Powerful Features"
                subtitle="Everything you need to build and scale your online presence."
            />
            <Features />
            <Footer />
        </main>
    );
}
