/**
 * Simple router for SPA that redirects invalid routes to home
 */

export class SimpleRouter {
  private validSections = ['', 'about', 'experience', 'projects', 'skills', 'education', 'certifications', 'extracurricular'];
  private isInitialized = false;
  
  constructor() {
    // Initialize on DOM ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.init());
    } else {
      this.init();
    }
  }

  private init(): void {
    if (this.isInitialized) return;
    this.isInitialized = true;

    // Check URL on initial load
    this.checkRoute();
    
    // Listen to browser back/forward navigation
    window.addEventListener('popstate', () => {
      this.checkRoute();
    });

    // Handle invalid routes typed directly in address bar
    this.handleDirectNavigation();
  }

  private checkRoute(): void {
    const path = window.location.pathname;
    const hash = window.location.hash;
    
    // Clean up the path - remove leading/trailing slashes and decode
    let section = '';
    try {
      section = decodeURIComponent(path === '/' ? '' : path.substring(1));
      
      // Also check hash-based navigation
      if (!section && hash) {
        section = decodeURIComponent(hash.substring(1));
      }
    } catch (e) {
      // Invalid URI encoding, redirect to home
      this.redirectToHome('Invalid URL encoding');
      return;
    }
    
    // Clean section name (remove special characters, only allow alphanumeric and hyphens)
    section = section.replace(/[^a-zA-Z0-9-]/g, '');
    
    // Check if it's a valid section or empty (home)
    if (!this.isValidRoute(section)) {
      this.redirectToHome(`Invalid section: ${section}`);
      return;
    }
    
    // If it's a valid section, scroll to it
    if (section && section !== '') {
      this.scrollToSection(section);
    }
  }

  private handleDirectNavigation(): void {
    // Check for common invalid paths that should redirect
    const invalidPatterns = [
      /\/[^/]*\.[^/]*$/, // Files with extensions (e.g., /file.html)
      /\/admin/i,        // Admin paths
      /\/wp-/i,          // WordPress paths
      /\/api/i,          // API paths
      /\/(login|signin|signup)/i, // Authentication paths
      /\/\d+$/,          // Numeric IDs
    ];

    const currentPath = window.location.pathname;
    
    if (invalidPatterns.some(pattern => pattern.test(currentPath))) {
      this.redirectToHome(`Blocked invalid path pattern: ${currentPath}`);
    }
  }

  private isValidRoute(section: string): boolean {
    return this.validSections.includes(section.toLowerCase());
  }

  private redirectToHome(reason?: string): void {
    if (reason) {
      console.log(`Router redirect: ${reason}`);
    }

    // Use history.replaceState to avoid adding to browser history
    window.history.replaceState(null, '', '/');
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Optional: Send analytics event for invalid route attempts
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'invalid_route', {
        event_category: 'Navigation',
        event_label: window.location.pathname,
        value: 1
      });
    }
  }

  private scrollToSection(sectionId: string): void {
    // Wait a bit for DOM to be ready
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // If section doesn't exist in DOM, redirect to home
        console.warn(`Section '${sectionId}' not found in DOM, redirecting to home`);
        this.redirectToHome(`Section not found: ${sectionId}`);
      }
    }, 100);
  }

  // Public method to navigate to sections
  public navigateToSection(sectionId: string): void {
    const cleanSectionId = sectionId.toLowerCase().replace(/[^a-zA-Z0-9-]/g, '');
    
    if (this.isValidRoute(cleanSectionId)) {
      // Update URL
      const newUrl = cleanSectionId === '' ? '/' : `/#${cleanSectionId}`;
      window.history.pushState(null, '', newUrl);
      
      // Scroll to section
      if (cleanSectionId) {
        this.scrollToSection(cleanSectionId);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      console.warn(`Invalid section for navigation: ${sectionId}`);
      this.redirectToHome(`Invalid navigation attempt: ${sectionId}`);
    }
  }

  // Public method to get current section
  public getCurrentSection(): string {
    const path = window.location.pathname;
    const hash = window.location.hash;
    
    let section = path === '/' ? '' : path.substring(1);
    if (!section && hash) {
      section = hash.substring(1);
    }
    
    return section.toLowerCase().replace(/[^a-zA-Z0-9-]/g, '');
  }

  // Public method to check if a route is valid
  public isValidSection(section: string): boolean {
    return this.isValidRoute(section);
  }
}

// Create singleton instance
export const router = new SimpleRouter();