import { useTranslation } from "react-i18next";
import LanguageSwitch from "../utils/LanguageSwitch";
import { socials } from "../utils/data";
import { motion } from "framer-motion";

const Menu = ({ onSectionChange, menuOpened, setMenuOpened }) => {
  const { t } = useTranslation(["menu"]);
  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-4 right-4 md:top-12 md:right-12 p-3 bg-indigo-600 w-11 h-11 rounded-md"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45 translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col ${
          menuOpened ? "w-full md:w-80" : "w-0"
        }`}
      >
        <LanguageSwitch />
        <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
          <MenuButton label={t("menu1")} onClick={() => onSectionChange(0)} />
          <MenuButton label={t("menu2")} onClick={() => onSectionChange(1)} />
          <MenuButton label={t("menu3")} onClick={() => onSectionChange(2)} />
          <MenuButton label={t("menu4")} onClick={() => onSectionChange(3)} />
        </div>
        <div className="flex justify-center gap-6 mb-4">
          {socials.map((social, i) => (
            <div key={i}>
              <motion.a
                href={social.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2 }}
              >
                <motion.span
                  className="text-5xl hover:text-blue-500 hover:drop-shadow-lg cursor-pointer"
                  title={social.title}
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
                  {social.icon}
                </motion.span>
              </motion.a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const MenuButton = ({ label, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors "
      >
        {label}
      </button>
    </>
  );
};

export default Menu;
