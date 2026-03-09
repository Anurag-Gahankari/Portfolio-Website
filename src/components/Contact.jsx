import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 border-t border-white/5">
            <div className="grid lg:grid-cols-2 gap-16">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Let's <span className="text-primary">Connect</span>
                        </h2>
                        <p className="text-textMuted text-lg">
                            I'm currently looking for new opportunities as a Backend or Full-Stack Engineer.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                    </div>

                    <div className="space-y-6 pt-4">
                        <a href="mailto:gahankarianurag@gmail.com" className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-textMuted">Email</p>
                                <p className="font-medium group-hover:text-primary transition-colors">gahankarianurag@gmail.com</p>
                            </div>
                        </a>


                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-textMuted">Location</p>
                                <p className="font-medium">Amravati, Maharashtra</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 pt-4">
                            <a href="https://www.linkedin.com/in/anurag-gahankari" target="_blank" rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full glass flex items-center justify-center text-textMuted hover:text-primary hover:bg-primary/10 transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://www.github.com/Anurag-Gahankari" target="_blank" rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full glass flex items-center justify-center text-textMuted hover:text-primary hover:bg-primary/10 transition-colors">
                                <Github size={20} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass p-8 rounded-2xl"
                >
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-textMuted mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-textMuted focus:outline-none focus:border-primary transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-textMuted mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-textMuted focus:outline-none focus:border-primary transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-textMuted mb-2">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-textMuted focus:outline-none focus:border-primary transition-colors resize-none"
                                placeholder="Hi Anurag, I think we need a developer like you..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-blue-600 text-white font-medium py-4 rounded-xl transition-colors shadow-lg shadow-primary/20"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
