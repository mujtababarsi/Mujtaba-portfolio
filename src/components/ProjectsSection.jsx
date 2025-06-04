import React from 'react';

// ProjectsSection component displays a list of the user's projects with links to GitHub.
export default function ProjectsSection() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-semibold mb-4">Projects</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-semibold">
            <a href="https://github.com/mujtababarsi/Covid-19-single-cell-analysis-Scanpy" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">
              Covid-19-single-cell-analysis-Scanpy
            </a>
          </h3>
          <p className="text-gray-300">Analysis of COVID-19 single-cell data using Scanpy.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">
            <a href="https://github.com/mujtababarsi/R-and-rstudio-Data-visualisation-with-ggplot2" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">
              R-and-rstudio-Data-visualisation-with-ggplot2
            </a>
          </h3>
          <p className="text-gray-300">Data visualization projects using R and ggplot2.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">
            <a href="https://github.com/mujtababarsi/spatial-omics" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">
              spatial-omics
            </a>
          </h3>
          <p className="text-gray-300">Projects related to spatial omics data analysis.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">
            <a href="https://github.com/mujtababarsi/Scarf-workflow-PBMC" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">
              Scarf-workflow-PBMC
            </a>
          </h3>
          <p className="text-gray-300">A workflow for PBMC analysis using Scarf.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">
            <a href="https://github.com/mujtababarsi/Scanpy-scRNA-seq-Analysis" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">
              Scanpy-scRNA-seq-Analysis
            </a>
          </h3>
          <p className="text-gray-300">Single-cell RNA sequencing analysis using Scanpy.</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">
            <a href="https://github.com/mujtababarsi/iris.datasets-Machine-Learning" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">
              iris.datasets-Machine-Learning
            </a>
          </h3>
          <p className="text-gray-300">Machine learning project using the Iris dataset.</p>
        </div>
      </div>
    </section>
  );
}
