import React from 'react';

// AboutSection component displays information about the user.
// It includes an 'About Me' paragraph and a 'Why I Became Interested in Bioinformatics' sub-section.
export default function AboutSection() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
      <p>
        I'm a self-taught bioinformatics learner passionate about exploring biological data through code and computation.
        I focus on single-cell and multi-omics analysis, combining programming, statistics, and data mining to extract
        meaningful insights from complex datasets. Constantly exploring new tools and staying up to date with advances
        in computational biology, I enjoy building projects that bridge biology and data science.
      </p>
      <p className="mt-4">
        I've worked with tools like Python, R, Scanpy, and Linux/Bash scripting, and I'm familiar with analyzing
        real-world datasets from single-cell and multi-omics experiments. My portfolio reflects my learning journey,
        with projects that demonstrate both technical skills and scientific curiosity.
      </p>

      {/* ==== Why I Became Interested in Bioinformatics Sub-section ==== */}
      <h3 className="text-2xl font-semibold mt-8 mb-4">Why I Became Interested in Bioinformatics</h3>
      <p>
        With several years of experience in pharmaceuticals, I had already developed a strong passion for technology and data analysis.
        As I explored ways to apply this interest in a meaningful scientific context, I discovered that bioinformatics offered the perfect opportunity
        to integrate my technical skills with my educational background in pharmacy. It allowed me to approach health science from a new, data-driven perspective.
        To pursue this path, I began self-learning programming languages like Python and R, and expanded my knowledge through advanced courses and hands-on projects.
        Working with real datasets and sharing my work has only deepened my enthusiasm to contribute to innovative research in drug discovery and computational biology.
      </p>
    </section>
  );
}
