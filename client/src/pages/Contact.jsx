import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import { submitContactForm } from "../utils/api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setStatus({ type: "error", message: "Please fill in all fields" });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      await submitContactForm(formData);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setStatus({
        type: "success",
        message: "Message sent! I'll get back to you soon.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Failed to send message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "hello@example.com",
      link: "mailto:hello@example.com",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/yourname",
      link: "https://linkedin.com",
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "github.com/yourname",
      link: "https://github.com",
    },
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
                Let's Connect
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-lg text-slate-400">
              Have a project in mind? Let's discuss how we can work together.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <ScrollReveal direction="left">
            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Status Message */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl ${
                      status.type === "success"
                        ? "bg-green-500/10 border border-green-500/20 text-green-400"
                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-indigo-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          </ScrollReveal>

          {/* Contact Info & Additional */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              {/* Contact Methods */}
              <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Contact Info
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((item, idx) => (
                    <motion.a
                      key={idx}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 8 }}
                      className="flex items-center gap-4 p-4 bg-slate-950 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-all"
                    >
                      <div className="text-4xl">{item.icon}</div>
                      <div>
                        <div className="font-semibold text-white">
                          {item.label}
                        </div>
                        <div className="text-sm text-slate-400">
                          {item.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Why Work With Me */}
              <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-3xl p-8 border border-indigo-500/20">
                <h3 className="text-xl font-bold text-white mb-4">
                  Why Work With Me?
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-400 mt-1">✓</span>
                    <span>Clean, scalable code with best practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-400 mt-1">✓</span>
                    <span>Fully responsive and optimized designs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-400 mt-1">✓</span>
                    <span>Modern tech stack and workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-400 mt-1">✓</span>
                    <span>Clear communication and timely delivery</span>
                  </li>
                </ul>
              </div>

              {/* Availability Status */}
              <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-4">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm text-green-400 font-medium">
                    Available for work
                  </span>
                </div>
                <p className="text-slate-400 text-sm">
                  Currently accepting new projects. Let's create something
                  amazing together!
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
