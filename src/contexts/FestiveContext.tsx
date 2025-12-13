import React, { createContext, useContext, useState, useEffect } from 'react';

type FestiveTheme = 'off' | 'diwali' | 'christmas' | 'newyear' | 'halloween' | 'holi' | 'birthday';

// Automatic date detection for festive themes
const getAutomaticFestiveTheme = (): FestiveTheme => {
  const now = new Date();
  const month = now.getMonth() + 1; // getMonth() returns 0-11, so add 1 for 1-12
  const day = now.getDate();

  // 🎂 Birthday: February 25th only
  if (month === 2 && day === 25) {
    return 'birthday';
  }

  // 🎆 New Year: December 30 - January 3 (extended celebration)
  if ((month === 12 && day >= 30) || (month === 1 && day <= 3)) {
    return 'newyear';
  }

  // 🎄 Christmas Season: December 15-29 (before New Year)
  if (month === 12 && day >= 12 && day <= 29) {
    return 'christmas';
  }

  // 🎃 Halloween: October 25 - November 1 (extended Halloween vibes)
  if ((month === 10 && day >= 25) || (month === 11 && day === 1)) {
    return 'halloween';
  }

  // 🪔 Diwali Season: Mid-October to Mid-November (avoiding Halloween overlap)
  if (month === 10 && day >= 10 && day <= 24) {
    return 'diwali';
  }

  // 🎨 Holi: Usually in March - celebrate around March 5-20 (broader range)
  if (month === 3 && day >= 5 && day <= 20) {
    return 'holi';
  }

  // Special cases for exact 2025 dates (you can update these yearly)
  // Diwali 2025 is on November 1st, but we handle this in the ranges above
  
  // Default: no festive theme
  return 'off';
};

interface FestiveContextType {
  festiveTheme: FestiveTheme;
  isFestiveMode: boolean;
  fireworksActive: boolean;
  triggerFireworks: () => void;
}

const FestiveContext = createContext<FestiveContextType | undefined>(undefined);

export function FestiveProvider({ children }: { children: React.ReactNode }) {
  // 🎉 AUTOMATIC FESTIVE THEME DETECTION
  // The theme is now automatically detected based on the current date!
  // 
  // 🎆 FESTIVAL SCHEDULE:
  // 🎂 Birthday (Feb 25 only) - Balloons and party streamers
  // 🎆 New Year (Dec 30 - Jan 3) - Golden sparkles  
  // 🎄 Christmas (Dec 15-29) - Snowflakes
  // 🎃 Halloween (Oct 25 - Nov 1) - Pumpkins and confetti
  // 🪔 Diwali (Oct 10-24 & Nov 2-20) - Fireworks
  // 🎨 Holi (Mar 5-20) - Colorful powder bursts
  //
  // � Current: October 16, 2025 → Should detect DIWALI! 🪔
  //
  // �💡 Manual Override: Uncomment the line below to set a specific theme
  // const manualTheme = 'halloween' as FestiveTheme; // 👈 Manual override
  
  // 🤖 Automatic theme detection with daily refresh
  const [currentDate, setCurrentDate] = useState(() => new Date().toDateString());
  
  // Manual override - uncomment to force a specific theme
  const manualTheme: FestiveTheme | null = null; // Change to 'halloween', 'diwali', etc. to override
  
  const [festiveTheme, setFestiveTheme] = useState(() => {
    const theme = manualTheme || getAutomaticFestiveTheme();
    const detectionMethod = manualTheme ? 'Manual Override' : 'Auto-Detected';
    console.log(`🎉 Festive Theme ${detectionMethod}: ${theme} (${new Date().toLocaleDateString()})`);
    return theme;
  });
  
  const [fireworksActive, setFireworksActive] = useState(false);
  const isFestiveMode = festiveTheme !== 'off';

  // Check for date changes and update theme accordingly
  useEffect(() => {
    const checkDateChange = () => {
      const today = new Date().toDateString();
      if (today !== currentDate) {
        setCurrentDate(today);
        const newTheme = manualTheme || getAutomaticFestiveTheme();
        const detectionMethod = manualTheme ? 'Manual Override' : 'Auto-Detected';
        console.log(`📅 Date changed! New theme ${detectionMethod}: ${newTheme} (${new Date().toLocaleDateString()})`);
        setFestiveTheme(newTheme);
      }
    };

    // Check every hour for date changes (only if not using manual override)
    if (!manualTheme) {
      const interval = setInterval(checkDateChange, 60 * 60 * 1000);
      return () => clearInterval(interval);
    }
  }, [currentDate, manualTheme]);

  const triggerFireworks = () => {
    setFireworksActive(true);
    setTimeout(() => setFireworksActive(false), 5000); // Fireworks last 5 seconds
  };

  // Auto-trigger animations continuously when in festive mode
  useEffect(() => {
    if (isFestiveMode) {
      // Initial animation when mode is enabled
      const initialDelay = setTimeout(() => {
        triggerFireworks();
      }, 2000); // Start after 2 seconds

      // Continuous animations every 15-25 seconds
      const interval = setInterval(() => {
        triggerFireworks(); // Always trigger, no random chance
      }, 15000 + Math.random() * 10000); // Random interval between 15-25 seconds

      return () => {
        clearTimeout(initialDelay);
        clearInterval(interval);
      };
    }
  }, [isFestiveMode]);

  // Debug: Log theme status on load
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    console.log(`
🎉 FESTIVE THEME STATUS 🎉
📅 Date: ${formattedDate}
🎭 Current Theme: ${festiveTheme.toUpperCase()}
${manualTheme ? '🔧 Mode: Manual Override' : '🤖 Mode: Automatic Detection'}
${isFestiveMode ? '✨ Animations: ACTIVE' : '😴 Animations: OFF'}
    `);
  }, [festiveTheme, isFestiveMode, manualTheme]);

  return (
    <FestiveContext.Provider value={{
      festiveTheme,
      isFestiveMode,
      fireworksActive,
      triggerFireworks
    }}>
      {children}
    </FestiveContext.Provider>
  );
}

export function useFestive() {
  const context = useContext(FestiveContext);
  if (context === undefined) {
    throw new Error('useFestive must be used within a FestiveProvider');
  }
  return context;
}
