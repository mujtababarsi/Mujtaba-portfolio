import React, { useState, useEffect } from 'react';
import WebGLBackground from './components/WebGLBackground';
import CustomCursor from './components/CustomCursor';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import CoursesSection from './components/CoursesSection';
import ProjectsSection from './components/ProjectsSection';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`relative min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <CustomCursor isDarkMode={isDarkMode} />
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-4 right-4 z-50 px-4 py-2 rounded bg-cyan-500 hover:bg-pink-500 text-white"
      >
        Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>

      <section className="h-screen relative">
        <WebGLBackground isDarkMode={isDarkMode} />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold">Mohamed Elmugtaba</h1>
          <p className="text-xl mt-2 text-gray-400">Bioinformatician</p>
          <p className="text-lg text-gray-400">Mainly focus in single cell analysis and spatial Transcriptomic</p>
        </div>
      </section>

      {/* Render all sections from components folder */}
      <AboutSection />
      <SkillsSection isDarkMode={isDarkMode} skills={[
        'Python', 'Linux', 'SCARF',
        'RStudio', 'Scanpy', 'Jupyter'
      ]} />
      <EducationSection />
      <CoursesSection />
      <ProjectsSection />
    </div>
  );
}
