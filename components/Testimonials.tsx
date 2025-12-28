"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CEO, TechStart",
        content: "The AI automation has completely transformed our customer service. Response times are down 90%.",
        rating: 5,
    },
    {
        name: "Michael Chen",
        role: "Founder, DataFlow",
        content: "Incredible value for $50/month. The website is fast, beautiful, and I don't have to worry about maintenance.",
        rating: 5,
    },
    {
        name: "Jessica Williams",
        role: "Marketing Director",
        content: "Botyama's team is top-notch. They understood our vision perfectly and delivered a stunning site.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-black/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Trusted by Innovators</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        See what our clients are saying about their digital transformation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors"
                        >
                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                            <div>
                                <h4 className="font-bold text-white">{testimonial.name}</h4>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
