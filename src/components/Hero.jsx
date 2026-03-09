import { motion } from 'framer-motion';
import { Database, Server, Terminal, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center pt-24 pb-12">
            <div className="w-full grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <h2 className="text-primary font-medium tracking-wide uppercase text-sm flex items-center gap-2">
                            <span className="w-8 h-[1px] bg-primary block"></span>
                            Full-Stack Developer
                        </h2>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
                            Hi, I'm <br />
                            <span className="text-gradient">Anurag</span> <br />
                            Gahankari.
                        </h1>
                        <p className="text-lg text-textMuted max-w-xl leading-relaxed pt-4">
                            A Computer Science Engineering student passionate about
                            building robust backend systems and full-stack web applications
                            using the MERN stack. I turn complex problems into elegant,
                            efficient solutions.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href="#projects"
                            className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-primary/25"
                        >
                            View My Work <ArrowRight size={18} />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 rounded-full font-medium border border-white/20 hover:bg-white/5 transition-colors"
                        >
                            Get In Touch
                        </a>
                    </div>

                    <div className="flex items-center gap-6 pt-8 border-t border-white/10 text-sm font-medium text-textMuted">
                        <div className="flex items-center gap-2">
                            <Server size={18} className="text-primary" /> MERN Stack
                        </div>
                        <div className="flex items-center gap-2">
                            <Database size={18} className="text-secondary" /> Databases
                        </div>
                        <div className="flex items-center gap-2">
                            <Terminal size={18} className="text-white" /> Backend APIs
                        </div>
                    </div>
                </motion.div>

                {/* Right Content / Visuals */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block h-[600px]"
                >
                    {/* Decorative code mockup */}
                    <div className="absolute inset-0 glass rounded-3xl p-6 border border-white/10 overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-50"></div>

                        {/* Mock code blocks */}
                        <div className="space-y-4 font-mono text-sm">
                            <div className="flex gap-2 mb-6">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>

                            <div className="text-primary">const <span className="text-blue-300">server</span> = express();</div>
                            <div className="pl-4 text-textMuted">
                                server.<span className="text-purple-400">use</span>(cors()); <br />
                                server.<span className="text-purple-400">use</span>(express.json());
                            </div>
                            <br />
                            <div className="text-primary">async function <span className="text-blue-300">connectDB</span>() {'{'}</div>
                            <div className="pl-4 text-textMuted">
                                try {'{'} <br />
                                &nbsp;&nbsp;await mongoose.<span className="text-purple-400">connect</span>(process.env.MONGO_URI); <br />
                                &nbsp;&nbsp;console.log(<span className="text-green-400">"Database Connected"</span>); <br />
                                {'}'} catch (err) {'{'} <br />
                                &nbsp;&nbsp;console.error(err); <br />
                                {'}'}
                            </div>
                            <div>{'}'}</div>
                            <br />
                            <div className="text-primary">server.<span className="text-purple-400">listen</span>(8080, () =&gt; {'{'}</div>
                            <div className="pl-4 text-textMuted">
                                console.log(<span className="text-green-400">"Server running on port 8080"</span>);
                            </div>
                            <div>{'})'}</div>
                        </div>

                        {/* Glowing orb effect */}
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-colors duration-500"></div>
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] group-hover:bg-secondary/30 transition-colors duration-500"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
