import { Profile, Education, Certification, Project, Skill, Experience, YouTubeChannel, ExtracurricularActivity } from '../types/portfolio';

export const profile: Profile = {
  name: 'Shawn Ignace Rodrigues',
  title: 'Computer Engineer',
  bio: "I'm a Computer Engineering student passionate about technology, software development, and creative digital projects. With a strong foundation in programming, networking, and cybersecurity from my Diploma and B.E. in Computer Engineering, I love building tools that make digital workflows smarter, a program designed to make searching inside images and PDFs effortless. Alongside my technical journey, I also create content on YouTube under the name Coconut Gamer, where I explore gaming, tech reviews, and tutorials.",
  email: 'shawn.rodrigues3308@gmail.com',
  github: 'https://github.com/shawnrodrigues',
  linkedin: 'https://www.linkedin.com/in/shawn3308/',
  discord: 'coconutplayz', // Update with your actual Discord username
  avatarUrl: 'https://i.postimg.cc/MHt6fY3f/IMG-20250830-154946.jpg'
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

export const youtubeChannel: YouTubeChannel = {
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
      title: 'Tech Review: Latest Gaming Hardware',
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
  }
];
