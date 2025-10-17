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

  const getDateRange = (exp: ExperienceType) => {
    if (exp.fixedDate) {
      return exp.fixedDate;
    }
    return `${formatDate(exp.startDate || null)} - ${formatDate(exp.endDate || null)}`;
  };

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute top-0 left-1/3 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block p-2 sm:p-3 bg-cyan-500/10 rounded-xl mb-4">
            <Briefcase className="text-cyan-400" size={24} />
          </div>
          <h2 className="text-4xl xs:text-5xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 leading-tight">
            Experience
          </h2>
          <p className="text-slate-400 text-base sm:text-lg px-4 sm:px-0">My professional journey</p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-4 sm:p-6 lg:p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-1 sm:w-2 h-full bg-gradient-to-b from-cyan-500 to-blue-600 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex flex-col gap-4 mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">{exp.position}</h3>
                    <p className="text-cyan-400 text-lg sm:text-xl font-semibold mb-3">{exp.company}</p>
                    <div className="flex flex-col xs:flex-row xs:flex-wrap gap-2 xs:gap-4 text-slate-400 text-sm sm:text-base">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="break-words">{getDateRange(exp)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.isCurrent && (
                      <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                        <span className="text-cyan-400 text-xs sm:text-sm font-medium">Current</span>
                      </div>
                    )}
                    {exp.badges && exp.badges.map((badge, index) => (
                      <div key={index} className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-500/10 border border-purple-500/30 rounded-full">
                        <span className="text-purple-400 text-xs sm:text-sm font-medium">{badge}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-slate-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{exp.description}</p>

              <div className="space-y-2 sm:space-y-3">
                <p className="text-cyan-400 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Key Achievements:</p>
                <ul className="space-y-2 sm:space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base">
                      <div className="mt-2 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex-shrink-0 shadow-lg shadow-cyan-400/50 animate-pulse"></div>
                      <span className="leading-relaxed">{achievement}</span>
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
