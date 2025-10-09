import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Palette, ChevronDown } from 'lucide-react';

export const ThemeToggleButton: React.FC = () => {
  const { currentTheme, availableThemes, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="theme-toggle-container">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="theme-toggle-button"
        aria-label="Change theme"
      >
        <Palette size={18} />
        <span>Theme</span>
        <ChevronDown 
          size={16} 
          className={`chevron ${isOpen ? 'rotated' : ''}`}
        />
      </button>

      {isOpen && (
        <>
          <div 
            className="theme-dropdown-overlay"
            onClick={() => setIsOpen(false)}
          />
          <div className="theme-dropdown">
            {availableThemes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  setTheme(theme.id);
                  setIsOpen(false);
                }}
                className={`theme-option-button ${currentTheme.id === theme.id ? 'active' : ''}`}
              >
                <div className="theme-colors">
                  <div 
                    className="color-dot"
                    style={{ backgroundColor: theme.colors.primary }}
                  />
                  <div 
                    className="color-dot"
                    style={{ backgroundColor: theme.colors.secondary }}
                  />
                  <div 
                    className="color-dot"
                    style={{ backgroundColor: theme.colors.accent }}
                  />
                </div>
                <span>{theme.name}</span>
                {currentTheme.id === theme.id && (
                  <div className="active-indicator">✓</div>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
