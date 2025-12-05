import React, { useState } from "react";
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Zap,
  Lock,
  Users,
  BarChart3,
  Mail,
  Shield,
} from "lucide-react";

const ProjectsShowcase = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "UniBro",
      tagline: "Academic Resource Platform",
      description:
        "A comprehensive MERN stack platform revolutionizing academic collaboration with real-time features, secure authentication, and intelligent resource management.",
      longDescription:
        "Built a production-ready platform serving students with JWT authentication, Google OAuth integration, automated email verification, role-based access control, and an admin approval system with automated notifications.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      gradient: "from-cyan-500 to-blue-600",
      tech: [
        { name: "React + Vite", icon: <Zap className="w-4 h-4" /> },
        { name: "Node.js", icon: <Zap className="w-4 h-4" /> },
        { name: "MongoDB Atlas", icon: <Zap className="w-4 h-4" /> },
        { name: "Supabase", icon: <Zap className="w-4 h-4" /> },
      ],
      highlights: [
        {
          icon: <Lock className="w-5 h-5" />,
          text: "JWT & OAuth Authentication",
        },
        { icon: <Users className="w-5 h-5" />, text: "Real-time Group Chats" },
        {
          icon: <Shield className="w-5 h-5" />,
          text: "Role-Based Access Control",
        },
        { icon: <Mail className="w-5 h-5" />, text: "Automated Email System" },
      ],
      stats: [
        { label: "Deployment", value: "Vercel + Railway" },
        { label: "Stack", value: "MERN" },
      ],
    },
    {
      title: "Job Tracker Pro",
      tagline: "Application Management System",
      description:
        "Intelligent job application tracking system powered by FastAPI, delivering real-time analytics and comprehensive application lifecycle management.",
      longDescription:
        "Designed and implemented a full-stack tracking system with Python FastAPI backend, JWT authentication, RESTful APIs, and a modern React interface featuring status management, notes, deadlines, and analytics.",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
      gradient: "from-emerald-500 to-teal-600",
      tech: [
        { name: "FastAPI", icon: <Zap className="w-4 h-4" /> },
        { name: "React", icon: <Zap className="w-4 h-4" /> },
        { name: "MongoDB", icon: <Zap className="w-4 h-4" /> },
        { name: "Tailwind CSS", icon: <Zap className="w-4 h-4" /> },
      ],
      highlights: [
        {
          icon: <BarChart3 className="w-5 h-5" />,
          text: "Analytics Dashboard",
        },
        { icon: <Lock className="w-5 h-5" />, text: "JWT Authentication" },
        { icon: <Zap className="w-5 h-5" />, text: "REST API Architecture" },
        { icon: <Users className="w-5 h-5" />, text: "Resume Management" },
      ],
      stats: [
        { label: "Backend", value: "Python FastAPI" },
        { label: "Database", value: "MongoDB" },
      ],
    },
    {
      title: "E-Commerce Hub",
      tagline: "Full-Stack Shopping Platform",
      description:
        "Modern e-commerce solution with seamless user experience, robust cart management, and secure payment processing infrastructure.",
      longDescription:
        "Developed a complete e-commerce ecosystem using Node.js and Express, featuring comprehensive user authentication, dynamic product catalogs, intelligent cart management, and streamlined order processing.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      gradient: "from-orange-500 to-pink-600",
      tech: [
        { name: "Node.js", icon: <Zap className="w-4 h-4" /> },
        { name: "Express", icon: <Zap className="w-4 h-4" /> },
        { name: "MongoDB", icon: <Zap className="w-4 h-4" /> },
        { name: "Bootstrap", icon: <Zap className="w-4 h-4" /> },
      ],
      highlights: [
        { icon: <Shield className="w-5 h-5" />, text: "Secure Authentication" },
        { icon: <BarChart3 className="w-5 h-5" />, text: "Product Management" },
        { icon: <Users className="w-5 h-5" />, text: "Cart System" },
        { icon: <Zap className="w-5 h-5" />, text: "Order Processing" },
      ],
      stats: [
        { label: "Stack", value: "Node.js + MongoDB" },
        { label: "Features", value: "Full E-Commerce" },
      ],
    },
    {
      title: "PetCare System",
      tagline: "Pet Management Platform",
      description:
        "Comprehensive pet care management system with advanced role-based authorization and structured database architecture.",
      longDescription:
        "Created a full-stack platform using Node.js, Express, and MySQL with sophisticated user authentication, role-based authorization, admin dashboard, and structured database management for pet care services.",
      image:
        "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80",
      gradient: "from-violet-500 to-purple-600",
      tech: [
        { name: "Node.js", icon: <Zap className="w-4 h-4" /> },
        { name: "Express", icon: <Zap className="w-4 h-4" /> },
        { name: "MySQL", icon: <Zap className="w-4 h-4" /> },
        { name: "Bootstrap", icon: <Zap className="w-4 h-4" /> },
      ],
      highlights: [
        {
          icon: <Shield className="w-5 h-5" />,
          text: "Role-Based Authorization",
        },
        { icon: <BarChart3 className="w-5 h-5" />, text: "Admin Dashboard" },
        { icon: <Lock className="w-5 h-5" />, text: "User Authentication" },
        { icon: <Users className="w-5 h-5" />, text: "Pet Profiles" },
      ],
      stats: [
        { label: "Database", value: "MySQL" },
        { label: "Architecture", value: "MVC Pattern" },
      ],
    },
  ];

  const currentProject = projects[activeProject];

  const handleSelectProject = (idx) => {
    setActiveProject(idx);
    // Scroll to the top of the projects section so newly selected project is visible
    const el = document.getElementById("projects");
    if (el) {
      // Use smooth scrolling and align to start of the section
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // If there's a fixed navbar, you may want to offset further; adjust if needed
    }
  };

  return (
    <div
      id="projects"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Featured
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>

        {/* Main Project Display */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Project Image & Info */}
          <div className="space-y-8">
            <div className="relative group">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${currentProject.gradient} blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700`}
              ></div>
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-3">
                    {currentProject.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
                      >
                        <span className="text-xs text-gray-300 font-medium">
                          {stat.label}:{" "}
                        </span>
                        <span className="text-xs text-white font-bold">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack - Bigger & Better */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-gray-400 tracking-wider uppercase">
                Technology Stack
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {currentProject.tech.map((tech, idx) => (
                  <div
                    key={idx}
                    className={`group/tech relative px-6 py-4 bg-gradient-to-br ${currentProject.gradient} rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover/tech:bg-black/20 transition-colors duration-300"></div>
                    <div className="relative flex items-center gap-3">
                      <div className="text-white">{tech.icon}</div>
                      <span className="text-white font-bold text-base">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-4">
                <span className="text-sm text-gray-400">
                  {currentProject.tagline}
                </span>
              </div>
              <h3 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {currentProject.title}
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                {currentProject.description}
              </p>
              <p className="text-base text-gray-500 leading-relaxed">
                {currentProject.longDescription}
              </p>
            </div>

            {/* Key Features - Clean Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentProject.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="group/highlight flex items-center gap-4 p-5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${currentProject.gradient} text-white group-hover/highlight:scale-110 transition-transform duration-300`}
                  >
                    {highlight.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-300 group-hover/highlight:text-white transition-colors duration-300">
                    {highlight.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                className={`flex-1 group/btn flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r ${currentProject.gradient} rounded-2xl font-bold text-white text-lg shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105`}
              >
                <span>View Project</span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </button>
              <button className="p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:scale-110 hover:border-white/20">
                <Github className="w-6 h-6 text-gray-300" />
              </button>
              <button className="p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:scale-110 hover:border-white/20">
                <ExternalLink className="w-6 h-6 text-gray-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Project Navigation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectProject(idx)}
              className={`group relative p-6 rounded-2xl border transition-all duration-500 overflow-hidden ${
                activeProject === idx
                  ? "bg-white/10 border-white/30 scale-105"
                  : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              ></div>
              <div className="relative">
                <h4
                  className={`font-bold text-lg mb-1 transition-colors duration-300 ${
                    activeProject === idx
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                >
                  {project.title}
                </h4>
                <p className="text-sm text-gray-500">{project.tagline}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
