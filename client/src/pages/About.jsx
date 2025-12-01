/**
 * About Page Component
 */

import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

export default function About() {
  const experience = [
    {
      year: "2023 - Present",
      title: "Senior Full-Stack Developer",
      company: "Tech Company",
    },
    {
      year: "2021 - 2023",
      title: "Full-Stack Developer",
      company: "Startup Inc",
    },
    { year: "2019 - 2021", title: "Frontend Developer", company: "Agency Co" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal direction="up">
          <h1 className="text-5xl font-bold text-center mb-4">
            About <span className="text-indigo-400">Me</span>
          </h1>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Passionate developer crafting elegant solutions to complex problems
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-12">
            <h2 className="text-3xl font-bold mb-4">Hello! I'm a Developer</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              With over 5 years of experience in web development, I specialize
              in creating modern, responsive web applications using cutting-edge
              technologies. My passion lies in transforming complex problems
              into elegant, user-friendly solutions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and staying
              up-to-date with the latest industry trends. When I'm not coding,
              you'll find me contributing to open-source projects or exploring
              new technologies.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            <div className="space-y-4">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-indigo-400">
                        {item.title}
                      </h3>
                      <p className="text-gray-400">{item.company}</p>
                    </div>
                    <span className="text-sm text-gray-500">{item.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
