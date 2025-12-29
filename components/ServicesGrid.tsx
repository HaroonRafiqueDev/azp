"use client";

import { motion } from "framer-motion";
import { Bot, Zap, FileText, Users, MessageSquare, Settings } from "lucide-react";

const services = [
    {
        icon: <Bot className="w-8 h-8 text-primary" />,
        title: "AI Automation",
        description: "Streamline your business processes with custom AI solutions that work 24/7.",
    },
    {
        icon: <Zap className="w-8 h-8 text-primary" />,
        title: "AI-Enabled Zapier Flows",
        description: "Connect your favorite apps and automate workflows with intelligent logic.",
    },
    {
        icon: <FileText className="w-8 h-8 text-primary" />,
        title: "Content Generation Systems",
        description: "Scale your content production with AI-powered writing and image generation tools.",
    },
    {
        icon: <Users className="w-8 h-8 text-primary" />,
        title: "Custom AI Agents",
        description: "Deploy specialized agents that handle specific tasks like support or sales.",
    },
    {
        icon: <MessageSquare className="w-8 h-8 text-primary" />,
        title: "Chatbot Development",
        description: "Engage customers instantly with intelligent chatbots that understand context.",
    },
    {
        icon: <Settings className="w-8 h-8 text-primary" />,
        title: "Workflow Optimization",
        description: "Analyze and improve your existing workflows for maximum efficiency.",
    },
];

export default function ServicesGrid() {
    return (
        <section id="services" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Comprehensive AI solutions tailored to your business needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 group"
                        >
                            <div className="mb-6 p-4 bg-black/50 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300 border border-white/5">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
