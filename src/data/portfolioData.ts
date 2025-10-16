import { Profile, Education, Certification, Project, Skill, Experience, YouTubeChannel, ExtracurricularActivity } from '../types/portfolio';

export const profile: Profile = {
  name: 'Shawn Ignace Rodrigues',
  title: 'Computer Engineer',
  bio: "I'm a Computer Engineering student passionate about technology, software development, and creative digital projects. With a strong foundation in programming, networking, and cybersecurity from my Diploma and B.E. in Computer Engineering, I love building tools that make digital workflows smarter, a program designed to make searching inside images and PDFs effortless. Alongside my technical journey, I also create content on YouTube under the name Coconut Gamer, where I explore gaming, tech reviews, and tutorials.",
  email: 'shawn.rodrigues3308@gmail.com',
  github: 'https://github.com/shawnrodrigues',
  linkedin: 'https://www.linkedin.com/in/shawn3308/',
  discord: 'coconutplayz', // Update with your actual Discord username
  avatarUrl: ''
};

export const education: Education[] = [
  {
    id: '1',
    institution: 'Agnel Polytechnic Verna-Goa',
    degree: 'Diploma in Computer Engineering',
    location: 'India, Goa',
    startDate: '2019',
    endDate: '2022',
    description: 'Focused on the fundamentals of computer science, software development, and networking. Gained hands-on experience in programming, database management, hardware systems, and project-based learning to build a strong technical foundation for real-world applications.'
  },
  {
    id: '2',
    institution: 'Fr. Agnel Multipurpose High School',
    degree: 'SSC Grade X',
    location: 'India, Goa',
    startDate: '2018',
    endDate: '2019',
    description: 'Completed schooling with a solid academic base and active involvement in various school activities and projects.'
  },
  {
    id: '3',
    institution: 'Padre Conceição College of Engineering',
    degree: 'Bachelor of Engineering in Computer Engineering',
    location: 'India, Goa',
    startDate: '2022',
    endDate: '2026',
    description: 'Developed strong technical expertise in software development, computer networks, and system design. Gained hands-on experience through academic projects, teamwork, and practical learning in emerging technologies.'
  },
];

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Fortinet Certified Fundamentals in Cybersecurity',
    issuer: 'Fortinet',
    issueDate: '2025-09',
    credentialId: '3320757142SR'
  },
  {
    id: '2',
    title: 'Fortinet Certified Associate in Cybersecurity',
    issuer: 'Fortinet',
    issueDate: '2025-09',
    credentialId: '2950813004SR'
  },
  {
    id: '3',
    title: 'FCA - FortiGate 7.6 Operator Self-Paced',
    issuer: 'Fortinet',
    issueDate: '2025-09',
  },
  {
    id: '4',
    title: 'FCF - Technical Introduction to Cybersecurity 2.0',
    issuer: 'Fortinet',
    issueDate: '2025-09',
  },
  {
    id: '5',
    title: 'FCF - Getting Started in Cybersecurity 3.0',
    issuer: 'Fortinet',
    issueDate: '2025-09',
  },
  {
    id: '6',
    title: 'Industry Internship Program “TechStatic 2024”',
    issuer: 'Fluxatic™ Global',
    issueDate: '2024',
  },
  {
    id: '7',
    title: 'Introduction to Internet of Things (IoT)',
    issuer: 'NPTEL',
    issueDate: '2024',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Promply V2',
    description: 'Promply-V2 is an intelligent search and extraction program that allows users to easily find and analyze information from image and PDF files. Using OCR (Optical Character Recognition) and natural language processing, the program converts non-searchable documents into searchable data, making it simpler to locate text, keywords, or topics within visual or scanned content.',
    technologies: ['Python', 'OCR (Optical Character Recognition)', 'PDF Processing Libraries', 'Text Search & Indexing'],
    featured: true,
    githubUrl: 'https://github.com/shawnrodrigues/Promply-V2'
  },
  {
    id: '2',
    title: 'Goan Traders',
    description: 'Goan Traders is a full-stack web application designed to provide a seamless online shopping experience for building materials and cement. The platform enables customers to browse products, place orders, and get in touch with support effortlessly. The project emphasizes usability, secure transactions, and efficient product management for local businesses in the construction industry.',
    technologies: ['Astro', 'JavaScript'],
    featured: true,
    liveUrl: 'https://goantraders.com/',
    githubUrl: 'https://github.com/shawnrodrigues/Goan-Traders'
  },
];

export const skills: Skill[] = [
  { id: '1', name: 'VMware Workstation', category: 'Tools & Platforms', proficiency: 90 },
  { id: '2', name: 'Docker', category: 'Tools & Platforms', proficiency: 85 },
  { id: '3', name: 'VirtualBox', category: 'Tools & Platforms', proficiency: 88 },
  { id: '4', name: 'VS Code', category: 'Tools & Platforms', proficiency: 80 },
  { id: '5', name: 'NGINX / Apache', category: 'Tools & Platforms', proficiency: 75 },


  { id: '6', name: 'System Administration', category: 'Other Technical Areas', proficiency: 70 },
  { id: '7', name: 'IoT fundamentals', category: 'Other Technical Areas', proficiency: 82 },
  { id: '8', name: 'Cloud basics (AWS/Azure)', category: 'Other Technical Areas', proficiency: 65 },


  { id: '9', name: 'PostgreSQL/MongoDB', category: 'Database', proficiency: 78 },
  { id: '10', name: 'MongoDB', category: 'Database', proficiency: 72 },
  { id: '11', name: 'SQLite', category: 'Database', proficiency: 80 },


  { id: '12', name: 'AWS', category: 'Cloud Platforms', proficiency: 75 },
  { id: '13', name: 'Azure', category: 'Cloud Platforms', proficiency: 70 },
  { id: '22', name: 'Google Cloud (basic deployment)', category: 'Cloud Platforms', proficiency: 70 },



  { id: '14', name: 'Network Configuration', category: 'Networking', proficiency: 68 },
  { id: '15', name: 'TCP/IP', category: 'Networking', proficiency: 68 },
  { id: '16', name: 'Firewalls', category: 'Networking', proficiency: 68 },
  { id: '17', name: 'Load Balancing', category: 'Networking', proficiency: 68 },
  { id: '18', name: 'Network Monitoring', category: 'Networking', proficiency: 68 },

  { id: '19', name: 'Fortinet Certified (FCF, FCA)', category: 'Cybersecurity', proficiency: 68 },
  { id: '20', name: 'Threat Awareness', category: 'Cybersecurity', proficiency: 68 },
  { id: '21', name: 'VPNs', category: 'Cybersecurity', proficiency: 68 }
];

export const experience: Experience[] = [
  {
    id: '1',
    company: 'GamersCord',
    position: 'Managing Editor',
    location: 'India',
    startDate: '2020',
    endDate: null,
    description: 'Leading development of cloud-native infrastructure and distributed systems. Architecting scalable solutions serving millions of users.',
    achievements: [
      'Designed and implemented microservices platform reducing deployment time by 75%',
      'Led migration to Kubernetes, improving system reliability to 99.99% uptime',
      'Mentored team of 8 engineers and established engineering best practices',
      'Reduced cloud infrastructure costs by 40% through optimization initiatives'
    ]
  },
  {
    id: '2',
    company: 'AI Research Labs',
    position: 'Machine Learning Engineer',
    location: 'India',
    startDate: '2020-08',
    endDate: '2022-06',
    description: 'Developed production ML systems and research prototypes. Specialized in deep learning, NLP, and computer vision applications.',
    achievements: [
      'Built recommendation system serving 5M+ daily active users',
      'Published 3 papers at top-tier ML conferences (NeurIPS, ICML)',
      'Optimized inference pipeline achieving 10x throughput improvement',
      'Created ML infrastructure tools adopted across organization'
    ]
  },
];

export interface Theme {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
  };
}

const youtubeChannel: YouTubeChannel = {
  id: '1',
  channelName: 'Coconut Gamer',
  channelUrl: 'http://youtube.com/coconutgamer', // Update with your actual channel URL
  logoUrl: 'https://yt3.googleusercontent.com/hGtINWDVh5Dp3qachWh7tO5HD7I9l3PAxDevKNbHhWu3yBvzms1AqWzmG6wfrykY0pyAJZpXHA=s160-c-k-c0x00ffffff-no-rj', // Update with your actual channel logo URL
  description: 'Welcome to Coconut Gamer! Join me as I explore the latest games, share tech reviews, and create tutorials. From gaming adventures to tech insights, this channel is all about discovering and sharing the digital world together.',
  subscriberCount: '1K+', // Update with actual numbers
  totalViews: '50K+', // Update with actual numbers
  videoCount: '25+', // Update with actual numbers
  featuredVideos: [
    {
      id: '1',
      title: 'How To Migrate Pterodactyl Panel From One Machine To Other Machine | Latest Tutorial!!',
      description: 'A comprehensive guide to starting your journey in game development',
      videoUrl: 'https://www.youtube.com/watch?v=7HYf7b8vagY', // Update with actual video URLs
      thumbnailUrl: 'https://img.youtube.com/vi/7HYf7b8vagY/maxresdefault.jpg', // Update with actual thumbnail
      views: '2.2K',
      publishedDate: '2024-08'
    },
    {
      id: '2',
      title: 'How To Install Pterodactyl Panel : No Domain Needed! | 2024 Tutorial',
      description: 'The process of installing the Pterodactyl panel without the need for a domain.',
      videoUrl: 'https://www.youtube.com/watch?v=Rcsd7AmFnAc',
      thumbnailUrl: 'https://img.youtube.com/vi/Rcsd7AmFnAc/maxresdefault.jpg',
      views: '20K',
      publishedDate: 'Feb 8, 2024'
    },
    {
      id: '3',
      title: 'How to set up a database in Pterodactyl ',
      description: 'Step-by-step tutorial on creating a simple game from scratch',
      videoUrl: 'https://www.youtube.com/watch?v=BJdS_jIYxEM&t=17s', // Update with actual video URLs
      thumbnailUrl: 'https://img.youtube.com/vi/BJdS_jIYxEM/maxresdefault.jpg', // Update with actual thumbnail
      views: '17K',
      publishedDate: 'Feb 15, 2024'
    }
  ]
};

export const extracurricularActivities: ExtracurricularActivity[] = [
  {
    id: '1',
    title: 'YouTube Content Creator',
    type: 'youtube',
    description: 'Creating educational and entertaining content about gaming, technology, and tutorials',
    startDate: '2020',
    endDate: null,
    status: 'active',
    details: youtubeChannel,
    achievements: [
      'Built a community of 1K+ subscribers',
      'Generated 50K+ total views across all content',
      'Created 25+ educational and gaming videos',
      'Established consistent content creation schedule'
    ]
  },
  {
    id: '2',
    title: 'ZAP-Hosting Official Channel Partner',
    type: 'other',
    description: 'Exclusive channel partnership with ZAP-Hosting, Europe\'s leading game server and web hosting provider. Creating engaging content, tutorials, and promoting cutting-edge hosting solutions to empower the gaming community worldwide.',
    startDate: '2024',
    endDate: null,
    status: 'active',
    details: {
      partnershipType: 'Official Channel Partner',
      company: 'ZAP-Hosting',
      website: 'https://zap-hosting.com/dedicatedservers',
      logoUrl: 'https://cdn.brandfetch.io/idcW9twIpb/w/800/h/908/theme/light/symbol.png?c=1bxid64Mup7aczewSAYMX&t=1741944027918', // You can replace this with any logo URL
      description: 'Europe\'s #1 Game Server & Web Hosting Provider',
      specialties: ['Game Server Hosting', 'Web Hosting', 'VPS Solutions', 'Dedicated Servers'],
      partnerBenefits: ['Exclusive Content Creation', 'Technical Support', 'Community Engagement', 'Product Innovation'],
      established: '2010',
      reach: 'Global Gaming Community'
    },
    achievements: [
      '🎮 Established exclusive partnership with Europe\'s leading hosting provider',
      '📈 Created high-impact promotional content for gaming server solutions',
      '🎯 Delivered hosting recommendations to 50K+ gaming community members',
      '🚀 Collaborated on innovative technical content and tutorials',
      '⚡ Promoted cutting-edge ZAP-Hosting infrastructure solutions',
      '🏆 Contributed to ZAP-Hosting\'s community growth and engagement'
    ]
  }
  // Add more extracurricular activities here in the future
];

export const themes: Theme[] = [
  {
    id: 'default',
    name: 'Default Blue',
    colors: {
      primary: '#3b82f6',
      secondary: '#1e40af',
      accent: '#06b6d4',
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#1f2937',
      textSecondary: '#6b7280',
      border: '#e5e7eb'
    }
  },
  {
    id: 'dark',
    name: 'Dark Mode',
    colors: {
      primary: '#60a5fa',
      secondary: '#3b82f6',
      accent: '#22d3ee',
      background: '#0f172a',
      surface: '#1e293b',
      text: '#f1f5f9',
      textSecondary: '#94a3b8',
      border: '#334155'
    }
  },
  {
    id: 'purple',
    name: 'Purple Dream',
    colors: {
      primary: '#8b5cf6',
      secondary: '#7c3aed',
      accent: '#a78bfa',
      background: '#fefbff',
      surface: '#f3f4f6',
      text: '#1f2937',
      textSecondary: '#6b7280',
      border: '#e5e7eb'
    }
  },
  {
    id: 'green',
    name: 'Nature Green',
    colors: {
      primary: '#10b981',
      secondary: '#059669',
      accent: '#34d399',
      background: '#ffffff',
      surface: '#f0fdf4',
      text: '#1f2937',
      textSecondary: '#6b7280',
      border: '#d1fae5'
    }
  },
  {
    id: 'orange',
    name: 'Sunset Orange',
    colors: {
      primary: '#f97316',
      secondary: '#ea580c',
      accent: '#fb923c',
      background: '#ffffff',
      surface: '#fffbeb',
      text: '#1f2937',
      textSecondary: '#6b7280',
      border: '#fed7aa'
    }
  },
  {
    id: 'pink',
    name: 'Rose Pink',
    colors: {
      primary: '#ec4899',
      secondary: '#be185d',
      accent: '#f472b6',
      background: '#ffffff',
      surface: '#fdf2f8',
      text: '#1f2937',
      textSecondary: '#6b7280',
      border: '#fce7f3'
    }
  },
  {
    id: 'red',
    name: 'Fire Red',
    colors: {
      primary: '#ef4444',
      secondary: '#dc2626',
      accent: '#f87171',
      background: '#ffffff',
      surface: '#fef2f2',
      text: '#1f2937',
      textSecondary: '#6b7280',
      border: '#fecaca'
    }
  },
  {
    id: 'indigo',
    name: 'Deep Indigo',
    colors: {
      primary: '#6366f1',
      secondary: '#4f46e5',
      accent: '#818cf8',
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#1f2937',
      textSecondary: '#6b7280',
      border: '#e0e7ff'
    }
  },
  {
    id: 'teal',
    name: 'Ocean Teal',
    colors: {
      primary: '#14b8a6',
      secondary: '#0f766e',
      accent: '#5eead4',
      background: '#ffffff',
      surface: '#f0fdfa',
      text: '#1f2937',
      textSecondary: '#6b7280',
      border: '#99f6e4'
    }
  },
  {
    id: 'yellow',
    name: 'Golden Yellow',
    colors: {
      primary: '#eab308',
      secondary: '#ca8a04',
      accent: '#fde047',
      background: '#ffffff',
      surface: '#fefce8',
      text: '#1f2937',
      textSecondary: '#6b7280',
      border: '#fef3c7'
    }
  },
  {
    id: 'emerald',
    name: 'Emerald Green',
    colors: {
      primary: '#10b981',
      secondary: '#047857',
      accent: '#6ee7b7',
      background: '#ffffff',
      surface: '#ecfdf5',
      text: '#1f2937',
      textSecondary: '#6b7280',
      border: '#a7f3d0'
    }
  },
  {
    id: 'violet',
    name: 'Electric Violet',
    colors: {
      primary: '#8b5cf6',
      secondary: '#7c3aed',
      accent: '#c4b5fd',
      background: '#ffffff',
      surface: '#faf5ff',
      text: '#1f2937',
      textSecondary: '#6b7280',
      border: '#e9d5ff'
    }
  },
  {
    id: 'cyan',
    name: 'Bright Cyan',
    colors: {
      primary: '#06b6d4',
      secondary: '#0891b2',
      accent: '#67e8f9',
      background: '#ffffff',
      surface: '#ecfeff',
      text: '#1f2937',
      textSecondary: '#6b7280',
      border: '#a5f3fc'
    }
  },
  {
    id: 'lime',
    name: 'Electric Lime',
    colors: {
      primary: '#65a30d',
      secondary: '#4d7c0f',
      accent: '#a3e635',
      background: '#ffffff',
      surface: '#f7fee7',
      text: '#1f2937',
      textSecondary: '#6b7280',
      border: '#d9f99d'
    }
  },
  {
    id: 'amber',
    name: 'Warm Amber',
    colors: {
      primary: '#d97706',
      secondary: '#b45309',
      accent: '#fbbf24',
      background: '#ffffff',
      surface: '#fffbeb',
      text: '#1f2937',
      textSecondary: '#6b7280',
      border: '#fde68a'
    }
  },
  {
    id: 'slate',
    name: 'Cool Slate',
    colors: {
      primary: '#64748b',
      secondary: '#475569',
      accent: '#94a3b8',
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#1f2937',
      textSecondary: '#6b7280',
      border: '#e2e8f0'
    }
  },
  {
    id: 'rose',
    name: 'Romantic Rose',
    colors: {
      primary: '#f43f5e',
      secondary: '#e11d48',
      accent: '#fb7185',
      background: '#ffffff',
      surface: '#fff1f2',
      text: '#1f2937',
      textSecondary: '#6b7280',
      border: '#fda4af'
    }
  },
  {
    id: 'sky',
    name: 'Sky Blue',
    colors: {
      primary: '#0ea5e9',
      secondary: '#0284c7',
      accent: '#38bdf8',
      background: '#ffffff',
      surface: '#f0f9ff',
      text: '#1f2937',
      textSecondary: '#6b7280',
      border: '#7dd3fc'
    }
  },
  {
    id: 'fuchsia',
    name: 'Neon Fuchsia',
    colors: {
      primary: '#d946ef',
      secondary: '#c026d3',
      accent: '#e879f9',
      background: '#ffffff',
      surface: '#fdf4ff',
      text: '#1f2937',
      textSecondary: '#6b7280',
      border: '#f0abfc'
    }
  },
  {
    id: 'darkPurple',
    name: 'Dark Purple',
    colors: {
      primary: '#a855f7',
      secondary: '#9333ea',
      accent: '#c084fc',
      background: '#0c0a09',
      surface: '#1c1917',
      text: '#f5f5f4',
      textSecondary: '#a8a29e',
      border: '#44403c'
    }
  },
  {
    id: 'darkGreen',
    name: 'Dark Forest',
    colors: {
      primary: '#22c55e',
      secondary: '#16a34a',
      accent: '#4ade80',
      background: '#0c0a09',
      surface: '#1c1917',
      text: '#f5f5f4',
      textSecondary: '#a8a29e',
      border: '#44403c'
    }
  },
  {
    id: 'darkRed',
    name: 'Dark Crimson',
    colors: {
      primary: '#f87171',
      secondary: '#ef4444',
      accent: '#fca5a5',
      background: '#0c0a09',
      surface: '#1c1917',
      text: '#f5f5f4',
      textSecondary: '#a8a29e',
      border: '#44403c'
    }
  },
  {
    id: 'midnight',
    name: 'Midnight Blue',
    colors: {
      primary: '#60a5fa',
      secondary: '#3b82f6',
      accent: '#93c5fd',
      background: '#030712',
      surface: '#111827',
      text: '#f9fafb',
      textSecondary: '#9ca3af',
      border: '#374151'
    }
  },
  {
    id: 'neon',
    name: 'Neon Glow',
    colors: {
      primary: '#00ff88',
      secondary: '#00cc6a',
      accent: '#44ffaa',
      background: '#0a0a0a',
      surface: '#1a1a1a',
      text: '#ffffff',
      textSecondary: '#cccccc',
      border: '#333333'
    }
  },
  {
    id: 'sunset',
    name: 'Tropical Sunset',
    colors: {
      primary: '#ff6b35',
      secondary: '#ff5722',
      accent: '#ff8a50',
      background: '#fff8f5',
      surface: '#fff0e6',
      text: '#2d1b69',
      textSecondary: '#5a4fcf',
      border: '#ffcc99'
    }
  }
];
