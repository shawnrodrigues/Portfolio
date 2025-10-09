import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Education as EducationType } from '../types/portfolio';

interface EducationProps {
  education: EducationType[];
}

export default function Education({ education }: EducationProps) {
  const formatDate = (date: string | null) => {
    if (!date) return 'Present';
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <section id="education" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-cyan-500/10 rounded-xl mb-4">
            <GraduationCap className="text-cyan-400" size={32} />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <p className="text-slate-400 text-lg">Academic foundation</p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-cyan-500 to-blue-600 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-cyan-400 text-xl font-semibold mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-slate-400">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</span>
                    </div>
                  </div>
                </div>
                {edu.gpa && (
                  <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                    <span className="text-cyan-400 text-sm font-medium">GPA: {edu.gpa}</span>
                  </div>
                )}
              </div>

              {edu.description && (
                <p className="text-slate-300 leading-relaxed">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
