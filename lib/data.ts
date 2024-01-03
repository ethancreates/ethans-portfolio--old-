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
      "In my role as an Amazon Account Manager at Northern Response LTD in Ontario, I consistently handled significant weekly and monthly ad budgets, often reaching figures in the five- to six-digit range. Through rigorous data analysis and ongoing research, I consistently improved our ad strategies, earning client trust by delivering tangible results. I applied an analytical approach honed through programming, focusing on continual learning and iterative practice. My responsibilities spanned overseeing various Amazon stores in the US, Canada, and Mexico, optimizing the UI/UX & SEO of the company's Shopify website, as well as their landing page. I was also tasked to conduct regular audits to enhance sales and rankings.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2020 - October 2021",
  },
  {
    title: "Premium SEO Content Writer",
    location: "Remote (South Geelong, Australia)",
    description:
      "During my tenure at No-BS Marketplace, I actively engaged in advancing SEO practices through ongoing research and the implementation of varied techniques aimed at elevating rankings and augmenting content visibility. Additionally, I fostered a collaborative environment by willingly contributing extra articles during peak demand, orchestrating seamless coordination across departments to facilitate smoother content production. I was also asked to provide inputs regarding the company's landing page as well as the companies web platform for writers, to further improve the UX. Figma definitely helped me showcase several solutions and accomplish said changes with Tailwind CSS. Mirroring my programming ethos, I prioritized continuous learning, hands-on application, and iterative practice, leveraging these principles to enhance skills and consistently achieve outstanding outcomes.",
    icon: React.createElement(CgWorkAlt),
    date: "October 2021 - December 2022",
  },
  {
    title: "Graduated Meta Front-End Developer Professional Certificate",
    location: "Coursera",
    description:
      "I found the experience of obtaining certificates from Coursera and Meta to be highly valuable. The Meta Front-End Developer Professional Certificate enabled me to connect various concepts I had previously studied and worked with, boosting my confidence to initiate personal projects and pursue full-stack positions.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Graduated Scrimba Frontend Developer Career Path Course",
    location: "Scrimba",
    description:
      "With over 70 hours of top-notch tutorials, hundreds of coding challenges, and dozens of real-world projects, this career path provided me comprehensive and hands-on training. It solidified my initial learnings and learned more about Advanced React and Typescript",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full-Stack Developer for HLA Careers Philippines",
    location: "Freelance - Remote",
    description:
      "I spearheaded the development of a job board web application tailored for HLA, a leading Chinese clothing brand, with a strong emphasis on user-centric design. This involved incorporating essential features like a job board, application forms, tracker, and dashboard to optimize user experience. Leveraging a robust tech stack comprising React, Next.js, TypeScript, Tailwind, Framer Motion for the front-end, and Prisma with Supabase's postgres for the backend, I ensured a powerful and seamless platform. Additionally, I remained dedicated to continual learning and adaptation, staying abreast of React's evolving landscape by actively engaging with programming newsletters and videos to enhance my skills and stay updated with the latest trends and advancements.",
    icon: React.createElement(FaReact),
    date: "November 2023 - Present",
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
