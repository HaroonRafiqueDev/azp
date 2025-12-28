"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px]" />
            </div>
            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Digital Future</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Premium web development, hosting, and AI automation solutions. All-in-one subscription for your business.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <Link href="/contact">
                            <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
                                Start Building
                            </button>
                        </Link>
                        <Link href="/pricing">
                            <button className="border border-white/20 bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                                View Pricing
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
