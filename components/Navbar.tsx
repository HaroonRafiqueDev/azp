"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/50 backdrop-blur-md py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-white tracking-tighter">
                    BOTYAMA
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    <Link href="/features" className="text-gray-300 hover:text-primary transition-colors">
                        Features
                    </Link>
                    <Link href="/process" className="text-gray-300 hover:text-primary transition-colors">
                        Process
                    </Link>
                    <Link href="/pricing" className="text-gray-300 hover:text-primary transition-colors">
                        Pricing
                    </Link>
                    <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">
                        Contact
                    </Link>
                    <Link href="/pricing">
                        <button className="bg-primary/10 border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-black transition-all duration-300">
                            Get Started
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 py-4 px-6 flex flex-col space-y-4"
                >
                    <Link href="/features" className="text-gray-300 hover:text-primary" onClick={() => setIsOpen(false)}>
                        Features
                    </Link>
                    <Link href="/process" className="text-gray-300 hover:text-primary" onClick={() => setIsOpen(false)}>
                        Process
                    </Link>
                    <Link href="/pricing" className="text-gray-300 hover:text-primary" onClick={() => setIsOpen(false)}>
                        Pricing
                    </Link>
                    <Link href="/contact" className="text-gray-300 hover:text-primary" onClick={() => setIsOpen(false)}>
                        Contact
                    </Link>
                    <button className="bg-primary text-black px-6 py-2 rounded-full font-medium">
                        Get Started
                    </button>
                </motion.div>
            )}
        </nav>
    );
}
