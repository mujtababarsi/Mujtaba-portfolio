import React from 'react';

// SkillsSection component displays a list of bioinformatics tools and skills.
// It accepts 'isDarkMode' to adjust styling and 'skills' as an array of strings to display.
export default function SkillsSection({ isDarkMode, skills }) {
  // Ensure skills is an array before mapping over it to prevent errors
  const skillsToDisplay = Array.isArray(skills) ? skills : [];

  return (
    <section className="h-[600px] relative">
      <div className="flex items-center justify-center h-full">
        <div className={`p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
          <h3 className="text-2xl font-semibold mb-4 text-center">Bioinformatics Tools & Skills</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {skillsToDisplay.map((skill, index) => (
              <span key={index} className={`px-4 py-2 rounded-full ${isDarkMode ? 'bg-cyan-700 text-white' : 'bg-cyan-200 text-cyan-800'} text-sm font-medium`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
