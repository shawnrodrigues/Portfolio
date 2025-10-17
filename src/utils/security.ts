/**
 * Security utilities for input validation and sanitization
 */

export const SecurityUtils = {
  /**
   * Sanitize HTML content to prevent XSS
   */
  sanitizeHTML: (html: string): string => {
    const temp = document.createElement('div');
    temp.textContent = html;
    return temp.innerHTML;
  },

  /**
   * Validate email format
   */
  isValidEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 254;
  },

  /**
   * Validate URL format
   */
  isValidURL: (url: string): boolean => {
    try {
      const urlObj = new URL(url);
      return ['http:', 'https:'].includes(urlObj.protocol);
    } catch {
      return false;
    }
  },

  /**
   * Rate limiting for form submissions
   */
  rateLimiter: (() => {
    const submissions: number[] = [];
    const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
    const MAX_ATTEMPTS = 5;

    return {
      canSubmit: (): boolean => {
        const now = Date.now();
        // Remove old submissions outside the window
        const recentSubmissions = submissions.filter(time => now - time < WINDOW_MS);
        submissions.length = 0;
        submissions.push(...recentSubmissions);
        
        return submissions.length < MAX_ATTEMPTS;
      },
      recordSubmission: (): void => {
        submissions.push(Date.now());
      }
    };
  })(),

  /**
   * Escape special characters for safe display
   */
  escapeHtml: (text: string): string => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
};

/**
 * Secure localStorage wrapper with encryption simulation
 */
export const SecureStorage = {
  set: (key: string, value: any): void => {
    try {
      // Simple obfuscation (not real encryption, but better than plain text)
      const encoded = btoa(JSON.stringify(value));
      localStorage.setItem(`sr_${key}`, encoded);
    } catch (error) {
      console.warn('Failed to save to secure storage:', error);
    }
  },

  get: (key: string): any => {
    try {
      const item = localStorage.getItem(`sr_${key}`);
      if (!item) return null;
      return JSON.parse(atob(item));
    } catch (error) {
      console.warn('Failed to read from secure storage:', error);
      return null;
    }
  },

  remove: (key: string): void => {
    localStorage.removeItem(`sr_${key}`);
  },

  clear: (): void => {
    Object.keys(localStorage)
      .filter(key => key.startsWith('sr_'))
      .forEach(key => localStorage.removeItem(key));
  }
};