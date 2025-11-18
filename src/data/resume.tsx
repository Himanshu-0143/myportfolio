import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Himanshu Chauhan",
  initials: "HC",
  url: "https://himanshu-chauhan.vercel.app",
  location: "Lucknow, Uttar Pradesh",
  locationLink: "https://www.google.com/maps/place/lucknow",
  description:
    "Fullstack Developer. I love building things and helping people. Very active on LinkedIn.",
  summary: `Hey! I’m Himanshu, a passionate Full Stack Developer who loves building things that live on the internet. I create dynamic, scalable applications using modern web technologies and enjoy taking a project from zero to deployment. Whether it’s writing clean UI code or optimizing databases and APIs — I love doing it all. I believe great products are a blend of performance, creativity, and good user experience. Always learning. Always improving. Always building something cool! 🚀`,

  avatarUrl: "/my.jpg.jpg",
  resumeUrl: "https://drive.google.com/file/d/1k7DR_D3MRxErg0l89V4O6k4tzERP2B9M/view?usp=sharing",
  work: [
    {
      company: "Freelance Projects",
      title: "Full Stack Developer (Freelance)",
      start: "Jan 2024",
      end: null,
      description: "Built a fully functional full-stack website with online order creation and a secure payment gateway for Life-Biotech, a pharmaceutical manufacturing brand. Developed using modern web technologies with focus on security and user experience.",
      logoUrl: "",
      href: "https://lifebiotech.in",
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
    email: "himansingh8511@gmail.com",
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
      title: "Life-Biotech",
      href: "https://lifebiotech.in",
      dates: "2025",
      active: true,
      description:
        "A full-stack website built for Life-Biotech, a pharmaceutical manufacturing brand — includes a secure and smart login authentication system.",
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Vercel",
      ],
      links: [
        {
          type: "lifebiotech.in",
          href: "https://lifebiotech.in",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "View Source",
          href: "https://github.com/Himanshu-0143/lifebiotech.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/lifebiotech.png",
      video: undefined,
    },
    {
      title: "Quite-Connect",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "Quite-Connect is a safe space for anonymous expression. Students and employees can share their feelings, release stress, and support each other — making campus and workplace environments more positive and healthy",
      technologies: [
        "Javascript",
        "Tailwind CSS",
        "HTML",
      ],
      links: [ 
        {
          type: "View Source",
          href: "https://github.com/Himanshu-0143/Quite-Connect.git",
          icon: <Icons.github className="size-3" />,
        },
        
      ],
      image: "/quite.png",
      video: undefined,
    },
    
    {
      title: "Interactive Calendar App",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "Built a full-stack calendar app supporting event creation, editing, and deletion. Integrated persistent MySQL storage and built robust PHP backend APIs. Designed minimal UI using Tailwind CSS with real-time updates.",
      technologies: [
        "PHP",
        "Tailwind CSS",
        "MySQL",
      ],
      links: [ 
        {
          type: "View Source",
          href: "https://github.com/Himanshu-0143/php_project.git",
          icon: <Icons.github className="size-3" />,
        },
        
      ],
      image: "",
      video: undefined,
    },
    {
      title: "Java Chat Application",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "Engineered a multi-threaded real-time chat app using Java Sockets and Swing GUI. Implemented secure client-server communication and user-friendly message UI with connection status indicators.",
      technologies: [
        "Java",
        "Swing",
        "Socket Programming",
      ],
      links: [
        {
          type: "View Source",
          href: "https://github.com/Himanshu-0143/ChatApplication.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: undefined,
    },
    {
      title: "Online Food Ordering System",
      href: "#",
      dates: "2023",
      active: true,
      description:
        " Developed a responsive web app for online food ordering featuring real-time dynamic cart, menu filters, and order summary. Focused on smooth UX using JavaScript and DOM optimization. Mobile-first and performance-optimized UI.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
      links: [
        {
          type: "View Source",
          href: "https://github.com/Himanshu-0143/online_food_and_delivery.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: undefined,
    },
    
  ],
  
    
} as const;
