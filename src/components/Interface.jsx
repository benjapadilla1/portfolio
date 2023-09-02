import { motion } from "framer-motion";
import { languages, skills } from "../utils/data";

const Section = (props) => {
  const { children } = props;
  return (
    <motion.section
      className="h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection />
      <Section>
        <h1>Proyects</h1>
      </Section>
      <ContactSection />
    </div>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug ">
        Hi I am
        <div />
        <span className="bg-blue-200 px-1 italic">Benjamin Padilla</span>
        <div />
        <motion.span
          className="px-1"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
        >
          Full Stack
        </motion.span>
        <div />
        <motion.span
          className="px-1"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1.1,
          }}
        >
          Web developer
        </motion.span>
      </h1>
      <motion.button
        className="bg-indigo-600 text-white  py-4 px-8 rounded-lg font-bold text-lg mt-16"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        Contact me
      </motion.button>
    </Section>
  );
};

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <h2 className="text-5xl font-bold">Skills</h2>
        <div className="mt-8 space-y-4 grid grid-cols-3 items-center justify-center ">
          {skills.map((skill, i) => (
            <div className="w-36" key={i}>
              <a href={skill.link} target="_blank" rel="noreferrer">
                <motion.span
                  className="text-5xl hover:text-blue-500 cursor-pointer"
                  title={skill.technology}
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 0.5 + i * 0.2,
                      },
                    },
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                >
                  {skill.logo}
                </motion.span>
              </a>
            </div>
          ))}
        </div>
        <motion.div whileInView={"visible"}>
          <h2 className="text-5xl font-bold mt-10">Languages</h2>
          <div className="mt-8 space-y-4">
            {languages.map((leng, i) => (
              <div className="w-64" key={i}>
                <span>{leng.flag}</span>
                <motion.h3
                  className="text-xl font-bold text-gray-800"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + i * 0.2,
                      },
                    },
                  }}
                >
                  {leng.name}
                </motion.h3>
                <motion.span
                  className="h-full"
                  initial={{ opacity: 0 }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 1.1 + i * 0.2,
                      },
                    },
                  }}
                >
                  {leng.proficiency}
                </motion.span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

const ContactSection = () => {
  return (
    <Section>
      <h2 className="text-5xl font-bold">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
        <form>
          <label
            htmlFor="name"
            className="font-medium text-gray-900 block mb-1"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            htmlFor="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label
            htmlFor="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 ">
            Submit
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Interface;
