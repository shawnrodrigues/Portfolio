import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import ExtracurricularActivities from './components/ExtracurricularActivities';
import Footer from './components/Footer';
import { profile, education, certifications, projects, skills, experience, extracurricularActivities } from './data/portfolioData';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden safe-area-inset" data-active-section={activeSection}>
      <Header profile={profile} onNavigate={handleNavigate} />
      <main>
        <Hero profile={profile} onNavigate={handleNavigate} />
        <Experience experiences={experience} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Education education={education} />
        <Certifications certifications={certifications} />
        <ExtracurricularActivities activities={extracurricularActivities} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
