import { Cpu, Zap } from 'lucide-react';
import { Skill } from '../types/portfolio';

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-cyan-500/10 rounded-xl mb-4">
            <Cpu className="text-cyan-400" size={32} />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-lg">Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter(s => s.category === category);
            return (
              <div
                key={category}
                className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
                style={{ animationDelay: `${catIndex * 100}ms` }}
              >
                <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
                  <Zap size={24} />
                  {category}
                </h3>
                <ul className="space-y-3">
                  {categorySkills.map((skill, index) => (
                    <li
                      key={skill.id}
                      className="flex items-center gap-3 text-slate-300 group"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="text-cyan-400 text-lg">▹</span>
                      <span className="group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
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
