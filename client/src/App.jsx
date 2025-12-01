/**
 * Root Application Component
 *
 * Sets up:
 * - React Router for navigation
 * - Global layout (Navbar + Footer)
 * - Page routing
 * - Scroll restoration between pages
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        {/* Navigation stays visible on all pages */}
        <Navbar />

        {/* Main content area - pages swap here based on route */}
        <main className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer stays visible on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
