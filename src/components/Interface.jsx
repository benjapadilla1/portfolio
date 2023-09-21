/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { languages, projects, skills } from "../utils/data";
import { ValidationError, useForm } from "@formspree/react";
import { currentProjectAtom } from "./Projects";
import { useAtom } from "jotai";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const Section = (props) => {
  const { children, mobileTop } = props;
  return (
    <motion.section
      className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start ${
        mobileTop ? "justify-start md:justify-center" : "justify-center"
      }`}
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

const Interface = ({ setSection }) => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <ProyectSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = ({ setSection }) => {
  const { t } = useTranslation(["about"]);
  return (
    <Section mobileTop>
      <div className="text-4xl md:text-6xl font-extrabold mt-2 md:mt-0">
        <h1 className="mb-2 lg:mb-4 md:mb-4"> {t("welcome")}</h1>
        <span className="bg-blue-200 italic leading-10 lg:leading-10 md:leading-snug ">
          Benjamín Padilla
        </span>
      </div>
      <motion.span
        className="px-1 text-4xl mt-1 lg:mt-5 md:mt-5 font-bold"
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
        className="px-1 text-4xl font-bold"
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
      <motion.button
        className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-2 lg:mt-14 md:mt-14"
        onClick={() => setSection(3)}
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
        {t("contact")}
      </motion.button>
    </Section>
  );
};

const SkillsSection = () => {
  const { t } = useTranslation(["languages"]);
  return (
    <Section mobileTop>
      <motion.div whileInView={"visible"}>
        <h2 className="text-3xl md:text-5xl font-bold">{t("skills")}</h2>
        <div className="mt-8 space-y-4 grid grid-cols-3 items-center justify-center ">
          {skills.map((skill, i) => (
            <div className="w-36" key={i}>
              <a href={skill.link} target="_blank" rel="noreferrer">
                <motion.span
                  className="text-3xl md:text-5xl hover:text-blue-500 cursor-pointer"
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
          <h2 className="text-3xl md:text-5xl font-bold mt-10">
            {t("language")}
          </h2>
          <div className="mt-8 space-y-4">
            {languages.map((leng, i) => (
              <div className="w-64" key={i}>
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
                  {t(`language${i}`)}
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
                  {t(`proficiency${i}`)}
                </motion.span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

const ProyectSection = () => {
  const { t } = useTranslation(["projects"]);
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);
  const prevProyect = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };
  const nextProyect = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  return (
    <Section>
      <h2 className="text-3xl md:text-5xl font-bold text-center">
        {t("projects")}
      </h2>
      <motion.div
        className="flex w-full h-full gap-8 place-items-end md:items-end mt-36 md:mt-0 justify-center"
        initial={{
          opacity: 0,
          x: 50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
          },
        }}
      >
        <button
          className="hover:text-indigo-600 text-3xl md:text-4xl transition-colors"
          onClick={prevProyect}
        >
          <FaArrowLeft />
        </button>
        <button
          className="hover:text-indigo-600 text-3xl md:text-4xl transition-colors"
          onClick={nextProyect}
        >
          <FaArrowRight />
        </button>
      </motion.div>
    </Section>
  );
};

const ContactSection = () => {
  const [state, handleSubmit] = useForm("xeqbkgnd");
  const { t } = useTranslation(["contact"]);
  return (
    <Section>
      <h2 className="text-3xl md:text-5xl font-bold">{t("contact")}</h2>
      <div
        className="mt-8 p-8 rounded-md bg-opacity-25 bg-black max-w-full  "
        style={{ width: "500px" }}
      >
        {state.succeeded ? (
          <p className="text-gray-900 text-center">{t("submitted")}</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="name"
              className="font-medium text-gray-900 block mb-1"
            >
              {t("name")}
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
            <ValidationError
              className="mt-1 text-red-500"
              errors={state.errors}
            />
            <label
              htmlFor="email"
              className="font-medium text-gray-900 block mb-1 mt-8"
            >
              {t("messsage")}
            </label>
            <textarea
              name="message"
              id="message"
              className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              errors={state.errors}
            />
            <button
              className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-12"
              disabled={state.submitting}
            >
              {t("submit")}
            </button>
          </form>
        )}
      </div>
    </Section>
  );
};

export default Interface;
