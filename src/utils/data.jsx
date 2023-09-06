import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiRedux,
  SiExpress,
  SiGit,
  SiPostgresql,
  SiTypescript,
  SiSequelize,
  SiNextdotjs,
  SiTailwindcss,
  SiThreedotjs,
  SiGmail,
} from "react-icons/si";

export const skills = [
  {
    technology: "HTML5",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    logo: <FaHtml5 />,
  },
  {
    technology: "CSS3",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    logo: <FaCss3 />,
  },
  {
    technology: "Tailwind CSS",
    link: "https://tailwindcss.com/",
    logo: <SiTailwindcss />,
  },
  {
    technology: "Git",
    link: "https://git-scm.com/",
    logo: <SiGit />,
  },
  {
    technology: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    logo: <FaJs />,
  },
  {
    technology: "Typescript",
    link: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    logo: <SiTypescript />,
  },
  {
    technology: "Three JS",
    link: "https://threejs.org/",
    logo: <SiThreedotjs />,
  },
  {
    technology: "React",
    link: "https://reactjs.org/",
    logo: <FaReact />,
  },
  {
    technology: "Next JS",
    link: "https://nextjs.org/",
    logo: <SiNextdotjs />,
  },
  {
    technology: "Redux",
    link: "https://redux.js.org/",
    logo: <SiRedux />,
  },
  {
    technology: "Node.js",
    link: "https://nodejs.org/",
    logo: <FaNodeJs />,
  },
  {
    technology: "Express.js",
    link: "https://expressjs.com/",
    logo: <SiExpress />,
  },
  {
    technology: "PostgreSQL",
    link: "https://www.postgresql.org/",
    logo: <SiPostgresql />,
  },
  {
    technology: "Sequelize",
    link: "https://sequelize.org/",
    logo: <SiSequelize />,
  },
];

export const languages = [
  {
    name: "English",
    proficiency: "Fluent (C2)",
  },
  {
    name: "Spanish",
    proficiency: "Native",
  },
  {
    name: "German",
    proficiency: "Proficient (C1)",
  },
];

export const socials = [
  {
    title: "github",
    url: "https://github.com/benjapadilla1",
    icon: <FaGithub />,
  },
  {
    title: "linkedin",
    url: "https://linkedin.com/in/benja-padilla/",
    icon: <FaLinkedin />,
  },
  {
    title: "Mail",
    url: "mailto:benja.padilla@outlook.com.ar",
    icon: <SiGmail />,
  },
];

export const projects = [
  // {
  //   title: "Recalled Minds",
  //   image: "",
  //   description: "Game of memory",
  //   url: "https://github.com/",
  //   repository: "https://github.com/benjapadilla1/PI-Dogs.git",
  // },
  // {
  //   title: "Hangman Game",
  //   image: "",
  //   description: "Typical hangman game",
  //   url: "https://github.com/",
  //   repository: "https://github.com/benjapadilla1/PI-Dogs.git",
  // },
  // {
  //   title: "Git Profile",
  //   image: "",
  //   description:
  //     "Web app that fetches and displays a user's GitHub profile and repositories.",
  //   url: "https://github.com/",
  //   repository: "https://github.com/benjapadilla1/PI-Dogs.git",
  // },
  {
    title: "Doggy World",
    image: "projects/trace.svg",
    description: "App to see the total dogs",
    url: "https://github.com/benjapadilla1/PI-Dogs.git",
    repository: "https://github.com/benjapadilla1/PI-Dogs.git",
  },
  {
    title: "Pig Commander",
    image: "projects/pigCommander.png",
    description: "Financial app to have record of expenses and incomes",
    url: "https://pig-commander-client-beta.vercel.app/",
    repository: "https://github.com/RodrigoSpano/pig_commander_client.git",
  },
];
