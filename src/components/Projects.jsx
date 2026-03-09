import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Smart Grievance Portal",
            subtitle: "Full-Stack Complaint Management System",
            description: "A web-based portal for submitting, tracking, and managing citizen complaints with complete complaint lifecycle management.",
            highlights: [
                "Built secure authentication using JWT and bcrypt with role-based access (admin/officer/user).",
                "Implemented complaint CRUD APIs with status workflow (Pending → In Progress → Resolved → Closed).",
                "Added Mongoose validation, standardized API responses, and global error handling for reliability."
            ],
            tags: ["Node.js", "Express.js", "MongoDB", "JWT", "React.js"],
            github: "https://github.com/Anurag-Gahankari",
        },
        {
            title: "SmoothGear",
            subtitle: "Local Garage Discovery & Booking Platform",
            description: "A full-stack app that helps users discover nearby garages via geolocation and book services seamlessly.",
            highlights: [
                "Developed backend services for garage discovery using geolocation-based search.",
                "Built secure REST APIs for login, bookings, and service requests using JWT-based auth.",
                "Implemented role-based access control and structured MongoDB schemas using Mongoose."
            ],
            tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
            github: "https://github.com/Anurag-Gahankari",
        }
    ];

    return (
        <section id="projects" className="py-24 border-t border-white/5">
            <div className="mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Featured <span className="text-secondary">Projects</span>
                </h2>
                <p className="text-textMuted max-w-2xl">
                    Real-world applications I've built, focusing on backend architecture,
                    API design, and full-stack integration.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass rounded-2xl flex flex-col hover:-translate-y-2 transition-transform duration-300"
                    >
                        <div className="p-8 flex-grow">
                            <h3 className="text-2xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-primary text-sm font-medium mb-4">{project.subtitle}</p>
                            <p className="text-textMuted mb-5">{project.description}</p>

                            <ul className="space-y-2 mb-6">
                                {project.highlights.map((highlight, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-textMuted">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/70 mt-1.5 shrink-0"></div>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 border-t border-white/10 flex justify-between items-center bg-black/20 rounded-b-2xl">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                                <Github size={18} /> View Code
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
