import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    const educationData = [
        {
            institution: "Sipna College of Engineering and Technology, Amravati",
            degree: "B.E. in Computer Science and Engineering",
            period: "Nov 2022 – Present",
            grade: "CGPA: 6.8",
            current: true,
        }
    ];

    return (
        <section id="education" className="py-24 border-t border-white/5">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    <span className="text-primary">Education</span>
                </h2>
                <p className="text-textMuted">My academic journey</p>
            </div>

            <div className="max-w-3xl mx-auto relative">
                {/* Timeline line */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20"></div>

                {educationData.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className={`relative flex items-start mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            }`}
                    >
                        {/* Timeline dot */}
                        <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 shadow-lg shadow-primary/30"></div>

                        {/* Card */}
                        <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-0 md:mr-auto' : 'md:pl-0 md:ml-auto'
                            }`}>
                            <div className="glass rounded-2xl p-6 hover:bg-surface/80 transition-colors">
                                <div className="flex items-center gap-2 mb-3">
                                    <GraduationCap size={18} className="text-primary" />
                                    <span className="text-sm text-primary font-medium">{edu.period}</span>
                                    {edu.current && (
                                        <span className="px-2 py-0.5 text-[10px] font-bold bg-primary/20 text-primary rounded-full border border-primary/30 uppercase tracking-wider">
                                            Current
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-lg font-semibold mb-1">{edu.institution}</h3>
                                <p className="text-textMuted text-sm mb-2">{edu.degree}</p>
                                <p className="text-secondary font-medium text-sm">{edu.grade}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
