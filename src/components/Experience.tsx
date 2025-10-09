import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Experience as ExperienceType } from '../types/portfolio';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export default function Experience({ experiences }: ExperienceProps) {
  const formatDate = (date: string | null) => {
    if (!date) return 'Present';
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <section id="experience" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-cyan-500/10 rounded-xl mb-4">
            <Briefcase className="text-cyan-400" size={32} />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <p className="text-slate-400 text-lg">My professional journey</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-cyan-500 to-blue-600 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                  <p className="text-cyan-400 text-xl font-semibold mb-2">{exp.company}</p>
                  <div className="flex flex-wrap gap-4 text-slate-400">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</span>
                    </div>
                  </div>
                </div>
                {!exp.endDate && (
                  <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                    <span className="text-cyan-400 text-sm font-medium">Current</span>
                  </div>
                )}
              </div>

              <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>

              <div className="space-y-2">
                <p className="text-cyan-400 font-semibold mb-2">Key Achievements:</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
