import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const social = [
    { icon: <Github size={20} />, url: "https://github.com", label: "GitHub" },
    { icon: <Linkedin size={20} />, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Mail size={20} />, url: "mailto:hello@example.com", label: "Email" },
  ];

  const links = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const services = [
    "Web Development",
    "UI/UX Design",
    "API Development",
    "3D Animations",
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800/50 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                Y
              </div>
              <div>
                <p className="text-white font-bold text-sm">Yasir</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Building elegant solutions with modern tech, clean code, and attention to detail.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300 font-medium"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide">Skills</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="text-slate-400 text-sm font-medium hover:text-cyan-400 transition-colors duration-300">{s}</li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide">Connect</h3>
            <div className="flex gap-3 mb-6">
              {social.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:border-cyan-500/50 hover:text-cyan-400 hover:from-slate-800 hover:to-slate-700 transition-all duration-300"
                  aria-label={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-slate-500 font-medium">Available for collaboration</p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8" />

        {/* Bottom */}
        <div className="pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-xs text-center sm:text-left font-medium">
              © {currentYear} Yasir. Built with <Heart className="w-4 h-4 inline text-red-500 mx-1 transition-transform group-hover:scale-110" /> using React, Three.js & Tailwind CSS
            </p>
            <div className="flex gap-8 text-xs font-medium">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Privacy</a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Terms</a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">License</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
