import React from "react";
import { Section } from "./Section";

export const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = React.useState(0);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex w-full h-full gap-8 items-end justify-center mb-12">
        <button
          className="hover:text-indigo-600 transition-colors text-zinc-50"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-5xl font-bold  text-zinc-50">Projects</h2>
        <button
          className="hover:text-indigo-600 transition-colors  text-zinc-50"
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
    </Section>
  );
};
