import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Himanshu Chauhan",
  initials: "HC",
  url: "https://himanshu-chauhan.vercel.app",
  location: "Lucknow, Uttar Pradesh",
  locationLink: "https://www.google.com/maps/place/lucknow",
  description:
    "Fullstack Developer. I love building things and helping people. Very active on Linkedin.",
  summary: `Hey! I’m Himanshu, a passionate Full Stack Developer who loves building things that live on the internet. I create dynamic, scalable applications using modern web technologies and enjoy taking a project from zero to deployment. Whether it’s writing clean UI code or optimizing databases and APIs — I love doing it all. I believe great products are a blend of performance, creativity, and good user experience. Always learning. Always improving. Always building something cool! 🚀`,

  avatarUrl: "/my.jpg.jpg",
  resumeUrl: "https://drive.google.com/file/d/1k7DR_D3MRxErg0l89V4O6k4tzERP2B9M/view?usp=sharing",
  work: [
    {
      company: "Freelance Projects",
      title: "Full Stack Developer (Freelance)",
      start: "Jan 2024",
      end: null,
      description: "Working on various freelance projects, building full-stack applications for clients using modern web technologies.",
      logoUrl: "",
      href: "#",
      badges: ["React", "Next.js", "Node.js", "TypeScript"],
    },
  ],
  education: [
    {
      school: "Lovely Professional University",
      degree: "Bachelor of Technology in Computer Science",
      start: "Aug 2023",
      end: "Present",
      logoUrl: "",
      href: "https://www.lpu.in",
    },
  ],
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "PHP",
    "Python",
    "Java",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "MySQL",
    "Socket Programming",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Himanshu-0143",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/chimanshu/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/idealist__one?s=21",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  projects: [
    {
      title: "Portfolio Website",
      href: "https://himanshu-chauhan.vercel.app",
      dates: "2025",
      active: true,
      description:
        "Designed and deployed a personal portfolio website showcasing skills, education, and projects using React, TypeScript, and Tailwind CSS. Deployed using Vercel with optimized Lighthouse scores.",
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://himanshu-chauhan.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: undefined,
    },
    {
      title: "Online Food Ordering System",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "**Coming Soon** - Developed a responsive web app for online food ordering featuring real-time dynamic cart, menu filters, and order summary. Focused on smooth UX using JavaScript and DOM optimization. Mobile-first and performance-optimized UI.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
      links: [],
      image: "",
      video: undefined,
    },
    {
      title: "Interactive Calendar App",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "**Coming Soon** - Built a full-stack calendar app supporting event creation, editing, and deletion. Integrated persistent MySQL storage and built robust PHP backend APIs. Designed minimal UI using Tailwind CSS with real-time updates.",
      technologies: [
        "PHP",
        "Tailwind CSS",
        "MySQL",
      ],
      links: [],
      image: "",
      video: undefined,
    },
    {
      title: "Java Chat Application",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "**Coming Soon** - Engineered a multi-threaded real-time chat app using Java Sockets and Swing GUI. Implemented secure client-server communication and user-friendly message UI with connection status indicators.",
      technologies: [
        "Java",
        "Swing",
        "Socket Programming",
      ],
      links: [],
      image: "",
      video: undefined,
    },
  ],
  
    
} as const;
