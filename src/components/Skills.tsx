import { Cpu, Zap } from 'lucide-react';
import { Skill } from '../types/portfolio';

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block p-2 sm:p-3 bg-cyan-500/10 rounded-xl mb-4">
            <Cpu className="text-cyan-400" size={24} />
          </div>
          <h2 className="text-4xl xs:text-5xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 leading-tight">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-base sm:text-lg px-4 sm:px-0">Technologies I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter(s => s.category === category);
            return (
              <div
                key={category}
                className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-4 sm:p-6 lg:p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 animate-fade-in"
                style={{ animationDelay: `${catIndex * 100}ms` }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                  <Zap size={20} className="sm:w-6 sm:h-6" />
                  <span className="leading-tight">{category}</span>
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {categorySkills.map((skill, index) => (
                    <li
                      key={skill.id}
                      className="flex items-center gap-2 sm:gap-3 text-slate-300 group animate-slide-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="text-cyan-400 text-base sm:text-lg flex-shrink-0">▹</span>
                      <span className="group-hover:text-white group-hover:translate-x-1 transition-all duration-200 text-sm sm:text-base">
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
