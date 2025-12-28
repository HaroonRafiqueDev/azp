"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
    const handleSubscribe = () => {
        // TODO: Replace with actual Stripe Payment Link
        window.open("https://buy.stripe.com/test_placeholder", "_blank");
    };

    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple Pricing</h2>
                    <p className="text-gray-400">No hidden fees. Cancel anytime.</p>
                </div>

                <div className="max-w-md mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="p-8 rounded-3xl bg-gradient-to-b from-white/10 to-black border border-white/20 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />

                        <h3 className="text-2xl font-bold mb-2">All-In-One Plan</h3>
                        <div className="flex items-baseline mb-6">
                            <span className="text-5xl font-bold">$50</span>
                            <span className="text-gray-400 ml-2">/month</span>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Custom Website Design",
                                "Domain Name Included",
                                "Premium Hosting",
                                "SSL Security Certificate",
                                "Monthly Content Updates",
                                "24/7 Technical Support",
                                "SEO Optimization",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-gray-300">
                                    <Check className="w-5 h-5 text-primary mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={handleSubscribe}
                            className="w-full py-4 rounded-xl bg-white text-black font-bold text-lg hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        >
                            Subscribe Now
                        </button>
                        <p className="text-center text-xs text-gray-500 mt-4">
                            Secure payment via Stripe. Auto-renews monthly.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
