import { Code2, ExternalLink, Github, Sparkles } from 'lucide-react';
import { Project } from '../types/portfolio';
import { useTheme } from '../contexts/ThemeContext';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const { currentTheme } = useTheme();
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute bottom-0 right-1/3 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block p-2 sm:p-3 bg-cyan-500/10 rounded-xl mb-4">
            <Code2 className="text-cyan-400" size={24} />
          </div>
          <h2 className="text-4xl xs:text-5xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 leading-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-base sm:text-lg px-4 sm:px-0">Building the future, one project at a time</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-4 sm:p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.setProperty('--title-color', currentTheme.colors.primary);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.setProperty('--title-color', 'white');
              }}
            >
              {project.featured && (
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full p-1.5 sm:p-2 shadow-lg shadow-cyan-500/50">
                  <Sparkles size={16} className="sm:w-5 sm:h-5 text-white" />
                </div>
              )}

              <div className="mb-4">
                <h3 
                  className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 transition-colors leading-tight"
                  style={{ color: 'var(--title-color, white)' }}
                >
                  {project.title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 sm:px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 sm:gap-4 mt-auto pt-4 border-t border-slate-800">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors p-2 hover:bg-cyan-500/10 rounded-lg min-h-[44px]"
                    aria-label="View source code"
                  >
                    <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                    <span className="text-xs sm:text-sm font-medium">Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors p-2 hover:bg-cyan-500/10 rounded-lg min-h-[44px]"
                    aria-label="View live demo"
                  >
                    <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                    <span className="text-xs sm:text-sm font-medium">Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button - Mobile Friendly */}
        {projects.length > 6 && (
          <div className="text-center mt-8 sm:mt-12">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/50 border border-cyan-500/30 rounded-lg font-semibold text-cyan-400 hover:bg-slate-800 hover:border-cyan-500 transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base min-h-[44px]">
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
