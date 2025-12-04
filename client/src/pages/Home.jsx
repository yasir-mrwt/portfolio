import React, { useState } from "react";
import { Suspense } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";
import Hero3D from "../components/Hero3D";
import SkillsTimelineCTA from "../components/SkillsTimelineCTA";
import ProjectsShowcase from "../components/ProjectsShowcase";

const AboutSection = () => {
  return (
    <div className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5"
        />
      </div>

      {/* Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-16 text-center"
        >
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mx-auto">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Passionate About
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Building Excellence
              </span>
            </h2>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 w-20 mx-auto bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
          />

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-8 max-w-4xl mx-auto"
          >
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-relaxed">
              Full-stack developer with expertise in building robust, scalable applications using modern technologies.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all"
              >
                <h3 className="text-lg font-bold text-white mb-2">Frontend</h3>
                <p className="text-sm text-slate-300">React, Vite, Tailwind CSS, Framer Motion</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all"
              >
                <h3 className="text-lg font-bold text-white mb-2">Backend</h3>
                <p className="text-sm text-slate-300">Node.js, Python, FastAPI, REST APIs</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all"
              >
                <h3 className="text-lg font-bold text-white mb-2">Database</h3>
                <p className="text-sm text-slate-300">MongoDB, PostgreSQL, Supabase</p>
              </motion.div>
            </div>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed pt-4">
              Driven by continuous learning and delivering meaningful, scalable solutions. Open to <span className="text-cyan-400 font-semibold">full-time roles, internships, and project-based work</span> where I can contribute effectively and grow professionally.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-12 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white text-base shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-cyan-500/40"
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-slate-900/50 backdrop-blur-sm border-2 border-cyan-500/30 rounded-xl font-bold text-white text-base hover:bg-slate-900 hover:border-cyan-500/50 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <Hero3D />

      {/* About Section */}
      <AboutSection />

      {/* Skills Timeline Section */}
      <SkillsTimelineCTA />

      {/* Projects Showcase Section */}
      <ProjectsShowcase />

      {/* Enhanced CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm mb-6"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400 font-medium">
                Let's Collaborate
              </span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Build Something
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Extraordinary?
              </span>
            </h2>

            <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              Whether you have a groundbreaking idea or need expert development
              support, let's create something amazing together. I'm available
              for freelance projects, full-time positions, and strategic
              consultations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-lg shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all inline-flex items-center gap-3 w-full sm:w-auto justify-center"
                >
                  Start a Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-slate-800/50 border border-slate-700 rounded-xl font-bold text-lg hover:bg-slate-800 hover:border-cyan-500/50 transition-all inline-flex items-center justify-center gap-3"
              >
                View Portfolio
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-4 flex-wrap"
            >
              <span className="text-slate-400 text-sm font-medium">
                Connect with me:
              </span>

              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-slate-300 hover:border-indigo-500/50 hover:text-indigo-400 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="mailto:hello@example.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-slate-300 hover:border-emerald-500/50 hover:text-emerald-400 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
