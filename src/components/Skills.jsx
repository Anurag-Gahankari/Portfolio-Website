import { motion } from 'framer-motion';
import { Database, Layout, Server, Wrench, BarChart3 } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: <Server className="text-primary w-6 h-6" />,
            skills: ["Python", "SQL", "Java", "JavaScript"]
        },
        {
            title: "Frameworks & Libraries",
            icon: <Layout className="text-blue-400 w-6 h-6" />,
            skills: ["Node.js", "Express.js", "React.js"]
        },
        {
            title: "Data Science & Analysis",
            icon: <BarChart3 className="text-secondary w-6 h-6" />,
            skills: ["NumPy", "Pandas", "Seaborn"]
        },
        {
            title: "Databases",
            icon: <Database className="text-green-400 w-6 h-6" />,
            skills: ["MongoDB", "MySQL"]
        },
        {
            title: "Tools & Platforms",
            icon: <Wrench className="text-orange-400 w-6 h-6" />,
            skills: ["Git", "GitHub", "Jupyter Notebook", "Postman", "VS Code"]
        }
    ];

    return (
        <section id="skills" className="py-24 border-t border-white/5">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Technical <span className="text-primary">Skills</span>
                </h2>
                <p className="text-textMuted">Technologies I work with to bring ideas to life</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass rounded-2xl p-6 hover:bg-surface/80 transition-colors"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-white/5 rounded-xl">
                                {category.icon}
                            </div>
                            <h3 className="text-lg font-semibold">{category.title}</h3>
                        </div>

                        <ul className="space-y-3">
                            {category.skills.map((skill, i) => (
                                <li key={i} className="flex items-center gap-2 text-textMuted">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/70"></div>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
