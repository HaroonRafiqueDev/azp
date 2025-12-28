import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ProcessPage() {
    const steps = [
        {
            number: "01",
            title: "Subscribe",
            description: "Choose our all-in-one plan and complete the secure checkout via Stripe.",
        },
        {
            number: "02",
            title: "Consultation",
            description: "We reach out within 24 hours to gather your requirements and design preferences.",
        },
        {
            number: "03",
            title: "Development",
            description: "Our expert team builds your custom website, ensuring it meets all your needs.",
        },
        {
            number: "04",
            title: "Launch",
            description: "We deploy your site to our premium hosting and hand over the keys (or manage it for you).",
        },
    ];

    return (
        <main className="min-h-screen bg-background text-white">
            <Navbar />
            <PageHeader
                title="How It Works"
                subtitle="From concept to launch in 4 simple steps."
            />

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent -translate-x-1/2" />

                        {steps.map((step, index) => (
                            <div key={index} className={`relative ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                                {/* Dot on Line */}
                                <div className="hidden md:block absolute top-6 left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 shadow-[0_0_10px_rgba(0,242,255,0.5)]" />

                                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
                                    <span className="text-6xl font-bold text-white/10 mb-4 block">{step.number}</span>
                                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-gray-400">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
