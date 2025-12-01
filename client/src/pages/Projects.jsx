/**
 * Projects Page Component
 *
 * Fetches projects from Flask API and displays them.
 *
 * Data flow:
 * 1. Component mounts
 * 2. useEffect calls fetchProjects()
 * 3. fetchProjects() calls Flask /api/v1/projects
 * 4. Flask returns JSON with project data
 * 5. State updates with projects
 * 6. UI re-renders with project cards
 */

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollReveal, {
  ScrollRevealStagger,
  ScrollRevealItem,
} from "../components/ScrollReveal";
import { getProjects } from "../utils/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");

  // Fetch projects when component mounts
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const data = await getProjects();
      setProjects(data);
      setError(null);
    } catch (err) {
      setError("Failed to load projects. Please try again later.");
      console.error("Error fetching projects:", err);
    } finally {
      setLoading(false);
    }
  };

  // Get unique tech stack items for filtering
  const allTech = [...new Set(projects.flatMap((p) => p.tech_stack))];

  // Filter projects based on selected tech
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.tech_stack.includes(filter));

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 mb-4">{error}</p>
          <button
            onClick={fetchProjects}
            className="px-6 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <h1 className="text-5xl font-bold text-center mb-4">
            My <span className="text-indigo-400">Projects</span>
          </h1>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A collection of web applications showcasing modern development
            practices and innovative solutions
          </p>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                filter === "all"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              All Projects
            </motion.button>
            {allTech.map((tech) => (
              <motion.button
                key={tech}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(tech)}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  filter === tech
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {tech}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <ScrollRevealStagger staggerDelay={0.1}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ScrollRevealItem key={project.id}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500 transition-colors"
                >
                  {/* Project Image */}
                  <div className="w-full h-48 bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center">
                    <span className="text-6xl">💼</span>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech_stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-indigo-600/30 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-gray-700 rounded-lg text-center hover:bg-gray-600 transition"
                      >
                        GitHub
                      </a>
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-indigo-600 rounded-lg text-center hover:bg-indigo-700 transition"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              </ScrollRevealItem>
            ))}
          </div>
        </ScrollRevealStagger>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No projects found for this filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
