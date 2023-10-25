// Import assets social media
import instagram from "/icons/social-media/instagram.svg";
import medium from "/icons/social-media/medium.webp";
import linkedin from "/icons/social-media/linkedin.webp";
import github from "/icons/social-media/github.webp";
import email from "/icons/social-media/email.webp";

// Import assets projects and skills
import kopikuy from "/images/kopikuy.png";
import KYCbangbeli from "/images/KYC.jpg";
import impactPalu from "/images/impact-palu.png";
import snResidence from "/images/sn-residence.png";

import logoprakerja from "/icons/prakerja-logo.png";
import logoKYC from "/icons/logobangbeli.png";
import logoprofile from "/icons/logo-impact-palu.png";
import logoSnResidence from "/icons/logo-sn-residence.png";

import nextjs from "/icons/tech-stack/nextjs.svg";
import nextjsDark from "/icons/tech-stack/nextjs-dark.svg";
import react from "/icons/tech-stack/react.svg";
import typescript from "/icons/tech-stack/typescript.svg";
import javascript from "/icons/tech-stack/javascript.svg";
import redux from "/icons/tech-stack/redux.svg";
import graphql from "/icons/tech-stack/graphql.svg";
import nodejs from "/icons/tech-stack/nodejs.svg";
import tailwind from "/icons/tech-stack/tailwind.svg";
import antdesign from "/icons/tech-stack/antdesign.svg";
import mongodb from "/icons/tech-stack/mongodb.svg";
import postgresql from "/icons/tech-stack/postgresql.svg";
import firebase from "/icons/tech-stack/firebase.svg";
import vite from "/icons/tech-stack/vite.svg";
import express from "/icons/tech-stack/express.svg";
import css from "/icons/tech-stack/css.svg";
import html from "/icons/tech-stack/html.svg";
import bootstrap5 from "/icons/tech-stack/bootstrap5.svg";

// import assets experience
import prakerja from "/icons/company-logo/prakerja.svg";
import kalla from "/icons/company-logo/kalla.svg";
import kodingna from "/icons/company-logo/kodingna.svg";
import bangbeli from "/icons/company-logo/bangbeli.svg";

import pattern1 from "/images/patterns/pattern1.svg";
import pattern2 from "/images/patterns/pattern2.svg";
import pattern3 from "/images/patterns/pattern3.svg";
import pattern4 from "/images/patterns/pattern4.svg";

export const dataNavbar: Navbar[] = [
  {
    id: 0,
    navigate: "Profile",
    navigate_url: "profile",
    offset: -100,
  },
  {
    id: 1,
    navigate: "Projects",
    navigate_url: "projects",
    offset: -105,
  },
  {
    id: 2,
    navigate: "Experience",
    navigate_url: "experience",
    offset: -50,
  },
  {
    id: 3,
    navigate: "Contact",
    navigate_url: "contact",
    offset: 0,
  },
];

export const dataLogoSocialMedia: LogoSocialMedia[] = [
  {
    id: 0,
    logo: linkedin,
    navigate: "https://www.linkedin.com/in/aryadians/",
  },
  {
    id: 1,
    logo: medium,
    navigate: "https://medium.com/@aryadian003",
  },
  {
    id: 2,
    logo: github,
    navigate: "https://github.com/aryadians",
  },
  {
    id: 3,
    logo: email,
    navigate: "mailto:aryadian003@gmail.com",
  },
];

export const dataProjectss: Projects[] = [
  {
    id: 0,
    img_url: kopikuy,
    logo: logoprakerja,
    type: "Company Profile •",
    tech_stack_logo: [html, bootstrap5, css],
    navigate_url: "/",
  },
  {
    id: 1,
    img_url: KYCbangbeli,
    logo: logoKYC,
    type: "Verified Page •",
    tech_stack_logo: [react, typescript, tailwind],
    navigate_url: "/",
  },
  // {
  //   id: 2,
  //   img_url: impactPalu,
  //   logo: logoimpactPalu,
  //   type: "Company Profile •",
  //   tech_stack_logo: [react, nextjsDark, tailwind],
  //   navigate_url: "https://impactpalu-fe.vercel.app",
  // },
  // {
  //   id: 3,
  //   img_url: snResidence,
  //   logo: logoSnResidence,
  //   type: "Company Profile •",
  //   tech_stack_logo: [react, tailwind],
  //   navigate_url: "https://sn-residence-dev.vercel.app",
  // },
];

export const dataSkills: string[] = [
  nextjs,
  react,
  typescript,
  javascript,
  redux,
  graphql,
  nodejs,
  tailwind,
  antdesign,
  bootstrap5,
  css,
  html,
];

export const dataExperience: Experience[] = [
  {
    id: 0,
    logo_url: prakerja,
    pattern: pattern1,
    name: "Prakerja",
    description: "Riki Course-Kopi Kuy",
    date: "Jan 2023 - Jan 2023",
    position: "Frontend Dev",
    responsibilites: [
      "Implementasi and Live Mentoring from Riki-Course.",
      "Do task each week .",
      "Build, maintain, develop web Kopi-Kuy using Bootstrap 5.",
      "Learn to write clean code, testable code, and implement agile methodologies.",
    ],
    first_color: "#0C3342",
    second_color: "#054C5B",
    desc_color: "#B6EDF8",
    position_color: "#002D3E",
    border_color: "#329CA9",
  },
  // {
  //   id: 1,
  //   logo_url: kalla,
  //   pattern: pattern2,
  //   name: "PT Hadji Kalla",
  //   description: "@kallagroup",
  //   date: "Aug 2022 - Dec 2022",
  //   position: "Web Developer Intern",
  //   responsibilites: [
  //     "Develop a WhatsApp gateway that enables the company to broadcast messages to customers using Next.js, Tailwind, and Baileys.",
  //     "Collaborate with backend developers to integrate the functionality and consume APIs.",
  //     "Build a web app to ensure the web will be responsive user interface and user-friendly.",
  //   ],
  //   first_color: "#01271C",
  //   second_color: "#08573E",
  //   desc_color: "#C6F8B1",
  //   position_color: "#033424",
  //   border_color: "#10AA7A",
  // },
  // {
  //   id: 2,
  //   logo_url: kodingna,
  //   pattern: pattern3,
  //   name: "Kodingna",
  //   description: "@Halokodingna",
  //   date: "Jun 2022 - Sep 2022",
  //   position: "Frontend Web Developer Intern",
  //   responsibilites: [
  //     "Collaborate with the team to understand project requirements and design specifications for the landing page.",
  //     "Write clean and maintainable code following best practices and coding standards.",
  //     "Develop the landing page using React and Tailwind.",
  //   ],
  //   first_color: "#020C12",
  //   second_color: "#022E4A",
  //   desc_color: "#BEE7FB",
  //   position_color: "#021826",
  //   border_color: "#1994A4",
  // },
  {
    id: 3,
    logo_url: bangbeli,
    pattern: pattern4,
    name: "BangBeli ",
    description: "StarUp FinTech",
    date: "Oct 2022 - Jan 2023",
    position: "Frontend Dev",
    responsibilites: [
      "Slicing and Build page Know Your Customer to our team. Deploy to Cloud Function and can be used or consumed by Mobile Development Path.",
      "Deploy Flask App from Machine Learning Path using Docker and then deploy to Cloud Run.",
      "Develop our website for our team capstone project.",
      "Learn about cloud fundamentals and Softskills.",
    ],
    first_color: "#2E0D17",
    second_color: "#390916",
    desc_color: "#F9B6BE",
    position_color: "#18040A",
    border_color: "#7D2038",
  },
];
