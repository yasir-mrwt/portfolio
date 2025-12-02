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

  const achievements = [
    { number: "50+", label: "Completed Projects" },
    { number: "3+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6"
            >
              <span className="text-sm text-indigo-400 font-medium">
                About Me
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Building Digital Experiences
            </h1>
            <p className="text-lg text-slate-400">
              Passionate developer with expertise in modern web technologies
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto">
          {/* Bio Section */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-800 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Hello! I'm a Developer
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  With over 3 years of experience in web development, I
                  specialize in building scalable, performant applications using
                  React, Flask, and modern web technologies. My journey in tech
                  has been driven by curiosity and a passion for solving complex
                  problems.
                </p>
                <p>
                  I believe in writing clean, maintainable code and staying
                  current with industry best practices. Whether it's crafting
                  intuitive user interfaces or architecting robust backend
                  systems, I approach every project with attention to detail and
                  commitment to quality.
                </p>
                <p>
                  When I'm not coding, you'll find me contributing to
                  open-source projects, exploring new frameworks, or sharing
                  knowledge with the developer community.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Achievements Grid */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {achievements.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-2xl p-8 border border-indigo-500/20 text-center"
                >
                  <div className="text-4xl font-bold text-white mb-2">
                    {item.number}
                  </div>
                  <div className="text-slate-400">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Experience Timeline */}
          <ScrollReveal direction="up" delay={0.4}>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8">
                Professional Experience
              </h2>
              <div className="space-y-4">
                {experience.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="relative bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-indigo-500/50 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-indigo-400">{item.company}</p>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-400 w-fit">
                        <span>📅</span>
                        <span>{item.year}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Skills Overview */}
          <ScrollReveal direction="up" delay={0.5}>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 border border-slate-800">
              <h2 className="text-3xl font-bold text-white mb-6">
                Core Competencies
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-indigo-400 mb-3">
                    Frontend
                  </h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• React 19 & Next.js</li>
                    <li>• TypeScript & JavaScript</li>
                    <li>• Tailwind CSS & Framer Motion</li>
                    <li>• Three.js & 3D Animations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-3">
                    Backend
                  </h3>
                  <ul className="space-y-2 text-slate-300">
                    <li>• Flask & Python</li>
                    <li>• RESTful API Design</li>
                    <li>• Database Management</li>
                    <li>• Cloud Deployment</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
