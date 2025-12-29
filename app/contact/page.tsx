import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen text-white">
            <Navbar />
            <PageHeader
                title="Get in Touch"
                subtitle="Have questions? We're here to help."
            />

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Email Us</h3>
                                    <p className="text-gray-400">support@botyama.com</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Call Us</h3>
                                    <p className="text-gray-400">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Visit Us</h3>
                                    <p className="text-gray-400">123 Tech Avenue, Silicon Valley, CA</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                                        placeholder="How can we help you?"
                                    />
                                </div>
                                <button className="w-full py-4 rounded-xl bg-primary text-black font-bold hover:bg-white transition-colors">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
