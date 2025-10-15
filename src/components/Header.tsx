import { Github, Linkedin, Mail, Menu, X, Palette, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Profile } from '../types/portfolio';
import DiscordIcon from './DiscordIcon';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  profile: Profile;
  onNavigate: (section: string) => void;
}

export default function Header({ profile, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const { currentTheme, availableThemes, setTheme } = useTheme();

  const handleThemeChange = (themeId: string) => {
    const theme = availableThemes.find(t => t.id === themeId);
    if (theme) {
      setTheme(themeId);
      
      // Replace all blue colors with theme colors
      const style = document.createElement('style');
      style.id = 'theme-override';
      
      // Remove existing theme style if it exists
      const existing = document.getElementById('theme-override');
      if (existing) existing.remove();
      
      style.innerHTML = `
        /* Text colors */
        .text-cyan-400 { color: ${theme.colors.primary} !important; }
        .hover\\:text-cyan-400:hover { color: ${theme.colors.primary} !important; }
        .text-cyan-300 { color: ${theme.colors.primary} !important; }
        .text-cyan-500 { color: ${theme.colors.secondary} !important; }
        .text-blue-400 { color: ${theme.colors.primary} !important; }
        .text-blue-500 { color: ${theme.colors.accent} !important; }
        .text-blue-600 { color: ${theme.colors.secondary} !important; }
        
        /* Background colors */
        .bg-cyan-400 { background-color: ${theme.colors.primary} !important; }
        .bg-cyan-500 { background-color: ${theme.colors.secondary} !important; }
        .bg-cyan-600 { background-color: ${theme.colors.secondary} !important; }
        .bg-blue-400 { background-color: ${theme.colors.primary} !important; }
        .bg-blue-500 { background-color: ${theme.colors.accent} !important; }
        .bg-blue-600 { background-color: ${theme.colors.secondary} !important; }
        .hover\\:bg-cyan-500\\/10:hover { background-color: ${theme.colors.secondary}1A !important; }
        .hover\\:bg-blue-500\\/10:hover { background-color: ${theme.colors.accent}1A !important; }
        .bg-cyan-500\\/5 { background-color: ${theme.colors.secondary}0D !important; }
        .bg-cyan-500\\/10 { background-color: ${theme.colors.secondary}1A !important; }
        .bg-cyan-500\\/20 { background-color: ${theme.colors.secondary}33 !important; }
        .bg-cyan-500\\/30 { background-color: ${theme.colors.secondary}4D !important; }
        .bg-blue-500\\/5 { background-color: ${theme.colors.accent}0D !important; }
        .bg-blue-500\\/10 { background-color: ${theme.colors.accent}1A !important; }
        .bg-blue-500\\/20 { background-color: ${theme.colors.accent}33 !important; }
        .bg-blue-500\\/30 { background-color: ${theme.colors.accent}4D !important; }
        
        /* COMPREHENSIVE HOVER EFFECTS FOR ALL SECTIONS */
        .hover\\:bg-cyan-400:hover { background-color: ${theme.colors.primary} !important; }
        .hover\\:bg-cyan-500:hover { background-color: ${theme.colors.secondary} !important; }
        .hover\\:bg-cyan-600:hover { background-color: ${theme.colors.secondary} !important; }
        .hover\\:bg-blue-400:hover { background-color: ${theme.colors.primary} !important; }
        .hover\\:bg-blue-500:hover { background-color: ${theme.colors.accent} !important; }
        .hover\\:bg-blue-600:hover { background-color: ${theme.colors.secondary} !important; }
        
        /* Hover Text Colors */
        .hover\\:text-cyan-300:hover { color: ${theme.colors.primary} !important; }
        .hover\\:text-cyan-500:hover { color: ${theme.colors.secondary} !important; }
        .hover\\:text-cyan-600:hover { color: ${theme.colors.secondary} !important; }
        .hover\\:text-blue-400:hover { color: ${theme.colors.primary} !important; }
        .hover\\:text-blue-500:hover { color: ${theme.colors.accent} !important; }
        .hover\\:text-blue-600:hover { color: ${theme.colors.secondary} !important; }
        
        /* Hover Border Colors */
        .hover\\:border-cyan-400:hover { border-color: ${theme.colors.primary} !important; }
        .hover\\:border-cyan-500:hover { border-color: ${theme.colors.secondary} !important; }
        .hover\\:border-cyan-600:hover { border-color: ${theme.colors.secondary} !important; }
        .hover\\:border-blue-400:hover { border-color: ${theme.colors.primary} !important; }
        .hover\\:border-blue-500:hover { border-color: ${theme.colors.accent} !important; }
        .hover\\:border-blue-600:hover { border-color: ${theme.colors.secondary} !important; }
        .hover\\:border-cyan-500\\/20:hover { border-color: ${theme.colors.secondary}33 !important; }
        .hover\\:border-cyan-500\\/30:hover { border-color: ${theme.colors.secondary}4D !important; }
        .hover\\:border-cyan-500\\/50:hover { border-color: ${theme.colors.secondary}80 !important; }
        .hover\\:border-blue-500\\/20:hover { border-color: ${theme.colors.accent}33 !important; }
        .hover\\:border-blue-500\\/30:hover { border-color: ${theme.colors.accent}4D !important; }
        .hover\\:border-blue-500\\/50:hover { border-color: ${theme.colors.accent}80 !important; }
        
        /* CERTIFICATION AND SECTION SPECIFIC HOVER EFFECTS */
        .certification-card:hover, .cert-card:hover, .certificate:hover {
          border-color: ${theme.colors.primary} !important;
          box-shadow: 0 10px 25px -3px ${theme.colors.primary}25, 0 4px 6px -2px ${theme.colors.primary}15 !important;
        }
        
        .certification-card:hover .text-cyan-400, 
        .cert-card:hover .text-cyan-400,
        .certificate:hover .text-cyan-400 {
          color: ${theme.colors.primary} !important;
        }
        
        .certification-card:hover .hover\\:text-cyan-400, 
        .cert-card:hover .hover\\:text-cyan-400,
        .certificate:hover .hover\\:text-cyan-400 {
          color: ${theme.colors.primary} !important;
        }
        
        /* Section-specific hover overrides */
        #certifications *:hover .text-cyan-400,
        #certifications .hover\\:text-cyan-400:hover,
        .certifications-section *:hover .text-cyan-400,
        .certifications-section .hover\\:text-cyan-400:hover {
          color: ${theme.colors.primary} !important;
        }
        
        #certifications *:hover .border-cyan-500,
        #certifications .hover\\:border-cyan-500:hover,
        .certifications-section *:hover .border-cyan-500,
        .certifications-section .hover\\:border-cyan-500:hover {
          border-color: ${theme.colors.secondary} !important;
        }
        
        /* Generic card hover effects for all sections */
        .card:hover, .project-card:hover, .experience-card:hover, .skill-card:hover, .education-card:hover {
          box-shadow: 0 20px 40px -12px ${theme.colors.primary}30 !important;
          transform: translateY(-2px) !important;
          border-color: ${theme.colors.primary}40 !important;
        }
        
        /* All hover effects for any cyan/blue elements */
        *:hover .text-cyan-400, *:hover .hover\\:text-cyan-400 { color: ${theme.colors.primary} !important; }
        *:hover .text-blue-500, *:hover .hover\\:text-blue-500 { color: ${theme.colors.accent} !important; }
        *:hover .bg-cyan-500, *:hover .hover\\:bg-cyan-500 { background-color: ${theme.colors.secondary} !important; }
        *:hover .bg-blue-500, *:hover .hover\\:bg-blue-500 { background-color: ${theme.colors.accent} !important; }
        *:hover .border-cyan-500, *:hover .hover\\:border-cyan-500 { border-color: ${theme.colors.secondary} !important; }
        *:hover .border-blue-500, *:hover .hover\\:border-blue-500 { border-color: ${theme.colors.accent} !important; }
        
        /* Gradients */
        .from-cyan-400 { --tw-gradient-from: ${theme.colors.primary} !important; }
        .from-cyan-500 { --tw-gradient-from: ${theme.colors.secondary} !important; }
        .from-cyan-600 { --tw-gradient-from: ${theme.colors.secondary} !important; }
        .from-blue-400 { --tw-gradient-from: ${theme.colors.primary} !important; }
        .from-blue-500 { --tw-gradient-from: ${theme.colors.accent} !important; }
        .from-blue-600 { --tw-gradient-from: ${theme.colors.secondary} !important; }
        .to-cyan-400 { --tw-gradient-to: ${theme.colors.primary} !important; }
        .to-cyan-500 { --tw-gradient-to: ${theme.colors.secondary} !important; }
        .to-cyan-600 { --tw-gradient-to: ${theme.colors.secondary} !important; }
        .to-blue-400 { --tw-gradient-to: ${theme.colors.primary} !important; }
        .to-blue-500 { --tw-gradient-to: ${theme.colors.accent} !important; }
        .to-blue-600 { --tw-gradient-to: ${theme.colors.secondary} !important; }
        .via-cyan-400 { --tw-gradient-via: ${theme.colors.primary} !important; }
        .via-cyan-500 { --tw-gradient-via: ${theme.colors.secondary} !important; }
        .via-blue-400 { --tw-gradient-via: ${theme.colors.primary} !important; }
        .via-blue-500 { --tw-gradient-via: ${theme.colors.accent} !important; }
        
        /* Borders */
        .border-cyan-400 { border-color: ${theme.colors.primary} !important; }
        .border-cyan-500 { border-color: ${theme.colors.secondary} !important; }
        .border-cyan-600 { border-color: ${theme.colors.secondary} !important; }
        .border-blue-400 { border-color: ${theme.colors.primary} !important; }
        .border-blue-500 { border-color: ${theme.colors.accent} !important; }
        .border-blue-600 { border-color: ${theme.colors.secondary} !important; }
        .border-cyan-400\\/20 { border-color: ${theme.colors.primary}33 !important; }
        .border-cyan-500\\/20 { border-color: ${theme.colors.secondary}33 !important; }
        .border-cyan-500\\/30 { border-color: ${theme.colors.secondary}4D !important; }
        .border-cyan-500\\/50 { border-color: ${theme.colors.secondary}80 !important; }
        .border-blue-400\\/20 { border-color: ${theme.colors.primary}33 !important; }
        .border-blue-500\\/20 { border-color: ${theme.colors.accent}33 !important; }
        .border-blue-500\\/30 { border-color: ${theme.colors.accent}4D !important; }
        
        /* All Shadow Variations */
        .shadow-sm { box-shadow: 0 1px 2px 0 ${theme.colors.primary}15 !important; }
        .shadow { box-shadow: 0 1px 3px 0 ${theme.colors.primary}20, 0 1px 2px 0 ${theme.colors.primary}12 !important; }
        .shadow-md { box-shadow: 0 4px 6px -1px ${theme.colors.primary}20, 0 2px 4px -1px ${theme.colors.primary}12 !important; }
        .shadow-lg { box-shadow: 0 10px 15px -3px ${theme.colors.primary}25, 0 4px 6px -2px ${theme.colors.primary}15 !important; }
        .shadow-xl { box-shadow: 0 20px 25px -5px ${theme.colors.primary}25, 0 10px 10px -5px ${theme.colors.primary}15 !important; }
        .shadow-2xl { box-shadow: 0 25px 50px -12px ${theme.colors.primary}30 !important; }
        .shadow-inner { box-shadow: inset 0 2px 4px 0 ${theme.colors.primary}20 !important; }
        .shadow-none { box-shadow: none !important; }
        
        /* Colored Shadows */
        .shadow-cyan-400 { box-shadow: 0 10px 15px -3px ${theme.colors.primary}40, 0 4px 6px -2px ${theme.colors.primary}20 !important; }
        .shadow-cyan-400\\/50 { box-shadow: 0 25px 50px -12px ${theme.colors.primary}50 !important; }
        .shadow-cyan-500 { box-shadow: 0 10px 15px -3px ${theme.colors.secondary}40, 0 4px 6px -2px ${theme.colors.secondary}20 !important; }
        .shadow-cyan-500\\/25 { box-shadow: 0 25px 50px -12px ${theme.colors.secondary}25 !important; }
        .shadow-cyan-500\\/50 { box-shadow: 0 25px 50px -12px ${theme.colors.secondary}50 !important; }
        .shadow-cyan-500\\/75 { box-shadow: 0 25px 50px -12px ${theme.colors.secondary}75 !important; }
        .shadow-blue-400 { box-shadow: 0 10px 15px -3px ${theme.colors.primary}40, 0 4px 6px -2px ${theme.colors.primary}20 !important; }
        .shadow-blue-400\\/50 { box-shadow: 0 25px 50px -12px ${theme.colors.primary}50 !important; }
        .shadow-blue-500 { box-shadow: 0 10px 15px -3px ${theme.colors.accent}40, 0 4px 6px -2px ${theme.colors.accent}20 !important; }
        .shadow-blue-500\\/25 { box-shadow: 0 25px 50px -12px ${theme.colors.accent}25 !important; }
        .shadow-blue-500\\/50 { box-shadow: 0 25px 50px -12px ${theme.colors.accent}50 !important; }
        .shadow-blue-500\\/75 { box-shadow: 0 25px 50px -12px ${theme.colors.accent}75 !important; }
        .shadow-blue-600\\/50 { box-shadow: 0 25px 50px -12px ${theme.colors.secondary}50 !important; }
        
        /* Enhanced Animation and Highlight Effects */
        @keyframes pulse-theme { 
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 ${theme.colors.primary}40; } 
          50% { opacity: 0.8; box-shadow: 0 0 0 10px ${theme.colors.primary}00; } 
        }
        @keyframes bounce-theme { 
          0%, 100% { 
            transform: translateY(-25%); 
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1); 
            box-shadow: 0 10px 15px -3px ${theme.colors.primary}25;
          } 
          50% { 
            transform: translateY(0); 
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
            box-shadow: 0 25px 50px -12px ${theme.colors.primary}40;
          } 
        }
        @keyframes ping-theme { 
          75%, 100% { 
            transform: scale(2); 
            opacity: 0; 
          } 
        }
        @keyframes spin-theme { 
          from { 
            transform: rotate(0deg); 
            filter: hue-rotate(0deg);
          } 
          to { 
            transform: rotate(360deg); 
            filter: hue-rotate(360deg);
          } 
        }
        @keyframes fade-in-theme {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow-theme {
          0%, 100% { box-shadow: 0 0 5px ${theme.colors.primary}40, 0 0 10px ${theme.colors.primary}20, 0 0 15px ${theme.colors.primary}10; }
          50% { box-shadow: 0 0 20px ${theme.colors.primary}60, 0 0 30px ${theme.colors.primary}40, 0 0 40px ${theme.colors.primary}20; }
        }
        
        /* Apply animations with theme colors */
        .animate-pulse { animation: pulse-theme 2s cubic-bezier(0.4, 0, 0.6, 1) infinite !important; }
        .animate-bounce { animation: bounce-theme 1s infinite !important; }
        .animate-ping { animation: ping-theme 1s cubic-bezier(0, 0, 0.2, 1) infinite !important; }
        .animate-spin { animation: spin-theme 1s linear infinite !important; }
        .animate-pulse-theme { animation: pulse-theme 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; color: ${theme.colors.primary} !important; }
        .animate-bounce-theme { animation: bounce-theme 1s infinite; color: ${theme.colors.primary} !important; }
        .animate-fade-in { animation: fade-in-theme 0.5s ease-out !important; }
        .animate-glow { animation: glow-theme 2s ease-in-out infinite alternate !important; }
        
        /* Enhanced Glow and Highlight Effects */
        .glow-cyan { 
          box-shadow: 0 0 20px ${theme.colors.primary}60, 0 0 40px ${theme.colors.primary}30, 0 0 80px ${theme.colors.primary}15 !important; 
          animation: glow-theme 2s ease-in-out infinite alternate;
        }
        .glow-blue { 
          box-shadow: 0 0 20px ${theme.colors.accent}60, 0 0 40px ${theme.colors.accent}30, 0 0 80px ${theme.colors.accent}15 !important;
          animation: glow-theme 2s ease-in-out infinite alternate; 
        }
        .highlight-cyan { 
          background: linear-gradient(120deg, transparent 0%, transparent 40%, ${theme.colors.primary}40 50%, transparent 60%, transparent 100%) !important;
          position: relative;
        }
        .highlight-blue { 
          background: linear-gradient(120deg, transparent 0%, transparent 40%, ${theme.colors.accent}40 50%, transparent 60%, transparent 100%) !important;
          position: relative;
        }
        .highlight-cyan:before, .highlight-blue:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, ${theme.colors.primary}40, transparent);
          animation: shimmer 2s infinite;
        }
        
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        /* Hover and Focus Enhanced States */
        .hover\\:shadow-lg:hover { box-shadow: 0 10px 15px -3px ${theme.colors.primary}25, 0 4px 6px -2px ${theme.colors.primary}15 !important; }
        .hover\\:shadow-xl:hover { box-shadow: 0 20px 25px -5px ${theme.colors.primary}25, 0 10px 10px -5px ${theme.colors.primary}15 !important; }
        .hover\\:shadow-2xl:hover { box-shadow: 0 25px 50px -12px ${theme.colors.primary}30 !important; }
        .hover\\:shadow-cyan-500\\/50:hover { box-shadow: 0 25px 50px -12px ${theme.colors.secondary}50 !important; }
        .hover\\:shadow-blue-500\\/50:hover { box-shadow: 0 25px 50px -12px ${theme.colors.accent}50 !important; }
        .hover\\:glow:hover { animation: glow-theme 1s ease-in-out infinite alternate !important; }
        
        /* Ring colors */
        .ring-cyan-400 { --tw-ring-color: ${theme.colors.primary} !important; }
        .ring-cyan-500 { --tw-ring-color: ${theme.colors.secondary} !important; }
        .ring-blue-400 { --tw-ring-color: ${theme.colors.primary} !important; }
        .ring-blue-500 { --tw-ring-color: ${theme.colors.accent} !important; }
        .focus\\:ring-cyan-400:focus { --tw-ring-color: ${theme.colors.primary} !important; }
        .focus\\:ring-cyan-500:focus { --tw-ring-color: ${theme.colors.secondary} !important; }
        .focus\\:ring-blue-400:focus { --tw-ring-color: ${theme.colors.primary} !important; }
        .focus\\:ring-blue-500:focus { --tw-ring-color: ${theme.colors.accent} !important; }
        
        /* Progress bars and loaders */
        .progress-cyan { background: linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.accent}) !important; }
        .progress-blue { background: linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.secondary}) !important; }
        progress::-webkit-progress-value { background-color: ${theme.colors.primary} !important; }
        progress::-moz-progress-bar { background-color: ${theme.colors.primary} !important; }
        
        /* Scrollbar theming */
        ::-webkit-scrollbar-thumb { background-color: ${theme.colors.primary} !important; }
        ::-webkit-scrollbar-thumb:hover { background-color: ${theme.colors.secondary} !important; }
        ::-webkit-scrollbar-track { background-color: ${theme.colors.primary}10 !important; }
        
        /* Selection colors */
        ::selection { background-color: ${theme.colors.primary}60 !important; color: white !important; }
        ::-moz-selection { background-color: ${theme.colors.primary}60 !important; color: white !important; }
        
        /* Card and Interactive Elements */
        .card-glow { 
          box-shadow: 0 8px 32px ${theme.colors.primary}20, 0 0 0 1px ${theme.colors.primary}10 !important;
          transition: all 0.3s ease !important;
        }
        .card-glow:hover { 
          box-shadow: 0 12px 48px ${theme.colors.primary}30, 0 0 0 1px ${theme.colors.primary}20 !important;
          transform: translateY(-2px) !important;
        }
        
        /* Dynamic Hero Grid Pattern */
        .hero-grid-pattern {
          background-image: 
            linear-gradient(to right, ${theme.colors.primary} 1px, transparent 1px),
            linear-gradient(to bottom, ${theme.colors.primary} 1px, transparent 1px) !important;
          background-size: 50px 50px !important;
        }
        
        /* Dynamic Hero Title Gradient - Beautiful Same Color Flow */
        .hero-title-gradient {
          background: linear-gradient(
            to right, 
            ${theme.colors.primary}80, 
            ${theme.colors.primary}, 
            ${theme.colors.primary}
          ) !important;
          -webkit-background-clip: text !important;
          background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          animation: theme-gradient-shine 3s ease-in-out infinite !important;
        }
        
        @keyframes theme-gradient-shine {
          0% { 
            background: linear-gradient(
              to right, 
              ${theme.colors.primary}60, 
              ${theme.colors.primary}, 
              ${theme.colors.primary}
            ) !important;
          }
          50% { 
            background: linear-gradient(
              to right, 
              ${theme.colors.primary}, 
              ${theme.colors.primary}, 
              ${theme.colors.primary}60
            ) !important;
          }
          100% { 
            background: linear-gradient(
              to right, 
              ${theme.colors.primary}60, 
              ${theme.colors.primary}, 
              ${theme.colors.primary}
            ) !important;
          }
        }
        
        /* Dynamic Hero Arrow Button Glow */
        .hero-arrow-button {
          color: ${theme.colors.primary} !important;
          filter: drop-shadow(0 0 8px ${theme.colors.primary}60) !important;
          background: transparent !important;
          border: none !important;
        }
        
        .hero-arrow-button:hover {
          color: ${theme.colors.primary} !important;
          filter: drop-shadow(0 0 12px ${theme.colors.primary}80) !important;
          background: transparent !important;
        }
        
        /* CSS Custom Properties for dynamic theming */
        :root {
          --theme-primary: ${theme.colors.primary};
          --theme-secondary: ${theme.colors.secondary};
          --theme-accent: ${theme.colors.accent};
        }
      `;
      
      document.head.appendChild(style);
      localStorage.setItem('portfolio-theme', themeId);
      setIsThemeOpen(false);
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-gradient-fix header-name-text hover:opacity-80 transition-opacity cursor-pointer"
            >
              {profile.name}
            </button>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-slate-300 hover:text-cyan-400 transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <div className="relative">
              <button
                onClick={() => setIsThemeOpen(!isThemeOpen)}
                className="flex items-center gap-2 p-2 text-slate-300 hover:text-cyan-400 rounded-lg transition-all"
                aria-label="Change theme"
              >
                <Palette size={18} />
                <span className="text-sm font-medium">Theme</span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform ${isThemeOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isThemeOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10"
                    onClick={() => setIsThemeOpen(false)}
                  />
                  <div className="absolute right-0 z-20 mt-2 w-80 max-h-96 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-cyan-500/20 overflow-hidden">
                    <div className="p-3 text-sm font-semibold text-slate-300 border-b border-cyan-500/20">
                      Choose Theme
                    </div>
                    <div className="p-3 max-h-80 overflow-y-auto">
                      <div className="grid grid-cols-2 gap-2">
                        {availableThemes.map((theme) => (
                          <button
                            key={theme.id}
                            onClick={() => handleThemeChange(theme.id)}
                            className={`flex items-center gap-2 w-full p-2 text-left text-xs rounded-md transition-colors ${
                              currentTheme.id === theme.id 
                                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50' 
                                : 'text-slate-200 hover:bg-slate-700/50 border border-transparent'
                            }`}
                          >
                            <div className="flex gap-0.5">
                              <div 
                                className="w-2.5 h-2.5 rounded-full border border-white/20"
                                style={{ backgroundColor: theme.colors.primary }}
                              />
                              <div 
                                className="w-2.5 h-2.5 rounded-full border border-white/20"
                                style={{ backgroundColor: theme.colors.secondary }}
                              />
                              <div 
                                className="w-2.5 h-2.5 rounded-full border border-white/20"
                                style={{ backgroundColor: theme.colors.accent }}
                              />
                            </div>
                            <span className="flex-1 truncate">{theme.name}</span>
                            {currentTheme.id === theme.id && (
                              <div className="text-cyan-400 text-xs">✓</div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all"
            >
              <Mail size={20} />
            </a>
            {profile.discord && (
              <a
                href={`https://discord.com/users/${profile.discord}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all"
                title="Discord"
              >
                <DiscordIcon size={20} />
              </a>
            )}
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile Theme Toggle */}
            <div className="relative md:hidden">
              <button
                onClick={() => setIsThemeOpen(!isThemeOpen)}
                className="p-2 text-slate-300 hover:text-cyan-400 rounded-lg transition-all"
                aria-label="Change theme"
              >
                <Palette size={20} />
              </button>

              {isThemeOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10"
                    onClick={() => setIsThemeOpen(false)}
                  />
                  <div className="absolute right-0 z-20 mt-2 w-72 max-h-80 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-cyan-500/20 overflow-hidden">
                    <div className="p-2 text-xs font-semibold text-slate-300 border-b border-cyan-500/20">
                      Choose Theme
                    </div>
                    <div className="p-2 max-h-64 overflow-y-auto">
                      <div className="grid grid-cols-2 gap-1.5">
                        {availableThemes.map((theme) => (
                          <button
                            key={theme.id}
                            onClick={() => handleThemeChange(theme.id)}
                            className={`flex items-center gap-1.5 w-full p-1.5 text-left text-xs rounded transition-colors ${
                              currentTheme.id === theme.id 
                                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50' 
                                : 'text-slate-200 hover:bg-slate-700/50 border border-transparent'
                            }`}
                          >
                            <div className="flex gap-0.5">
                              <div 
                                className="w-2 h-2 rounded-full border border-white/20"
                                style={{ backgroundColor: theme.colors.primary }}
                              />
                              <div 
                                className="w-2 h-2 rounded-full border border-white/20"
                                style={{ backgroundColor: theme.colors.secondary }}
                              />
                            </div>
                            <span className="flex-1 truncate text-[10px]">{theme.name}</span>
                            {currentTheme.id === theme.id && <span className="text-cyan-400 text-[10px]">✓</span>}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <button
              className="md:hidden text-slate-300 hover:text-cyan-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-cyan-500/20 pt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left text-slate-300 hover:text-cyan-400 py-2 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="flex gap-4 pt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-2 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all"
              >
                <Mail size={20} />
              </a>
              {profile.discord && (
                <a
                  href={`https://discord.com/users/${profile.discord}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all"
                  title="Discord"
                >
                  <DiscordIcon size={20} />
                </a>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}