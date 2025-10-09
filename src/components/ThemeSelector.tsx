import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Palette, Check } from 'lucide-react';

export const ThemeSelector: React.FC = () => {
  const { currentTheme, availableThemes, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="theme-selector-button"
        aria-label="Change theme"
      >
        <Palette size={20} />
      </button>

      {isOpen && (
        <>
          <div 
            className="theme-selector-overlay"
            onClick={() => setIsOpen(false)}
          />
          <div className="theme-selector-dropdown">
            <h3 className="theme-selector-title">Choose Theme</h3>
            <div className="theme-options">
              {availableThemes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => {
                    setTheme(theme.id);
                    setIsOpen(false);
                  }}
                  className={`theme-option ${currentTheme.id === theme.id ? 'active' : ''}`}
                >
                  <div className="theme-preview">
                    <div 
                      className="color-circle primary"
                      style={{ backgroundColor: theme.colors.primary }}
                    />
                    <div 
                      className="color-circle secondary"
                      style={{ backgroundColor: theme.colors.secondary }}
                    />
                    <div 
                      className="color-circle accent"
                      style={{ backgroundColor: theme.colors.accent }}
                    />
                  </div>
                  <span className="theme-name">{theme.name}</span>
                  {currentTheme.id === theme.id && (
                    <Check size={16} className="check-icon" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
