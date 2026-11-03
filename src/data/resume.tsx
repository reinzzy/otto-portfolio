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
      title: "Sistem Rekomendasi Penginapan Surakarta",
      href: "https://github.com/reinzzy/rekomendasi-kbf", // Ganti dengan link repo aslimu
      dates: "Mar 2026 - Sep 2026",
      active: true,
      description:
        "My undergraduate thesis project at Universitas Duta Bangsa. I built a web-based accommodation recommendation system for Surakarta city implementing the Knowledge-Based Filtering method to provide accurate, user-specific lodging suggestions.",
      technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "XAMPP",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/reinzzy/rekomendasi-kbf", // Ganti link
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "", // Masukkan path gambar screenshot web (misal: "/projects/skripsi.png")
      video: "",
    },
    {
      title: "Internship Web Application",
      href: "https://github.com/Its-Nyxz/RSISimpeg", // Ganti dengan link repo aslimu
      dates: "2025 - 2026",
      active: true,
      description:
        "A web application developed during my Software Engineering internship. I was responsible for implementing core system features, fixing bugs, managing client interactions, and optimizing the database.",
      technologies: [
        "Laravel",
        "Livewire",
        "SQLite",
        "MySQL",
        "Laragon",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Its-Nyxz/RSISimpeg",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Weather App",
      href: "https://github.com/reinzzy/WeatherApp-Using-Laravel-React-Open-Meteo-API",
      dates: "2024",
      active: true,
      description:
        "A full-stack weather forecasting application that integrates the Open-Meteo API to fetch and display real-time weather data. Built with a Laravel backend and a reactive React frontend.",
      technologies: [
        "Laravel",
        "React",
        "PHP",
        "Open-Meteo API",
        "TailwindCSS"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/reinzzy/WeatherApp-Using-Laravel-React-Open-Meteo-API",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "K-Means Data Mining",
      href: "https://github.com/reinzzy/K-Means-Data-Mining",
      dates: "2024",
      active: true,
      description:
        "An analytical project implementing the K-Means clustering algorithm. Designed to process, analyze, and cluster datasets to find patterns and categorize data points efficiently.",
      technologies: [
        "Data Mining",
        "Algorithms",
        "K-Means",
        "Data Analysis"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/reinzzy/K-Means-Data-Mining",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Portal Indonesia",
      href: "https://github.com/reinzzy/portal-indonesia",
      dates: "2024",
      active: true,
      description:
        "A web portal project developed to showcase localized information and digital services related to Indonesia. Focused on building a clean and accessible user interface.",
      technologies: [
        "Web Development",
        "PHP",
        "HTML/CSS",
        "JavaScript"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/reinzzy/portal-indonesia",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Python Projects",
      href: "https://github.com/reinzzy/ProjectPython",
      dates: "2023 - 2024",
      active: true,
      description:
        "A repository containing various Python scripts and mini-projects. This project focuses on solving algorithmic challenges, data manipulation, and understanding core Python concepts.",
      technologies: [
        "Python",
        "Scripting",
        "Algorithms"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/reinzzy/ProjectPython",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Flutter Latihan",
      href: "https://github.com/reinzzy/flutter_latihan1",
      dates: "2024",
      active: true,
      description:
        "A mobile application development project used to practice and implement cross-platform user interfaces using the Flutter framework and Dart programming language.",
      technologies: [
        "Flutter",
        "Dart",
        "Mobile App Development",
        "UI/UX"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/reinzzy/flutter_latihan1",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    }
  ],  
} as const;
