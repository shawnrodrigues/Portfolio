import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 bg-slate-950 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-slate-400 flex items-center gap-2">
            Built with <Heart size={16} className="text-cyan-400" /> By Shawn
          </p>
          <p className="text-slate-500 text-sm">
            {new Date().getFullYear()} - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
