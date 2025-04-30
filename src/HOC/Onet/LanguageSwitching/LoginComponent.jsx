import React from "react";
import WithTranslation from "./WithTranslation";

const i18n = {
  en: {
    "Please Login": "Please Login",
  },
  es: {
    "Please Login": "Por favor Iniciar sesión",
  },
  fr: {
    "Please Login": "Veuillez vous connecter",
  },
};
const LoginComponent = ({ t, language, changeLanguage }) => {
  return (
    <div>
      <p>{t("Please Log In")}</p>
      <p>Current language: {language}</p>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("es")}>Español</button>
      <button onClick={() => changeLanguage("fr")}>Français</button>
    </div>
  );
};

export const LoginComponentWithTranslation = WithTranslation(
  LoginComponent,
  i18n
);
