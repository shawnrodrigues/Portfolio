import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Certification } from '../types/portfolio';
import { useTheme } from '../contexts/ThemeContext';

interface CertificationsProps {
  certifications: Certification[];
}

export default function Certifications({ certifications }: CertificationsProps) {
  const { currentTheme } = useTheme();
  
  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  return (
    <section id="certifications" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block p-2 sm:p-3 bg-cyan-500/10 rounded-xl mb-4">
            <Award className="text-cyan-400" size={24} />
          </div>
          <h2 className="text-4xl xs:text-5xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 leading-tight">
            Certifications
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Professional credentials and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.setProperty('--title-color', currentTheme.colors.primary);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.setProperty('--title-color', 'white');
              }}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-cyan-500/10 rounded-xl flex-shrink-0">
                  <Award className="text-cyan-400" size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 
                    className="text-lg sm:text-xl font-bold text-white mb-2 transition-colors break-words"
                    style={{ color: 'var(--title-color, white)' }}
                  >
                    {cert.title}
                  </h3>
                  <p className="text-cyan-400 font-semibold mb-3 text-sm sm:text-base">{cert.issuer}</p>

                  <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm mb-3">
                    <Calendar size={12} />
                    <span>Issued: {formatDate(cert.issueDate)}</span>
                  </div>

                  {cert.credentialId && (
                    <div className="text-slate-400 text-xs sm:text-sm mb-3 break-all">
                      <span className="text-slate-500">ID:</span> {cert.credentialId}
                    </div>
                  )}

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm transition-colors break-words"
                    >
                      <ExternalLink size={12} />
                      <span>Verify Credential</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
