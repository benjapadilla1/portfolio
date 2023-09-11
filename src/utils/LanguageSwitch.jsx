import i18next from "i18next";
const LanguageSwitch = () => {
  const ChangeLanguage = (language) => {
    i18next.changeLanguage(language);
  };
  return (
    <div className="flex gap-5 justify-center relative top-5">
      <button onClick={() => ChangeLanguage("en")}>English</button>
      <button onClick={() => ChangeLanguage("es")}>Español</button>
    </div>
  );
};

export default LanguageSwitch;
