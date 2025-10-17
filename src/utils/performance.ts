/**
 * Performance monitoring utilities
 */

interface PerformanceMetrics {
  navigationTiming: PerformanceNavigationTiming | null;
  resources: PerformanceResourceTiming[];
  customMetrics: Record<string, number>;
}

export class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    navigationTiming: null,
    resources: [],
    customMetrics: {}
  };

  constructor() {
    this.initializeMonitoring();
  }

  private initializeMonitoring(): void {
    // Wait for page load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.collectMetrics();
      });
    } else {
      this.collectMetrics();
    }

    // Monitor Core Web Vitals
    this.observeCoreWebVitals();
  }

  private collectMetrics(): void {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];

    this.metrics.navigationTiming = navigation;
    this.metrics.resources = resources;

    // Calculate custom metrics
    if (navigation) {
      this.metrics.customMetrics = {
        totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
        firstByte: navigation.responseStart - navigation.fetchStart,
        domInteractive: navigation.domInteractive - navigation.fetchStart,
        resourcesLoadTime: navigation.loadEventEnd - navigation.domContentLoadedEventEnd
      };
    }
  }

  private observeCoreWebVitals(): void {
    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.customMetrics.lcp = lastEntry.startTime;
    });

    try {
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // LCP not supported
    }

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry: any) => {
        this.metrics.customMetrics.fid = entry.processingStart - entry.startTime;
      });
    });

    try {
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      // FID not supported
    }

    // Cumulative Layout Shift (CLS)
    let clsScore = 0;
    const clsObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsScore += entry.value;
          this.metrics.customMetrics.cls = clsScore;
        }
      });
    });

    try {
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // CLS not supported
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public reportToAnalytics(): void {
    // Send performance data to Google Analytics
    if (typeof (window as any).gtag !== 'undefined') {
      const metrics = this.getMetrics();
      const gtag = (window as any).gtag;
      
      // Report Core Web Vitals
      if (metrics.customMetrics.lcp) {
        gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'LCP',
          value: Math.round(metrics.customMetrics.lcp)
        });
      }

      if (metrics.customMetrics.fid) {
        gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'FID', 
          value: Math.round(metrics.customMetrics.fid)
        });
      }

      if (metrics.customMetrics.cls) {
        gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'CLS',
          value: Math.round(metrics.customMetrics.cls * 1000)
        });
      }
    }
  }
}

// Initialize performance monitoring
export const performanceMonitor = new PerformanceMonitor();