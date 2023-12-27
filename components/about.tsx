"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="font-medium">
        <p className="mb-3">
          Transitioning from roles at Northern Response LTD in Canada and No-BS
          Marketplace in Australia, specializing in SEO and content, I pivoted
          towards my passion for coding.
        </p>
        <p className="mb-3">
          I made sure to thoroughly learn the fundamentals of web development
          and invested in courses from Coursera, Meta's Front-End Developmental
          Course, and Scrimba's Front-End Roadmap Course.
        </p>
        <p className="mb-3">
          Embracing this shift, I immersed myself in full-time code studies and
          secured freelance gigs. Notably, I'm currently immersed in crafting a
          pivotal job board/onboarding web app for HLA, a prominent Chinese
          clothing brand, primarily utilizing React, Next.js, and Tailwind CSS.
          I also use other external libraries that help with the developer
          experience as well as provide better performance for User Experience.
        </p>
        <p className="mb-3">
          My commitment to growth extends beyond projects. I avidly follow
          programming newsletters and videos, particularly in React,
          continuously adapting to its evolving landscape.
        </p>
        <p className="mb-3">
          Beyond coding, I enjoy gaming, focus on overall well-being through
          workouts, and experiment with easy-to-make tasty recipes for my
          family.
        </p>
      </div>
    </motion.section>
  );
}
