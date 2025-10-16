import { Heart } from 'lucide-react';

export default function Footer() {
  
  return (
    <footer className="relative py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-cyan-500/20 safe-area-inset-bottom">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 text-center">
          <p className="text-slate-400 flex items-center gap-2 text-sm sm:text-base">
            Built with <Heart 
              size={14} 
              className="sm:w-4 sm:h-4 text-cyan-400 heart-pulse-glow" 
            /> Made By Shawn
          </p>
          <p className="text-slate-500 text-xs sm:text-sm">
            {new Date().getFullYear()} - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
