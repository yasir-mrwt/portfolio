import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: "https://github.com/yasir-mrwt",
      label: "GitHub",
      username: "yasir-mrwt",
      color: "hover:text-cyan-400 hover:border-cyan-400/30",
    },
    {
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/muhammad-yasir-50b240315/",
      label: "LinkedIn",
      username: "Muhammad Yasir",
      color: "hover:text-blue-400 hover:border-blue-400/30",
    },
    {
      icon: <Mail size={20} />,
      url: "mailto:inquiry.yasir@gmail.com",
      label: "Email",
      username: "inquiry.yasir@gmail.com",
      color: "hover:text-emerald-400 hover:border-emerald-400/30",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-slate-800/50">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      </div>

      {/* Subtle gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      {/* Decorative element */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left: Brand & Copyright */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-sm text-slate-400">
              © {currentYear} Muhammad Yasir. All rights reserved.
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Built with React, Tailwind & Framer Motion
            </p>
          </motion.div>

          {/* Middle: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="flex gap-6">
              {["Home", "Projects", "About", "Contact"].map((item, index) => (
                <button
                  key={item}
                  onClick={() => {
                    const sectionId = item.toLowerCase();
                    const element = document.getElementById(sectionId);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-sm text-slate-400 hover:text-white transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right: Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-end gap-4"
          >
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative group w-10 h-10 bg-slate-900/50 border border-slate-800 rounded-lg flex items-center justify-center text-slate-400 transition-all duration-300 ${social.color} backdrop-blur-sm`}
                  aria-label={social.label}
                >
                  {social.icon}
                  <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="bg-slate-900 border border-slate-700 text-xs text-slate-300 px-2 py-1 rounded whitespace-nowrap">
                      {social.username}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors duration-300 flex items-center gap-1 group"
            >
              <span>Back to top</span>
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-slate-500 group-hover:text-slate-300"
              >
                ↑
              </motion.div>
            </motion.button>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent my-6 md:my-8" />

        {/* Bottom: Credits */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs text-slate-500">
            Crafted with passion and attention to detail.
            <span className="mx-2">•</span>
            Always open to new opportunities and collaborations.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
