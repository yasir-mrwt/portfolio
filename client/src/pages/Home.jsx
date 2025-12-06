import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  CheckCircle,
  Send,
  AlertCircle,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  Terminal,
  Zap,
} from "lucide-react";
import Hero3D from "../components/Hero3D";
import SkillsTimelineCTA from "../components/SkillsTimelineCTA";
import ProjectsShowcase from "../components/ProjectsShowcase";
import { sendContact } from "../utils/api";
import cvFile from "../assets/images/cv.pdf";

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const result = await sendContact(formData);

      if (result.status === "success") {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        }, 5000);
      } else {
        setError(result.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 md:p-8 lg:p-12 shadow-2xl shadow-black/30">
        {isSubmitted ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mb-6"
            >
              <CheckCircle className="w-10 h-10 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Message Sent Successfully!
            </h3>
            <p className="text-slate-300">
              Thank you for reaching out. I'll get back to you soon.
            </p>
          </motion.div>
        ) : (
          <>
            <div className="text-center mb-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm mb-4"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-400 font-medium">
                  Get In Touch
                </span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Send me a message
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Have a project in mind or want to discuss opportunities? Fill
                out the form below and I'll get back to you within 24 hours.
              </p>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-3"
              >
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm text-red-400">{error}</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-medium text-slate-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/70 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-medium text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/70 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                <label className="text-sm font-medium text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/70 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
                  placeholder="Project Inquiry"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-2"
              >
                <label className="text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-slate-900/70 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="pt-4"
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white text-base shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 inline-flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </>
        )}
      </div>
    </motion.div>
  );
};

// Professional Summary Section
const ProfessionalSummary = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Muhammad_Yasir_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="about"
      className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated Background */}
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

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">About Me</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Full-Stack Developer
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Building Scalable Solutions
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating robust, user-centric applications using
            modern technologies. Specializing in full-stack development with a
            focus on clean code and scalable architecture.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: Code2, label: "Projects Completed", value: "15+" },
            { icon: Briefcase, label: "Years Experience", value: "2+" },
            { icon: Terminal, label: "Technologies", value: "20+" },
            { icon: Award, label: "Certifications", value: "5+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6 text-center"
            >
              <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Professional Background */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">Experience</h3>
              </div>

              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-cyan-500/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-cyan-500"></div>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    Independent Projects & Self-Learning
                  </h4>
                  <p className="text-cyan-400 text-sm mb-2">
                    Dec 2024 - Present
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Building full-stack applications to master modern web
                    technologies. Creating production-ready projects with React,
                    Node.js, and Python. Focused on implementing best practices
                    in code architecture and deployment.
                  </p>
                </div>

                <div className="relative pl-6 border-l-2 border-slate-700">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-slate-600"></div>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    Student Developer
                  </h4>
                  <p className="text-cyan-400 text-sm mb-2">
                    nov 2024 - Present
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Developed multiple academic projects including management
                    systems, e-commerce platforms, and real-time applications
                    using MERN stack and FastAPI. Gained practical experience in
                    software development lifecycle.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    Bachelor's in Computer Science
                  </h4>
                  <p className="text-cyan-400 text-sm mb-2">2023 - 2027</p>
                  <p className="text-slate-300 text-sm">
                    Focused on Software Engineering, Data Structures,
                    Algorithms, Database Systems, and Full-Stack Development.
                    Active participant in coding competitions and tech
                    workshops.
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-800">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Core Competencies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React.js",
                      "Node.js",
                      "Python",
                      "FastAPI",
                      "MongoDB",
                      "PostgreSQL",
                      "REST APIs",
                      "Git",
                      "JavaScript",
                      "HTML/CSS",
                    ].map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Technical Expertise
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Frontend Development",
                icon: Code2,
                skills: [
                  "React.js",
                  "Vite",
                  "Tailwind CSS",
                  "Framer Motion",
                  "JavaScript",
                ],
                color: "cyan",
              },
              {
                title: "Backend Development",
                icon: Terminal,
                skills: [
                  "Node.js",
                  "Python",
                  "FastAPI",
                  "Express.js",
                  "REST APIs",
                ],
                color: "blue",
              },
              {
                title: "Database & Tools",
                icon: Zap,
                skills: ["MongoDB", "PostgreSQL", "Supabase", "Git", "Postman"],
                color: "purple",
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6"
              >
                <category.icon
                  className={`w-8 h-8 text-${category.color}-400 mb-4`}
                />
                <h4 className="text-lg font-bold text-white mb-3">
                  {category.title}
                </h4>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-slate-300"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-${category.color}-400`}
                      ></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What I Offer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 md:p-10 mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-6">
            What I Bring to Your Team
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-slate-300">
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white mb-1">
                  Clean, Maintainable Code
                </h4>
                <p className="text-sm">
                  Following best practices and industry standards for scalable
                  applications
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white mb-1">
                  Full-Stack Proficiency
                </h4>
                <p className="text-sm">
                  End-to-end development from database design to frontend
                  implementation
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white mb-1">
                  Problem-Solving Mindset
                </h4>
                <p className="text-sm">
                  Analytical approach to debugging and optimizing complex
                  systems
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white mb-1">Fast Learner</h4>
                <p className="text-sm">
                  Quick to adapt to new technologies and frameworks as needed
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-slate-300 mb-8">
            Open to{" "}
            <span className="text-cyan-400 font-semibold">
              full-time roles, internships, and freelance projects
            </span>
            <br />
            Ready to contribute and grow with your team
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={downloadCV}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white text-base shadow-lg shadow-cyan-500/20 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </motion.button>

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 border border-slate-700 rounded-xl font-bold text-white text-base hover:border-cyan-500/50 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>Get in Touch</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <div id="home">
        <Hero3D />
      </div>

      {/* Professional Summary (About) Section */}
      <ProfessionalSummary />

      {/* Skills Timeline Section */}
      <SkillsTimelineCTA />

      {/* Projects Showcase Section */}
      <div id="projects">
        <ProjectsShowcase />
      </div>

      {/* Connect With Me Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
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
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Connect With Me
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Let's Build Together
              </span>
            </h2>

            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-12">
              Whether you have a project idea, need consultation, or just want
              to connect, feel free to reach out. I'm always open to new
              opportunities and collaborations.
            </p>

            {/* Social Links Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-16"
            >
              <div className="flex flex-col items-center gap-4 mb-8">
                <span className="text-lg text-slate-400 font-medium">
                  Connect with me on:
                </span>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/yasir-mrwt"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-slate-800 transition-all group relative"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6" />
                    <span className="absolute -top-10 px-3 py-1.5 bg-slate-900 border border-slate-700 text-xs text-slate-300 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      yasir-mrwt
                    </span>
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/muhammad-yasir-50b240315/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-300 hover:border-indigo-500/50 hover:text-indigo-400 hover:bg-slate-800 transition-all group relative"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                    <span className="absolute -top-10 px-3 py-1.5 bg-slate-900 border border-slate-700 text-xs text-slate-300 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Muhammad Yasir
                    </span>
                  </motion.a>

                  <motion.a
                    href="mailto:inquiry.yasir@gmail.com"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-300 hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-slate-800 transition-all group relative"
                    aria-label="Email"
                  >
                    <Mail className="w-6 h-6" />
                    <span className="absolute -top-10 px-3 py-1.5 bg-slate-900 border border-slate-700 text-xs text-slate-300 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      inquiry.yasir@gmail.com
                    </span>
                  </motion.a>
                </div>
              </div>

              {/* OR Divider */}
              <div className="flex items-center justify-center mb-12">
                <div className="flex-1 h-px bg-slate-800"></div>
                <span className="px-4 text-slate-500 text-sm">OR</span>
                <div className="flex-1 h-px bg-slate-800"></div>
              </div>

              {/* Contact Form Section */}
              <div id="contact" className="mt-8">
                <ContactForm />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
