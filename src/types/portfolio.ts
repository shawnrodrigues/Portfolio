export interface Profile {
  name: string;
  title: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  discord?: string;
  avatarUrl: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string | null;
  gpa?: string;
  description?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  proficiency: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievements: string[];
}

export interface YouTubeChannel {
  id: string;
  channelName: string;
  channelUrl: string;
  description: string;
  logoUrl?: string;
  subscriberCount?: string;
  totalViews?: string;
  videoCount?: string;
  featuredVideos: {
    id: string;
    title: string;
    description: string;
    videoUrl: string;
    thumbnailUrl?: string;
    views?: string;
    publishedDate: string;
  }[];
}

export interface ExtracurricularActivity {
  id: string;
  title: string;
  type: 'youtube' | 'blog' | 'volunteer' | 'organization' | 'other';
  description: string;
  startDate?: string;
  endDate?: string | null;
  status: 'active' | 'completed';
  details: YouTubeChannel | any; // Can be extended for other activity types
  achievements?: string[];
}
