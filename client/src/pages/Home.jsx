import Hero3D from "../components/Hero3D";
import ScrollReveal, {
  ScrollRevealStagger,
  ScrollRevealItem,
} from "../components/ScrollReveal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useRef } from "react";
import {
  Code2,
  Database,
  Palette,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// 3D Animated Icon for Skills
function SkillIcon3D({ icon: Icon, color }) {
  const meshRef = useRef();
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.5;
    meshRef.current.position.y = Math.sin(t * 2) * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef}>
        <mesh ref={meshRef}>
          <Sphere args={[0.8, 32, 32]}>
            <MeshDistortMaterial
              color={color}
              attach="material"
              distort={0.3}
              speed={1.5}
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
        </mesh>
      </group>
    </Float>
  );
}

export default function Home() {
  const skills = [
    {
      name: "Frontend",
      level: 95,
      color: "#06b6d4",
      icon: Code2,
      tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    },
    {
      name: "Backend",
      level: 90,
      color: "#3b82f6",
      icon: Database,
      tech: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    },
    {
      name: "Design",
      level: 85,
      color: "#8b5cf6",
      icon: Palette,
      tech: ["Figma", "UI/UX", "3D Design", "Animation"],
    },
    {
      name: "Performance",
      level: 92,
      color: "#ec4899",
      icon: Zap,
      tech: ["Optimization", "SEO", "WebGL", "Three.js"],
    },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "Full-stack marketplace with real-time inventory, payment integration, and admin dashboard",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      gradient: "from-cyan-500 to-blue-600",
      image: "💼",
    },
    {
      title: "AI Task Manager",
      desc: "Intelligent productivity app with ML-powered prioritization and smart scheduling",
      tech: ["Flask", "TensorFlow", "React", "Redis"],
      gradient: "from-purple-500 to-pink-600",
      image: "🤖",
    },
    {
      title: "3D Portfolio Showcase",
      desc: "Immersive WebGL experience with interactive 3D elements and smooth animations",
      tech: ["Three.js", "React", "GSAP", "WebGL"],
      gradient: "from-blue-500 to-cyan-500",
      image: "🎨",
    },
    {
      title: "Real-Time Analytics",
      desc: "Dashboard with live data visualization, charts, and customizable reporting",
      tech: ["Next.js", "D3.js", "WebSocket", "PostgreSQL"],
      gradient: "from-pink-500 to-purple-600",
      image: "📊",
    },
  ];

  return (
    <div className="bg-slate-950">
      {/* Hero Section */}
      <Hero3D />

      {/* Skills Section */}
      <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e293b_0%,transparent_70%)]" />
          <motion.div
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm mb-4"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-400 font-medium">
                  Technical Expertise
                </span>
              </motion.div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                What I Bring to the Table
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Comprehensive skill set across the full development spectrum
              </p>
            </div>
          </ScrollReveal>

          <ScrollRevealStagger staggerDelay={0.15}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <ScrollRevealItem key={skill.name}>
                    <motion.div
                      whileHover={{ y: -12, scale: 1.02 }}
                      className="group relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-2xl p-6 lg:p-8 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500"
                    >
                      {/* 3D Icon Canvas */}
                      <div className="h-32 mb-6 rounded-xl overflow-hidden bg-slate-950/50">
                        <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
                          <Suspense fallback={null}>
                            <ambientLight intensity={0.5} />
                            <pointLight
                              position={[5, 5, 5]}
                              intensity={1}
                              color={skill.color}
                            />
                            <SkillIcon3D icon={Icon} color={skill.color} />
                          </Suspense>
                        </Canvas>
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: `${skill.color}20` }}
                          >
                            <Icon
                              className="w-5 h-5"
                              style={{ color: skill.color }}
                            />
                          </div>
                          <h3 className="text-xl font-bold text-white">
                            {skill.name}
                          </h3>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {skill.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs rounded-md bg-slate-800/50 text-slate-400 border border-slate-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-400">Proficiency</span>
                            <span
                              className="font-semibold"
                              style={{ color: skill.color }}
                            >
                              {skill.level}%
                            </span>
                          </div>
                          <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1.5,
                                ease: "easeOut",
                                delay: 0.2,
                              }}
                              className="absolute top-0 left-0 h-full rounded-full"
                              style={{
                                background: `linear-gradient(90deg, ${skill.color} 0%, ${skill.color}dd 100%)`,
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Hover Glow */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                        style={{
                          background: `radial-gradient(circle at center, ${skill.color}15 0%, transparent 70%)`,
                        }}
                      />
                    </motion.div>
                  </ScrollRevealItem>
                );
              })}
            </div>
          </ScrollRevealStagger>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-4"
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-400 font-medium">
                  Featured Work
                </span>
              </motion.div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Selected Projects
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Real-world applications showcasing innovation and technical
                excellence
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {projects.map((project, idx) => (
              <ScrollReveal
                key={idx}
                direction={idx % 2 === 0 ? "left" : "right"}
                delay={0.1}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-500"
                >
                  {/* Project Image */}
                  <div
                    className={`relative h-64 bg-gradient-to-br ${project.gradient} overflow-hidden`}
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
                        className="text-8xl filter drop-shadow-2xl"
                      >
                        {project.image}
                      </motion.div>
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {project.desc}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-sm text-cyan-400 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-cyan-400 font-semibold flex items-center gap-2 group/btn"
                    >
                      View Project
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="text-center mt-12">
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-slate-800/50 border border-slate-700 rounded-xl font-semibold text-white hover:bg-slate-800 hover:border-cyan-500/50 transition-all inline-flex items-center gap-2"
                >
                  Explore All Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
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
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto text-center">
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

              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Whether you have a groundbreaking idea or need expert
                development support, let's create something amazing together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-lg shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all inline-flex items-center gap-3"
                  >
                    Start a Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>

                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-slate-800/50 border border-slate-700 rounded-xl font-bold text-lg hover:bg-slate-800 hover:border-cyan-500/50 transition-all"
                >
                  View Portfolio
                </motion.a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
