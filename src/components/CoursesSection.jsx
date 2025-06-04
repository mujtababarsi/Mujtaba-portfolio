import React from 'react';

// CoursesSection component lists the courses the user has taken.
export default function CoursesSection() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-semibold mb-4">Courses</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Introduction to Bioinformatics</li>
        <li>Basic Pharmaceutical Marketing Skills</li>
        <li>Total Quality Management</li>
        <li>Drug Information Resources</li>
        <li>Kaggle Python Course</li>
        <li>Bioinformatics for Biologist: Linux, BASH Scripting, AND R</li>
      </ul>
    </section>
  );
}
