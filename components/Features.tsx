"use client";

import { motion } from "framer-motion";
import { Globe, Server, Wrench, Shield } from "lucide-react";

const features = [
    {
        icon: <Globe className="w-8 h-8 text-primary" />,
        title: "Free Website",
        description: "Professional, custom-designed website included with your subscription.",
    },
    {
        icon: <Server className="w-8 h-8 text-secondary" />,
        title: "Premium Hosting",
        description: "Lightning fast, secure cloud hosting with 99.9% uptime guarantee.",
    },
    {
        icon: <Wrench className="w-8 h-8 text-primary" />,
        title: "24/7 Maintenance",
        description: "We handle updates, security patches, and technical issues for you.",
    },
    {
        icon: <Shield className="w-8 h-8 text-secondary" />,
        title: "Domain Included",
        description: "Your custom .com domain is on us for as long as you subscribe.",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 bg-black/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything You Need</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Stop worrying about technical details. We provide a complete digital solution.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group"
                        >
                            <div className="mb-4 p-3 bg-white/5 rounded-lg w-fit group-hover:bg-primary/10 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-400 text-sm">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
