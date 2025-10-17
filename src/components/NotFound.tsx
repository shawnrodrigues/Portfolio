import { useEffect } from 'react';
import { router } from '../utils/router';

interface NotFoundProps {
  onRedirect?: () => void;
}

export default function NotFound({ onRedirect }: NotFoundProps) {
  useEffect(() => {
    // Auto-redirect after 3 seconds
    const timer = setTimeout(() => {
      router.navigateToSection('');
      onRedirect?.();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onRedirect]);

  const handleRedirectNow = () => {
    router.navigateToSection('');
    onRedirect?.();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-cyan-400 mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-slate-400 mb-6">
            The page you're looking for doesn't exist. You'll be redirected to the home page automatically.
          </p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={handleRedirectNow}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
          >
            Go Home Now
          </button>
          
          <div className="text-sm text-slate-500">
            Auto-redirecting in 3 seconds...
          </div>
        </div>
        
        {/* Animated dots */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}