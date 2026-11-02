import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiPython, SiLaravel, SiPhp, SiJavascript, SiMysql, SiSqlite } from "react-icons/si";  

export const DATA = {
  name: "Otto Santoso Putro",
  initials: "OSP",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "IT Graduate & Full-Stack Web Developer. I love building practical software solutions and fixing things from the terminal up. I have a passion for learning new technologies and applying them to real-world problems. I am currently seeking opportunities to contribute my skills and grow as a developer.",
  summary:
    "I recently graduated with a Bachelor's in Informatics Engineering (Teknik Informatika) from Universitas Duta Bangsa Surakarta with a 3.79 GPA. My background is rooted in building efficient web applications; I built an accommodation recommendation system using Knowledge-Based Filtering and Laravel for my undergraduate thesis. I have practical experience from a web development internship where I focused on Laravel, bug fixing, and implementing system features. I enjoy working directly with the terminal to resolve dependency issues and build lightweight applications using Livewire and SQLite.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Python", icon: SiPython },
    { name: "Laravel", icon: SiLaravel },
    { name: "PHP", icon: SiPhp },
    { name: "JavaScript", icon: SiJavascript },
    { name: "MySQL", icon: SiMysql },
    { name: "SQLite", icon: SiSqlite },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ottosantoso11@gmail.com",
    tel: "+6285713123391",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/reinzzy",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ottosantoso",
        icon: Icons.linkedin,

        navbar: true,
      },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/6285713123391",
        icon: Icons.whatsapp,

        navbar: true,
      },
      Strava: {
        name: "Strava",
        url: "https://www.strava.com/athletes/85803550",
        icon: Icons.strava,
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

  work: [
    {
      company: "PT Matahari Departement Store Tbk",
      href: "https://matahari.com/",
      badges: [],
      location: "Surakarta",
      title: "Sales Associate",
      logoUrl: "/atomic.png",
      start: "Feb 2026",
      end: "Apr 2026",
      description:
        "Served as a part-time retail sales staff member dedicated to the Lois Jeans counter. Actively engaged with store visitors to deliver excellent customer service, managed product inventory on the floor, and maintained visual displays to optimize the shopping experience and support daily sales targets.",
    },
    {
      company: "AKUN.tech",
      badges: [],
      href: "https://www.akun.tech/",
      location: "Surakarta",
      title: "Full-Stack Web Developer Intern",
      logoUrl: "/akuntech.png",
      start: "Agt 2025",
      end: "Dec 2025",
      description:
        "During my web development internship, I actively contributed to the development cycle of web applications using the Laravel framework. My responsibilities included designing and implementing core system features, diagnosing and resolving complex software bugs to enhance system stability, and optimizing overall performance. Furthermore, I engaged directly with clients to gather requirements, translating their business needs into functional technical solutions, and ensuring the final product fully aligned with their expectations.",
    },
    {
      company: "SPX Express",
      href: "https://spx.co.id/id",
      badges: [],
      location: "Surakarta",
      title: "Operator Freelance",
      logoUrl: "/spx.png",
      start: "Sep 2024",
      end: "Dec 2024",
      description:
        "Worked as a freelance sorting operator responsible for processing and organizing high volumes of inbound and outbound packages. Handled barcode scanning, accurately sorted parcels based on delivery routes, and maintained operational efficiency to meet strict daily dispatch deadlines in a fast-paced warehouse environment.",
    },
  ],
  education: [
    {
      school: "Duta Bangsa University Surakarta",
      href: "https://udb.ac.id/",
      degree: "Bachelor of Informatics Engineering - GPA: 3.79/4.00",
      logoUrl: "/udb.png",
      start: "2022",
      end: "2026",
    }
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],  
} as const;
