import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
    const certifications = [
        {
            title: "MERN Stack Application Development",
            program: "TechSaksham Program",
            highlights: [
                "Completed under TechSaksham, a joint CSR initiative by Microsoft and SAP.",
                "Program implemented by Edunet Foundation during academic year 2024–25.",
                "Gained hands-on experience in full-stack MERN application development.",
                "Built real-world projects applying React, Node.js, Express.js, and MongoDB."
            ],
            color: "primary",
        },
        {
            title: "Artificial Intelligence & Machine Learning with Python",
            program: "Skills4Future Program",
            highlights: [
                "Completed a beginner-to-intermediate certification in AI and Machine Learning.",
                "Learned Python programming fundamentals, including data structures and preprocessing.",
                "Gained practical exposure to data analysis, visualization, and introductory ML concepts.",
                "Implemented basic supervised and unsupervised learning models through guided exercises."
            ],
            color: "secondary",
        }
    ];

    return (
        <section id="certifications" className="py-24 border-t border-white/5">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    <span className="text-secondary">Certifications</span>
                </h2>
                <p className="text-textMuted">Professional development and continuous learning</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className="glass rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300"
                    >
                        {/* Header stripe */}
                        <div className={`h-1.5 w-full ${cert.color === 'primary' ? 'bg-gradient-to-r from-primary to-blue-400' : 'bg-gradient-to-r from-secondary to-purple-400'}`}></div>

                        <div className="p-8">
                            <div className="flex items-start gap-4 mb-6">
                                <div className={`p-3 rounded-xl shrink-0 ${cert.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'}`}>
                                    <Award size={24} className={cert.color === 'primary' ? 'text-primary' : 'text-secondary'} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
                                    <p className={`text-sm font-medium ${cert.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>{cert.program}</p>
                                </div>
                            </div>

                            <ul className="space-y-3">
                                {cert.highlights.map((highlight, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-textMuted">
                                        <CheckCircle size={14} className={`mt-0.5 shrink-0 ${cert.color === 'primary' ? 'text-primary/60' : 'text-secondary/60'}`} />
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
