"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
    title: string;
    subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
    return (
        <section className="pt-32 pb-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-20%] left-[20%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[100px]" />
            </div>
            <div className="container mx-auto px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold mb-4"
                >
                    {title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-gray-400 max-w-2xl mx-auto"
                >
                    {subtitle}
                </motion.p>
            </div>
        </section>
    );
}
