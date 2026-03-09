import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 border-t border-white/5">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-8">
                    About <span className="text-secondary">Me</span>
                </h2>
                <p className="text-lg md:text-xl text-textMuted leading-relaxed">
                    I'm a Computer Science Engineering student at Sipna College of Engineering
                    and Technology, Amravati, with a deep interest in building scalable,
                    efficient, and robust backend systems. I have hands-on experience as a
                    Full-Stack Developer working with the MERN stack — React, Node.js,
                    Express.js, and MongoDB.
                    <br /><br />
                    My journey includes developing real-world applications like a Smart Grievance
                    Portal and a Local Garage Discovery platform. I'm certified in MERN Stack
                    development through the TechSaksham program (Microsoft & SAP) and in
                    AI/ML through Skills4Future.
                </p>
            </motion.div>
        </section>
    );
};

export default About;
