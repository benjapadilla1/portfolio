import i18next from "i18next";
import England from "/assets/england.png";
import Spain from "/assets/spain.png";
const LanguageSwitch = () => {
  const ChangeLanguage = (language) => {
    i18next.changeLanguage(language);
  };
  return (
    <div className="flex gap-5 justify-center relative top-5">
      <button onClick={() => ChangeLanguage("en")}>
        <img src={England} alt="England" className="w-14 h-14 rounded-lg" />
      </button>
      <button onClick={() => ChangeLanguage("es")}>
        <img src={Spain} alt="Spain" className="w-14 h-14 rounded-lg" />
      </button>
    </div>
  );
};

export default LanguageSwitch;
