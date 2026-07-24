import React from 'react';

// --- Data ---
const skills = [
  "HTML", "CSS", "MongoDB", "Python", "Numpy", "Pandas", "SQL", "Flask"
];

const projects = [
  {
    title: "Workout Management System",
    description: "A GUI based application designed to track fitness routines, manage workouts, and monitor progress.",
    tech: ["Python"],
    link: "https://github.com/jobanveer2005/GymApp.git"
  },
  {
    title: "To-Do List",
    description: "To keep a record on the daily basis of the tasks to complete.",
    tech: ["Flask"],
    link: "https://github.com/jobanveer2005/To-do-List-.git"
  }
];

// --- Components ---

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
    <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <a href="#home" className="text-2xl font-bold text-white tracking-tight hover:text-amber-400 transition-colors">
        JS.
      </a>
      <ul className="flex space-x-6 text-zinc-400 font-medium">
        <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
        <li><a href="#skills" className="hover:text-amber-400 transition-colors">Skills</a></li>
        <li><a href="#projects" className="hover:text-amber-400 transition-colors">Projects</a></li>
        <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
      </ul>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="min-h-[90vh] flex items-center pt-16">
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* Left Side: Text */}
      <div className="order-2 md:order-1 text-center md:text-left space-y-6 z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Hi, I'm <span className="text-amber-400">Jobanveer Singh</span>
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed max-w-lg mx-auto md:mx-0">
          I'm a 3rd year Computer Engineering student who is still learning and trying to implement those theoretical knowledge to practical knowledge. Trying to keep myself up to date.
        </p>
        <div className="pt-4">
          <a href="#projects" className="inline-block bg-amber-400 text-zinc-950 px-8 py-3 rounded-full font-bold shadow-[0_0_15px_rgba(251,191,36,0.2)] hover:shadow-[0_0_25px_rgba(251,191,36,0.4)] hover:-translate-y-1 transition-all duration-300">
            View My Work
          </a>
        </div>
      </div>
      
      {/* 3D Avatar Placeholder */}
      <div className="order-1 md:order-2 flex justify-center md:justify-end items-end h-full">
        <img 
          src="/Jobanveer's Avatar.png" 
          alt="Jobanveer Singh" 
          className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain drop-shadow-[0_20px_50px_rgba(251,191,36,0.15)] transform transition-all duration-500 hover:scale-105 hover:-translate-y-4 hover:drop-shadow-[0_20px_50px_rgba(251,191,36,0.4)] cursor-pointer"
        />
      </div>

    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-24 bg-zinc-900/50 pt-28">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">My Skills</h2>
        <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="bg-zinc-900 p-6 rounded-2xl flex items-center justify-center border border-zinc-800 hover:border-amber-400/50 hover:shadow-[0_0_20px_rgba(251,191,36,0.1)] hover:-translate-y-2 transition-all duration-300 group"
          >
            <span className="text-lg font-semibold text-zinc-300 group-hover:text-amber-400 transition-colors">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-24 pt-28">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
        <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-zinc-900 p-8 rounded-3xl flex flex-col h-full border border-zinc-800 hover:border-amber-400/50 hover:shadow-[0_10px_30px_rgba(251,191,36,0.1)] hover:-translate-y-3 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
            <p className="text-zinc-400 flex-grow mb-6 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-col gap-6 mt-auto">
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-amber-400/10 text-amber-400 border border-amber-400/20 text-sm font-semibold rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Dynamic Project Link Button */}
              {project.link && (
                <a 
                  href={project.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-amber-400 transition-colors w-max group"
                >
                  View Project
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-zinc-950 text-zinc-400 py-16 text-center border-t border-zinc-900">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-white mb-8">Let's Connect</h2>
      
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
        
        {/* LinkedIn Link */}
        <a 
          href="https://www.linkedin.com/in/jobanveer-aujla/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-3 hover:text-amber-400 transition-colors group"
        >
          <svg className="w-7 h-7 transform group-hover:-translate-y-1 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          <span className="font-semibold text-lg">LinkedIn</span>
        </a>

        {/* GitHub Link */}
        <a 
          href="https://github.com/jobanveer2005" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-3 hover:text-amber-400 transition-colors group"
        >
          <svg className="w-7 h-7 transform group-hover:-translate-y-1 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          <span className="font-semibold text-lg">GitHub</span>
        </a>

        {/* EMAIL Link */}
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=jobanveersinghaujla@gmail.com" 
          target="_blank"
          rel="noopener noreferrer"
          title="EMAIL ID"
          className="flex items-center gap-3 text-zinc-400 hover:text-amber-400 transition-colors group w-48"
        >
          <svg className="w-7 h-7 transform group-hover:-translate-y-1 transition-transform flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12.713l11.985-8.713h-23.97l11.985 8.713zm0 2.574l-12-8.725v11.438h24v-11.438l-12 8.725z"/>
          </svg>
          
          <div className="relative flex-grow h-7 flex items-center">
            {/* This shows by default, hides on hover */}
            <span className="font-semibold text-lg absolute left-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
              Email
            </span>
            
            {/* This hides by default, shows on hover */}
            <span className="font-semibold text-lg absolute left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 whitespace-nowrap">
              jobanveersinghaujla@gmail.com
            </span>
          </div>
        </a>

      </div>

      <p className="text-sm border-t border-zinc-800 pt-8">
        © {new Date().getFullYear()} Jobanveer Singh. Built with React & Tailwind CSS.
      </p>
    </div>
  </footer>
);

// --- Main App ---
export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-amber-400/30 selection:text-amber-200">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}