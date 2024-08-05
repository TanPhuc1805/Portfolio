import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { AboutSection } from "./AboutSection";
import { SkillsSection } from "./SkillsSection";
import { ContactSection } from "./ContactSection";
import { ProjectsSection } from "./ProjectsSection";
import { BlogSection } from "./BlogSection";
import { ExperienceSection } from "./ExperienceSection";

export const Interface = () => {
  return (
    <>
      <div className="flex flex-col items-center w-screen">
        <AboutSection />
        
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <BlogSection />
        <ContactSection />
      </div>
    </>
  );
};
