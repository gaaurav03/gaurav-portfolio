import { AiOutlineSearch } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { calculateExperience } from "../helpers/getExperience";
import { GrMail } from "react-icons/gr";
import { BsFillPhoneFill } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { MdCall } from "react-icons/md";

export const accountDetails = {
  account: "Google Account",
  name: "Gaurav Gupta",
  gmail: "gaurav21687@gmail.com",
};

export const navBar = [
  {
    name: "About",
    path: "/",
    icon: AiOutlineSearch,
  },
  {
    name: "Skills",
    path: "/skills",
    icon: BiPencil,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: AiOutlineFundProjectionScreen,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: BiPhoneCall,
  },
  {
    name: "Map",
    path: "/map",
    icon: MdOutlineLocationOn,
  },
];

export const info = {
  heading: "Gaurav Gupta: Full Stack Developer",
  mobileHeading: "Gaurav Gupta",
  description:
    "Passionate Full Stack Developer pursuing B.Tech in Computer Science at VIT with expertise in building scalable web applications using React, Node.js, and cloud technologies. Skilled in developing real-time applications with 300+ DSA problems solved.",
  workExperience: "Education & Projects",
  companies: [
    {
      designation: "B.Tech Computer Science & Engineering",
      name: "Vellore Institute of Technology",
      timePeriod: "2022 - 2026",
      workProjects: [
        {
          title: "CGPA: 8.73",
          description:
            "Currently pursuing B.Tech in Computer Science & Engineering at VIT Bhopal with strong academic performance and active participation in technical clubs and hackathons.",
        },
      ],
    },
    {
      designation: "Key Projects & Experience",
      name: "Full Stack Development",
      timePeriod: "2023 - 2026",
      workProjects: [
        {
          title: "Snappy - Real-time Chat Application:",
          description:
            "Engineered a scalable real-time chat application using <b>React.js</b>, <b>Node.js</b>, <b>Express.js</b>, and <b>Socket.io</b>, supporting 150+ concurrent users with sub-0.5s message delivery. Deployed using <b>Docker</b>, <b>AWS ECS</b>, and configured with <b>Nginx</b> and CI/CD via <b>GitHub Actions</b>.",
        },
        {
          title: "Singitronic - Electronics eCommerce Platform:",
          description:
            "Built a full-stack eCommerce platform using <b>Next.js</b>, <b>React.js</b>, <b>Node.js</b>, and <b>MySQL</b>, delivering support for 100+ product SKUs. Implemented comprehensive admin dashboard for product management, order tracking, and business analytics.",
        },
      ],
    },
  ],
};

export const sideBarInfo = {
  about:
    "A passionate and detail-oriented Computer Science Engineering student at VIT with expertise in full-stack development. Experienced in building scalable web applications using modern technologies like React, Node.js, MongoDB, and AWS. Strong problem-solving skills with 300+ DSA problems solved and participation in national-level hackathons.",

  contactDetails: [
    {
      title: "gaurav21687@gmail.com",
      href: "mailto:gaurav21687@gmail.com",
      icon: GrMail,
    },
    {
      title: "+91 6398496872",
      href: "tel:+916398496872",
      icon: BsFillPhoneFill,
    },
    {
      title: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/gaurav037/", // Update with your actual LinkedIn
      icon: FaLinkedin,
    },
    {
      title: "Github Profile",
      href: "https://github.com/gaaurav03",
      icon: AiFillGithub,
    },
    {
      title: "Portfolio Website",
      href: "https://gaurav-137-portfolio.vercel.app/", // Update after deployment
      icon: BiLinkAlt,
    },
    {
      title: "Resume",
      href: "/assets/gaurav_gupta_resume.pdf",
      icon: AiFillGoogleCircle,
    },
  ],
};

export const accordionData = [
  {
    question: "What skills does Gaurav have?",
    answer: `Gaurav is well-versed in C, C++, JavaScript, Python, SQL, React.js, Next.js, Node.js, Express.js, MongoDB, MySQL, Docker, AWS (EC2, Lambda, S3), and has strong knowledge of Data Structures & Algorithms with 300+ problems solved.`,
  },
  {
    question: "What services does Gaurav provide?",
    answer: `Gaurav provides full-stack web development with MERN stack, real-time applications with Socket.io, eCommerce platforms, RESTful APIs, cloud deployment with AWS and Docker, and scalable system architecture.`,
  },
  {
    question: "Is Gaurav frontend or backend developer?",
    answer: `Gaurav is a full-stack developer with expertise in both frontend (React.js, Next.js) and backend (Node.js, Express.js, MongoDB, MySQL) development, along with cloud deployment and DevOps experience.`,
  },
  {
    question: "What is Gaurav's educational background?",
    answer: `Gaurav is pursuing B.Tech in Computer Science & Engineering from Vellore Institute of Technology with a CGPA of 8.73. He completed Class XII with 96% and Class X with 93.4% from Translam Academy International School.`,
  },
];

export const projectVideos = [
  {
    heading: "Snappy - Real-time Chat Application with React & Socket.io",
    platform: `GitHub`,
    author: `Gaurav Gupta`,
    image: `/assets/snappy-preview.png`,
    date: `Sept-2023`,
    link: `https://github.com/gaaurav03/Snappy`,
  },
  {
    heading: "Singitronic - Full Stack eCommerce Platform",
    platform: `GitHub`,
    author: `Gaurav Gupta`,
    image: `/assets/singitronic-preview.png`,
    date: `Dec-2024`,
    link: `https://github.com/gaaurav03/Singitronic`,
  },
  {
    heading: "300+ DSA Problems Solved - LeetCode & GeeksforGeeks",
    platform: `LeetCode`,
    author: `Gaurav Gupta`,
    image: `/assets/dsa-badge.png`,
    date: `Ongoing`,
    link: `https://leetcode.com/u/gaurav21687/`, // Update with your profile
  },
];

export const relatedsearch = [
  {
    text: "Gaurav's Skills",
    href: "/skills",
  },
  {
    text: "Gaurav's Projects",
    href: "/projects",
  },
  {
    text: "Contact Gaurav",
    href: "/contact",
  },
  {
    text: "Gaurav's Location",
    href: "/map",
  },
];

export const footerData = {
  name: "GauravGupta",
  year: new Date().getFullYear(),
  darkTheme: "Dark theme: ",
  socialLinks: [
    {
      href: "https://www.linkedin.com/in/gaurav037/", // Update with actual URL
      icon: FaLinkedin,
    },
    {
      href: "https://gaurav-137-portfolio.vercel.app/", // Update after deployment
      icon: BiLinkAlt,
    },
    {
      href: "https://github.com/gaaurav03",
      icon: FaGithub,
    },
    {
      href: "https://www.instagram.com/gaurav", // Update if you have Instagram
      icon: FaInstagram,
    },
  ],
};

export const skillsData = {
  info: "Gaurav is passionate about building innovative web applications using cutting-edge technologies. With a strong foundation in Data Structures & Algorithms (300+ problems solved) and hands-on experience in full-stack development, he creates scalable, efficient, and user-centric solutions. His expertise spans across frontend frameworks, backend development, cloud deployment, and real-time applications.",
  skills: [
    {
      title: "Frontend Skills",
      description:
        "React.js, Next.js, JavaScript, HTML5, CSS3, Tailwind CSS, Bootstrap, Material UI, Responsive Design, Progressive Web Apps.",
    },
    {
      title: "Backend Skills",
      description:
        "Node.js, Express.js, REST APIs, Socket.IO, MongoDB, MySQL, JWT Authentication, API Integration, Database Design.",
    },
    {
      title: "Languages & Core",
      description:
        "C, C++, JavaScript, Python, SQL, Data Structures & Algorithms, Operating Systems, Computer Networks, Database Management Systems, System Design.",
    },
    {
      title: "Cloud & DevOps",
      description:
        "AWS (EC2, Lambda, S3), Docker, Nginx, GitHub Actions, CI/CD, Postman, Git, VS Code, MCP.",
    },
  ],

  skillsIcons: [
    {
      title: "React.js",
      href: "https://reactjs.org/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      shadowColor: "#61DAFB",
    },
    {
      title: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      shadowColor: "#F0DB4F",
    },
    {
      title: "Next.js",
      href: "https://nextjs.org/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      title: "Node.js",
      href: "https://nodejs.org",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      shadowColor: "#83CD29",
    },
    {
      title: "Express.js",
      href: "https://expressjs.com",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      title: "MongoDB",
      href: "https://www.mongodb.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      shadowColor: "#75BB69",
    },
    {
      title: "MySQL",
      href: "https://www.mysql.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      shadowColor: "#4479A1",
    },
    {
      title: "Python",
      href: "https://www.python.org/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      shadowColor: "#3776AB",
    },
    {
      title: "C++",
      href: "https://cplusplus.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      shadowColor: "#00599C",
    },
    {
      title: "Docker",
      href: "https://www.docker.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      shadowColor: "#2496ED",
    },
    {
      title: "AWS",
      href: "https://aws.amazon.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      shadowColor: "#FF9900",
    },
    {
      title: "Git",
      href: "https://git-scm.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      shadowColor: "#F34F29",
    },
    {
      title: "HTML5",
      href: "https://www.w3.org/html/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      shadowColor: "#f97316",
    },
    {
      title: "CSS3",
      href: "https://www.w3schools.com/css/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      shadowColor: "#3b82f6",
    },
    {
      title: "Tailwind CSS",
      href: "https://tailwindcss.com/",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      shadowColor: "#38bdf8",
    },
    {
      title: "Bootstrap",
      href: "https://getbootstrap.com",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      shadowColor: "#7C12F8",
    },
    {
      title: "Postman",
      href: "https://www.postman.com/",
      src: "/assets/postman.png",
      shadowColor: "#f97316",
    },
  ],
};

export const projectsData = [
  {
    title: "Snappy - Real-time Chat Application",
    image: "/assets/snappy-preview.png",
    description: [
      "Engineered a scalable real-time chat application using <b>React.js</b>, <b>Node.js</b>, <b>Express.js</b>, and <b>Socket.io</b>, supporting 150+ concurrent users with sub-0.5s message delivery (200–300ms latency) under heavy load.",
      "Implemented secure authentication and role-based access control using <b>JWT</b>, protecting REST APIs and WebSocket channels with HTTPS, input validation, token refresh, and session management.",
      "Containerized and deployed using <b>Docker</b>, <b>AWS ECS</b>, and Netlify, configuring <b>Nginx</b> with SSL/TLS and CI/CD via <b>GitHub Actions</b>, reducing deployment time by 70%.",
      "Optimized socket reconnection logic and <b>MongoDB</b> queries using indexing, eliminating race conditions and reducing response time by 30% under peak load.",
    ],
    videoDemo: "https://github.com/gaaurav03/Snappy",
    liveDemo: "https://snappy-chat.netlify.app", // Update with actual URL
    sourceCode: "https://github.com/gaaurav03/Snappy",
  },
  {
    title: "Singitronic - Electronics eCommerce Platform",
    image: "/assets/singitronic-preview.png",
    description: [
      "Engineered a full-stack electronics eCommerce platform using <b>Next.js (React)</b> and <b>Node.js</b>, delivering a custom-designed, mobile-responsive interface with support for 100+ product SKUs.",
      "Implemented core eCommerce functionality including product catalog, shopping cart, secure user authentication, and order processing using a <b>MySQL</b> backend, achieving 0.5s average API response.",
      "Built a comprehensive admin dashboard for real-time product management, order tracking, and business analytics, streamlining administrative workflows by 70%.",
      "Optimized application performance through modular architecture and software engineering best practices, resulting in a scalable production-ready codebase.",
    ],
    videoDemo: "https://github.com/gaaurav03/Singitronic",
    liveDemo: "https://singitronic.vercel.app", // Update with actual URL
    sourceCode: "https://github.com/gaaurav03/Singitronic",
  },
  {
    title: "DSA Problem Solving - 300+ Problems",
    image: "/assets/dsa-badge.png",
    description: [
      "Solved 300+ Data Structures and Algorithms problems across <b>LeetCode</b> and <b>GeeksforGeeks</b> using <b>C++</b>.",
      "Earned 50-Day and 100-Day Coding Streak Badges on LeetCode for consistent practice.",
      "Strong proficiency in algorithms including sorting, searching, dynamic programming, graphs, trees, and greedy algorithms.",
      "Applied problem-solving skills in competitive programming and real-world project optimization.",
    ],
    sourceCode: "https://leetcode.com/u/gaurav21687/",
  },
];

export const contactDetails = [
  {
    icon: MdCall,
    type: "Mobile",
    value: "+91 6398496872",
    href: "tel:+916398496872",
  },
  {
    icon: GrMail,
    type: "Email",
    value: "gaurav21687@gmail.com",
    href: "mailto:gaurav21687@gmail.com",
  },
  {
    icon: MdLocationOn,
    type: "Address",
    value: "Bhopal, Madhya Pradesh, India",
    href: "",
  },
  {
    icon: FaLinkedin,
    type: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/gaurav037/", // Update with actual URL
  },
];

export const contactData = {
  nameLabel: "Name *",
  emailLabel: "Email *",
  subjectLabel: "Subject *",
  messageLabel: "Message *",
  sendButton: "Send Message",
  errorMessage:
    "Your message could not be sent. Kindly contact directly via Email or Phone!",
  successMessage:
    "Your message has been sent successfully! I will get back to you soon.",
};