"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Do I own the domain name?",
        answer: "Yes! While we pay for it as long as you are subscribed, the domain is registered in your name and you can transfer it out at any time.",
    },
    {
        question: "What is included in the maintenance?",
        answer: "We handle all software updates, security patches, server monitoring, and minor content updates (like changing text or images) upon request.",
    },
    {
        question: "Can I cancel my subscription?",
        answer: "Absolutely. You can cancel anytime with no penalty. Your site will remain active until the end of your billing period.",
    },
    {
        question: "Is there a setup fee?",
        answer: "No, there are no hidden setup fees. You just pay the monthly subscription rate.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-white/10 rounded-xl bg-white/5 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="font-medium text-lg">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-primary" />
                                ) : (
                                    <Plus className="w-5 h-5 text-gray-400" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-gray-400 border-t border-white/10">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
