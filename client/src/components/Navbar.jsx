import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  // Get current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50 shadow-2xl shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3"
              >
                <div className="relative">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Code2 className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hidden sm:block">
                  Muhammad Yasir
                </span>
              </motion.div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="relative px-4 py-2 group"
                >
                  <span
                    className={`relative z-10 font-medium transition-colors duration-300 ${
                      activeSection === link.id
                        ? "text-white"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </span>

                  {/* Background - shows only for active */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg transition-opacity duration-300 ${
                      activeSection === link.id ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Glow - shows only for active */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur-md transition-opacity duration-300 ${
                      activeSection === link.id ? "opacity-50" : "opacity-0"
                    }`}
                  />

                  {/* Sparkle - shows only for active */}
                  {activeSection === link.id && (
                    <div className="absolute -top-1 -right-1 z-20">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white transition-colors relative z-[100]"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - OUTSIDE navbar, separate portal-like element */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop - COMPLETELY SOLID */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-slate-950 md:hidden"
              style={{ zIndex: 99 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel - COMPLETELY SOLID */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-slate-900 border-l border-slate-700 md:hidden shadow-2xl"
              style={{ zIndex: 99 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col h-full pt-24 pb-8 px-6">
                <div className="space-y-2 flex-1">
                  {navLinks.map((link, idx) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="w-full text-left"
                    >
                      <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`relative px-4 py-3 rounded-xl font-medium transition-all ${
                          activeSection === link.id
                            ? "text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25"
                            : "text-white hover:bg-slate-800"
                        }`}
                      >
                        {link.label}
                        {activeSection === link.id && (
                          <motion.div
                            className="absolute -right-1 top-1/2 -translate-y-1/2"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                          >
                            <Sparkles className="w-4 h-4 text-cyan-400" />
                          </motion.div>
                        )}
                      </motion.div>
                    </button>
                  ))}
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6 border-t border-slate-800 mt-auto"
                >
                  <p className="text-sm text-slate-500 text-center">
                    © {currentYear} Muhammad Yasir
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
