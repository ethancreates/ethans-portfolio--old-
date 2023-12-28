import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import hlacareers from "@/public/hla-careers.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Amazon Account Manager",
    location: "Remote (Ontario, Canada)",
    description:
      "I worked as an Amazon Account Manager for a year at Northern Response LTD. I managed their three Amazon stores namely Amazon US, Amazon Canada, and Amazon Mexico. I was also asked to list and work with their Shopify website at times. I mainly focused on providing value to my clients by optimizing all their listings, and consitently auditing for any possible detriments to our listings",
    icon: React.createElement(CgWorkAlt),
    date: "2021-2022",
  },
  {
    title: "Premium SEO Content Writer",
    location: "Remote (South Geelong, Australia)",
    description:
      "In No-BS Marketplace, most of the work was really laxed and monotonus given that our main job would be to write. I really learned how to be a team player by taking more articles when there's a queue, and consistently coordinating with different departments and people if necessary.",
    icon: React.createElement(CgWorkAlt),
    date: "2021-2022",
  },
  {
    title: "Graduated Meta's Coursera Course",
    location: "Remote",
    description:
      "I graduated after several months of studying. I learned about the fundamentals HTML, CSS, JavaScript, React, Next.js, Node.js, Git, and more.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Graduated Scrimba Front-End Developmental Roadmap Course",
    location: "Remote",
    description:
      "I solidified my initial learnings and learned more about Advanced React and Typescript",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Freelance Full-Stack Developer for HLA Careers Philippines",
    location: "Remote",
    description:
      "I was refferred by a old colleague to work on this freelance project. It's a job board web application for a popular Chinese clothing brand. Notable features include a job board, a job application form, a job application tracker, and a job application dashboard.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Freelance Full-Stack Developer",
    location: "Remote",
    description:
      "I'm now a full-stack react/next.js developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB/SQL/PostgreSQL. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "HLA Careers Philippines",
    description:
      "I'm currently working as a full-stack developer on this freelance project. It's a job board web application for a popular Chinese clothing brand. Notable features include a job board, a job application form, a job application tracker, and a job application dashboard.",
    tags: [
      "React",
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "Tailwind",
      "Prisma",
      "Kinde",
      "Vercel",
      "Github",
      "Figma",
      "Shadcn-UI",
      "React-Hook-Form",
    ],
    imageUrl: hlacareers,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Zustand",
  "React Query/Tanstack Query",
  "React-Hook-Form",
  "PostgreSQL",
  "NextAuth",
  "KindeAuth",
  "Shadcn-UI",
  "Framer Motion",
  "Figma",
] as const;
