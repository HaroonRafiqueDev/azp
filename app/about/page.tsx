import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
    return (
        <main className="min-h-screen text-white">
            <Navbar />
            <PageHeader
                title="About Botyama"
                subtitle="Pioneering the future of business automation through artificial intelligence."
            />

            <section className="py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                At Botyama, we believe that AI shouldn't be complicated. Our mission is to democratize access to powerful automation tools, enabling businesses of all sizes to compete in the digital age. We strip away the complexity and deliver results-driven solutions that save time and drive growth.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-xl font-bold mb-4">Innovation First</h3>
                                <p className="text-gray-400">
                                    We constantly explore the latest advancements in LLMs and automation frameworks to keep our clients ahead of the curve.
                                </p>
                            </div>
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-xl font-bold mb-4">Client Centric</h3>
                                <p className="text-gray-400">
                                    Your success is our metric. We build long-term partnerships, not just one-off projects.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-primary">The Vision</h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                We envision a world where human creativity is amplified by machine intelligence. By automating the mundane, we free up your team to focus on what truly matters: strategy, innovation, and customer relationships.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
