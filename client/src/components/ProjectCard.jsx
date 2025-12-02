import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Sparkles } from "lucide-react";

export default function ProjectCard({
  title,
  description,
  image,
  tech = [],
  gradient = "from-cyan-500 to-blue-600",
  githubUrl,
  liveUrl,
  featured = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-500"
    >
      {/* Featured Badge */}
      {featured && (
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center gap-1.5 shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span className="text-xs font-bold text-white">Featured</span>
        </motion.div>
      )}

      {/* Project Image/Visual */}
      <div className="relative h-64 sm:h-72 overflow-hidden">
        {image ? (
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${gradient} relative`}
          >
            <motion.div
              className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="text-8xl filter drop-shadow-2xl opacity-80"
              >
                💻
              </motion.div>
            </div>
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Quick Actions on Hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-lg flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all"
              aria-label="View on GitHub"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-lg flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all"
              aria-label="View Live Demo"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>

        <p className="text-slate-400 mb-6 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tech Stack */}
        {tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((item, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-sm text-cyan-400 font-medium hover:bg-cyan-500/20 transition-colors"
              >
                {item}
              </motion.span>
            ))}
          </div>
        )}

        {/* View Project Button */}
        <motion.button
          whileHover={{ x: 5 }}
          className="text-cyan-400 font-semibold flex items-center gap-2 group/btn"
        >
          View Details
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </motion.button>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none" />

      {/* Corner Accent */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-full" />
    </motion.div>
  );
}

// Example usage:
/*
<ProjectCard
  title="E-Commerce Platform"
  description="Full-stack marketplace with real-time inventory, payment integration, and comprehensive admin dashboard"
  tech={["React", "Node.js", "MongoDB", "Stripe"]}
  gradient="from-cyan-500 to-blue-600"
  githubUrl="https://github.com/username/project"
  liveUrl="https://project-demo.com"
  featured={true}
/>
*/
