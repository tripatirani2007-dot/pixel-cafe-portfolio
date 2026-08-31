import cCert from "@/assets/c-certificate.pdf.asset.json";
import cdpCert from "@/assets/cdp.docx.asset.json";
import infosys1 from "@/assets/infosys-1.doc.asset.json";
import infosys2 from "@/assets/infosys-2.doc.asset.json";

export const SECTIONS = [
  { id: "introduction", label: "Introduction" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export type SkillCategory = "Languages" | "Frameworks" | "Tools and Platforms" | "Soft Skills";

export const SKILL_CATEGORIES: SkillCategory[] = [
  "Languages",
  "Frameworks",
  "Tools and Platforms",
  "Soft Skills",
];

export const SKILLS: { name: string; category: SkillCategory }[] = [
  { name: "C++", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "C", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "HTML", category: "Frameworks" },
  { name: "CSS", category: "Frameworks" },
  { name: "Node.js", category: "Frameworks" },
  { name: "MySQL", category: "Tools and Platforms" },
  { name: "MongoDB", category: "Tools and Platforms" },
  { name: "Arduino IDE", category: "Tools and Platforms" },
  { name: "MQTT", category: "Tools and Platforms" },
  { name: "Wi-Fi", category: "Tools and Platforms" },
  { name: "Supabase", category: "Tools and Platforms" },
  { name: "Lovable", category: "Tools and Platforms" },
  { name: "Problem-solving", category: "Soft Skills" },
  { name: "Teamwork", category: "Soft Skills" },
  { name: "Project management", category: "Soft Skills" },
  { name: "Adaptability", category: "Soft Skills" },
];

export const CERTIFICATES = [
  {
    title: "Python Programming",
    issuer: "Infosys",
    date: "September 2025",
    file: infosys1.url,
    fileLabel: "View certificate",
  },
  {
    title: "Time Management",
    issuer: "Infosys",
    date: "December 2025",
    file: infosys2.url,
    fileLabel: "View certificate",
  },
  {
    title: "C Programming",
    issuer: "Neo Colab",
    date: "May 2025",
    file: cCert.url,
    fileLabel: "View certificate",
  },
  {
    title: "Community Development Program",
    issuer: "Government School",
    date: "June 2026",
    file: cdpCert.url,
    fileLabel: "View certificate",
  },
];

export const ACHIEVEMENTS = [
  "Actively participated in coding practice and problem-solving using C++ and Data Structures & Algorithms.",
  "Developed an IoT-Based Water Monitoring System as an academic project.",
  "Participated in technical and coding events and hackathon activities.",
  "Continuously improved programming skills through competitive programming and hands-on projects.",
  "Secured second position in a district-level drawing competition during Class 10.",
];

export const EDUCATION = [
  {
    school: "Lovely Professional University",
    degree: "Bachelor of Technology — Computer Science and Engineering",
    detail: "CGPA: 7.46",
    place: "Punjab, India",
    period: "Since August 2025",
  },
  {
    school: "Upgraded +2 High School, Indira Nagar, Lucknow",
    degree: "Intermediate",
    detail: "Percentage: 81.4%",
    place: "Lucknow, India",
    period: "April 2023 – March 2025",
  },
  {
    school: "Upgraded +2 High School, Bhitariya, Barabanki",
    degree: "Matriculation",
    detail: "Percentage: 91.6%",
    place: "Barabanki, India",
    period: "April 2022 – March 2023",
  },
];

export const CONTACT = {
  email: "tripitarani2007@gmail.com",
  phone: "+91-9905906913",
  linkedin: "https://www.linkedin.com/in/tripti722/",
  github: "https://github.com/tripitarani2007-dot",
};
