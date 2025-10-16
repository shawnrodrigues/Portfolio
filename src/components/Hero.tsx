import { Profile } from '../types/portfolio';

interface HeroProps {
  profile: Profile;
  onNavigate: (section: string) => void;
}

export default function Hero({ profile, onNavigate }: HeroProps) {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 hero-grid-pattern" style={{
          backgroundImage: `
            linear-gradient(to right, #06b6d4 1px, transparent 1px),
            linear-gradient(to bottom, #06b6d4 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 inline-block">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
            {profile.avatarUrl && (
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                className="relative w-32 h-32 rounded-full border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/50 object-cover"
              />
            )}
          </div>
        </div>

        {/* <div className="mb-4 inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
          <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">
            Available for Opportunities
          </span>
        </div> */}

        <h1 className="text-6xl md:text-8xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent hero-title-gradient px-2 py-6 leading-loose">
          {profile.name}
        </h1>

        <h2 className="text-3xl md:text-5xl font-light text-slate-300 mb-8">
          {profile.title}
        </h2>

        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          {profile.bio}
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => onNavigate('projects')}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:-translate-y-1 transition-all duration-300"
          >
            View My Work
          </button>
          <button
            onClick={() => window.location.href = `mailto:${profile.email}`}
            className="px-8 py-4 bg-slate-800/50 border border-cyan-500/30 rounded-lg font-semibold text-cyan-400 hover:bg-slate-800 hover:border-cyan-500 transform hover:-translate-y-1 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}