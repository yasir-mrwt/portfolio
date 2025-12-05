import React, { useState, useEffect } from "react";
import { Code, Server, Database } from "lucide-react";

export default function SkillsTimelineCTA() {
  const [activeSkill, setActiveSkill] = useState(0);
  const [progress, setProgress] = useState(0);

  const skills = [
    {
      icon: Code,
      title: "Frontend Dev",
      description: "Html,Css,Javascript,React",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500",
    },
    {
      icon: Server,
      title: "Backend Dev",
      description: "Node.js, Python, REST APIs",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500",
    },
    {
      icon: Database,
      title: "Database",
      description: "PostgreSQL, MongoDB,Supabase",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveSkill((current) => (current + 1) % skills.length);
          return 0;
        }
        return prev + 2;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [skills.length]);

  // detect small screens for vertical layout
  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    const onResize = () => setIsSmall(window.innerWidth < 640);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2">
            My Skill{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Arsenal
            </span>
          </h2>
          <p className="text-slate-400">
            Expertise across the full development spectrum
          </p>
        </div>

        {/* Progress Line / vertical on mobile */}
        <div className="relative max-w-4xl mx-auto mb-10">
          {!isSmall ? (
            <div className="absolute top-4 left-0 right-0 h-1 bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300"
                style={{
                  width: `${
                    (activeSkill / (skills.length - 1)) * 100 +
                    progress / (skills.length - 1)
                  }%`,
                }}
              />
            </div>
          ) : (
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-slate-700 rounded-full overflow-hidden">
              <div
                className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transition-all duration-300"
                style={{
                  height: `${
                    (activeSkill / (skills.length - 1)) * 100 +
                    progress / (skills.length - 1)
                  }%`,
                }}
              />
            </div>
          )}

          <div
            className={`${
              isSmall
                ? "flex flex-col gap-6 pt-8 pl-12"
                : "grid grid-cols-2 md:grid-cols-3 gap-6 relative pt-8"
            }`}
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              const isActive = index === activeSkill;
              const isPast = index < activeSkill;

              return (
                <button
                  key={index}
                  onClick={() => {
                    setActiveSkill(index);
                    setProgress(0);
                  }}
                  className="flex flex-col items-center justify-start cursor-pointer focus:outline-none"
                >
                  <div
                    className={`relative w-20 h-20 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 transform ${
                      isActive ? "scale-105 shadow-2xl" : "scale-100"
                    } ${isPast ? "opacity-70" : "opacity-100"} ${
                      isActive ? skill.bgColor : "bg-slate-800"
                    } border-2 ${
                      isActive ? skill.borderColor : "border-slate-700"
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 transition-all duration-500 ${
                        isActive
                          ? "text-white"
                          : isPast
                          ? "text-slate-400"
                          : "text-slate-500"
                      }`}
                    />

                    {isActive && (
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-20`}
                      />
                    )}

                    {isPast && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  <h3
                    className={`text-sm font-semibold mb-1 text-center transition-all duration-300 ${
                      isActive ? "text-white" : "text-slate-400"
                    }`}
                  >
                    {skill.title}
                  </h3>
                  <p
                    className={`text-xs text-center transition-all duration-300 ${
                      isActive ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {skill.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
