import React, { useState } from "react";

const WithTranslation = (WrappedCompoent, translation) => {
  return function (props) {
    const [language, setLanguage] = useState("en");
    const transLate = (key) => translation[language][key];
    console.log(transLate, "from translate");
    const changeLanguage = (lang) => {
      setLanguage(lang);
    };

    return (
      <WrappedCompoent
        {...props}
        t={transLate}
        language={language}
        changeLanguage={changeLanguage}
      />
    );
  };
};
export default WithTranslation;
