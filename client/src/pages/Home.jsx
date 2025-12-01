/**
 * Home Page Component
 *
 * Main landing page featuring:
 * - 3D robot hero section
 * - Skills showcase
 * - Featured projects preview
 * - Call-to-action sections
 */

import Hero3D from "../components/Hero3D";
import ScrollReveal, {
  ScrollRevealStagger,
  ScrollRevealItem,
} from "../components/ScrollReveal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  const skills = [
    { name: "React", icon: "⚛️", level: 95 },
    { name: "Flask", icon: "🔥", level: 90 },
    { name: "Three.js", icon: "🎨", level: 85 },
    { name: "Tailwind", icon: "💨", level: 95 },
    { name: "Python", icon: "🐍", level: 90 },
    { name: "JavaScript", icon: "📜", level: 95 },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section with 3D Robot */}
      <Hero3D />

      {/* Skills Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <h2 className="text-4xl font-bold text-center mb-12">
              Technical <span className="text-indigo-400">Skills</span>
            </h2>
          </ScrollReveal>

          <ScrollRevealStagger staggerDelay={0.1}>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {skills.map((skill) => (
                <ScrollRevealItem key={skill.name}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-colors"
                  >
                    <div className="text-4xl mb-3">{skill.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>

                    {/* Skill level bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
                      />
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                      {skill.level}% proficiency
                    </p>
                  </motion.div>
                </ScrollRevealItem>
              ))}
            </div>
          </ScrollRevealStagger>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <h2 className="text-4xl font-bold text-center mb-4">
              Featured <span className="text-indigo-400">Projects</span>
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Explore my latest work showcasing modern web technologies and
              creative problem-solving
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 p-8 rounded-2xl border border-indigo-500/30"
              >
                <div className="w-full h-48 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-6xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">E-Commerce Platform</h3>
                <p className="text-gray-400 mb-4">
                  Full-stack shopping experience with real-time inventory
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-3 py-1 bg-indigo-600/30 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-indigo-600/30 rounded-full text-sm">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-indigo-600/30 rounded-full text-sm">
                    MongoDB
                  </span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-2xl border border-purple-500/30"
              >
                <div className="w-full h-48 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-6xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">AI Task Manager</h3>
                <p className="text-gray-400 mb-4">
                  Smart prioritization with machine learning
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">
                    Flask
                  </span>
                  <span className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">
                    TensorFlow
                  </span>
                  <span className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">
                    React
                  </span>
                </div>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-indigo-600 rounded-lg font-semibold hover:bg-indigo-700 transition"
                >
                  View All Projects
                </motion.button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-indigo-900/30 to-purple-900/30">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-4xl font-bold mb-4">
              Let's Build Something{" "}
              <span className="text-indigo-400">Amazing</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Have a project in mind? I'm always open to discussing new
              opportunities and creative ideas.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-indigo-500/50 transition"
              >
                Get In Touch
              </motion.button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
