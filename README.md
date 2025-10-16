# 🌟 Shawn Rodrigues - Portfolio Website

A modern, responsive portfolio website showcasing my journey as a Computer Engineering student, content creator, and technology enthusiast.

![Portfolio Preview](https://img.shields.io/badge/Live-Portfolio-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-blue?style=for-the-badge&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5.4.2-purple?style=for-the-badge&logo=vite)

## 🚀 About This Project

This portfolio website represents my professional journey, technical skills, and creative projects. Built with modern web technologies, it features a dynamic theme system, interactive components, and comprehensive sections showcasing my expertise in computer engineering, cybersecurity, and content creation.

## ✨ Features

### 🎨 Dynamic Theme System
- **24+ Custom Themes**: Choose from a wide variety of color schemes including dark mode, neon, sunset, and more
- **Real-time Theme Switching**: Instantly preview different themes with smooth transitions
- **Theme-aware Components**: All components adapt to the selected theme seamlessly

### 📱 Fully Responsive Design
- **Mobile-first Approach**: Optimized for all device sizes from phones to desktops
- **Smooth Animations**: Engaging hover effects and transitions throughout
- **Modern UI/UX**: Clean, professional design with attention to detail

### 🏗️ Comprehensive Sections

#### 🏠 Hero Section
- Professional introduction with animated profile picture
- Dynamic title and bio with theme integration
- Social media links (GitHub, LinkedIn, Discord)

#### 🎓 Education
- Academic journey from SSC to Bachelor's degree
- Detailed descriptions of educational achievements
- Timeline format with institution details

#### 🏆 Certifications
- Professional certifications in cybersecurity (Fortinet)
- Industry training programs and specialized courses
- Credential IDs and verification details

#### 💼 Experience
- Professional work history and achievements
- Role descriptions with quantified accomplishments
- Company details and project highlights

#### 🛠️ Skills
- **Custom Themed Bullet Points**: Skills display with theme-aware styling
- **Categorized Skills**: Organized by technology areas (Cloud, Networking, Cybersecurity, etc.)
- **Proficiency Indicators**: Visual representation of skill levels

#### 🚀 Projects
- **Featured Projects**: Showcasing key development work
- **Promply V2**: Intelligent search and extraction program for images and PDFs
- **Goan Traders**: Full-stack e-commerce platform for building materials
- **Live Demo Links**: Direct access to deployed projects

#### 🎮 Extracurricular Activities
- **YouTube Channel Integration**: "Coconut Gamer" content creation
  - Interactive video cards with play buttons
  - Subscriber count and view statistics
  - Featured video thumbnails with click-to-watch functionality
- **ZAP-Hosting Partnership**: Official channel partnership showcase
  - **Custom Logo Support**: Dynamic logo loading from URLs
  - Green-themed partnership branding
  - Achievement highlights and collaboration details

### 🎯 Special Features
- **Interactive Video Cards**: Clickable YouTube video previews
- **Partnership Showcases**: Professional business relationships with branded styling
- **Smooth Scroll Navigation**: Seamless section transitions
- **Loading Animations**: Engaging user experience elements

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3.1**: Modern component-based architecture
- **TypeScript 5.5.3**: Type-safe development with enhanced IDE support
- **Vite 5.4.2**: Fast build tool and development server

### Styling & UI
- **Tailwind CSS 3.4.1**: Utility-first CSS framework
- **Custom CSS Variables**: Dynamic theme implementation
- **Lucide React**: Modern icon library with 300+ icons
- **PostCSS & Autoprefixer**: Enhanced CSS processing

### Development Tools
- **ESLint**: Code quality and consistency
- **TypeScript ESLint**: Advanced TypeScript linting
- **React Hooks ESLint**: React best practices enforcement

## 📂 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation and theme selector
│   ├── Hero.tsx        # Main introduction section
│   ├── Education.tsx   # Educational background
│   ├── Experience.tsx  # Professional experience
│   ├── Skills.tsx      # Technical skills with themed bullets
│   ├── Projects.tsx    # Featured projects showcase
│   ├── Certifications.tsx    # Professional certifications
│   ├── ExtracurricularActivities.tsx  # YouTube & partnerships
│   ├── Footer.tsx      # Contact information
│   └── ThemeSelector.tsx      # Theme switching component
├── contexts/           # React contexts
│   ├── ThemeContext.tsx       # Theme management
│   └── FestiveContext.tsx     # Special animations
├── data/              # Data management
│   └── portfolioData.ts       # All portfolio content
├── types/             # TypeScript definitions
│   └── portfolio.ts   # Interface definitions
└── styles/            # CSS files
    ├── theme.css      # Theme system variables
    ├── responsive.css # Responsive design
    └── header.css     # Navigation styling
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shawnrodrigues/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview

# Type checking
npm run typecheck

# Lint code
npm run lint
```

## 📊 Portfolio Highlights

### Technical Achievements
- **Fortinet Certified** in Cybersecurity (FCF & FCA)
- **Full-stack Development** expertise with modern frameworks
- **Cloud Platform** experience (AWS, Azure, Google Cloud)
- **System Administration** and virtualization skills

### Content Creation
- **YouTube Channel**: "Coconut Gamer" with 1K+ subscribers
- **50K+ Total Views** across educational and gaming content
- **Technical Tutorials** on server management and gaming

### Business Partnerships
- **ZAP-Hosting Official Partner**: Europe's leading game server provider
- **Community Engagement** with global gaming audience
- **Technical Content Creation** for hosting solutions

## 🎨 Customization

### Adding Your Own Content

1. **Update Personal Information**
   ```typescript
   // src/data/portfolioData.ts
   export const profile: Profile = {
     name: 'Your Name',
     title: 'Your Title',
     bio: 'Your bio...',
     // ... other details
   };
   ```

2. **Add Your Projects**
   ```typescript
   export const projects: Project[] = [
     {
       id: '1',
       title: 'Your Project',
       description: 'Project description...',
       technologies: ['React', 'TypeScript'],
       // ... other fields
     }
   ];
   ```

3. **Customize Themes**
   ```typescript
   // Add new themes to the themes array
   export const themes: Theme[] = [
     {
       id: 'your-theme',
       name: 'Your Theme Name',
       colors: {
         primary: '#your-color',
         // ... other colors
       }
     }
   ];
   ```

### Adding Partnership Logos
```typescript
// In your partnership details
details: {
  company: 'Company Name',
  logoUrl: 'https://your-logo-url.com/logo.png',
  // ... other details
}
```

## 🌐 Deployment

This project can be deployed to various platforms:

- **Netlify**: Connect GitHub repo for automatic deployments
- **Vercel**: Zero-config deployment with GitHub integration
- **GitHub Pages**: Free hosting with GitHub Actions
- **Firebase Hosting**: Google's hosting platform

## 📞 Contact

- **Email**: shawn.rodrigues3308@gmail.com
- **LinkedIn**: [linkedin.com/in/shawn3308](https://www.linkedin.com/in/shawn3308/)
- **GitHub**: [github.com/shawnrodrigues](https://github.com/shawnrodrigues)
- **Discord**: coconutplayz

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Lucide React** for the beautiful icon library
- **Tailwind CSS** for the utility-first styling approach
- **Vite** for the fast development experience
- **ZAP-Hosting** for the partnership opportunity
- **Fortinet** for the cybersecurity certifications

---

⭐ **Star this repository if you found it helpful!**

*Built with ❤️ by Shawn Rodrigues*