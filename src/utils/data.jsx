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
    technology: "React",
    link: "https://reactjs.org/",
    logo: <FaReact />,
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
    technology: "Git",
    link: "https://git-scm.com/",
    logo: <SiGit />,
  },
];

export const languages = [
  {
    name: "English",
    proficiency: "Fluent (C2)",
    flag: "🇺🇸",
  },
  {
    name: "German",
    proficiency: "Proficient (C1)",
    flag: "🇩🇪",
  },
];

export const links = [
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
];
