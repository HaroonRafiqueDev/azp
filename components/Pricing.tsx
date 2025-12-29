"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "Starter",
        price: "$49",
        period: "/month",
        description: "Perfect for small businesses just getting started.",
        features: [
            "Custom Website Development",
            "Basic AI Integration",
            "Hosting & Domain Included",
            "Standard Support",
            "Monthly Maintenance",
        ],
        highlight: false,
    },
    {
        name: "Pro",
        price: "$99",
        period: "/month",
        description: "Advanced solutions for growing companies.",
        features: [
            "Everything in Starter",
            "Advanced AI Agents",
            "Custom Zapier Workflows",
            "Priority Support",
            "SEO Optimization",
            "Weekly Analytics Report",
        ],
        highlight: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "Tailored infrastructure for large organizations.",
        features: [
            "Everything in Pro",
            "Dedicated Account Manager",
            "Custom LLM Fine-tuning",
            "SLA & 99.9% Uptime",
            "On-premise Deployment Options",
            "24/7 Premium Support",
        ],
        highlight: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Choose the plan that fits your scale. No hidden fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                            className={`relative p-8 rounded-3xl border ${plan.highlight
                                ? "bg-white/10 border-primary shadow-[0_0_30px_rgba(0,242,255,0.1)]"
                                : "bg-white/5 border-white/10 hover:border-white/20"
                                } flex flex-col transition-all duration-300`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black px-4 py-1 rounded-full text-sm font-bold">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-baseline mb-4">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className="text-gray-400 ml-1">{plan.period}</span>
                                </div>
                                <p className="text-gray-400 text-sm">{plan.description}</p>
                            </div>

                            <div className="flex-grow mb-8 space-y-4">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start">
                                        <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.highlight ? "text-primary" : "text-gray-500"}`} />
                                        <span className="text-gray-300 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact" className="w-full">
                                <button
                                    className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${plan.highlight
                                        ? "bg-primary text-black hover:bg-white"
                                        : "bg-white text-black hover:bg-gray-200"
                                        }`}
                                >
                                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                                </button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
