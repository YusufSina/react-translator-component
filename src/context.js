import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Storage from './storage';
import Config from './config';

export const context = React.createContext();

const { Consumer } = context;

const Provider = ({ children }) => {
  const [file, setFile] = useState([]);
  const [changeFlag, setChangeFlag] = useState(0);
  const [currentLanguage, setCurrentLanguage] = useState(Storage.language() || Config.default);

  const onLanguageChange = lang => {
    if (Config.list[lang]) {
      Storage.setLanguage(lang);
      setFile(Config.list[lang].file);
      return;
    }

    Storage.setLanguage(Config.default);
    setFile(Config.list[Config.default].file);
  };

  useEffect(() => {
    if (Config.list[currentLanguage]) {
      onLanguageChange(currentLanguage);
    } else if (Config.list[Config.default]) {
      setCurrentLanguage(Config.default);
    } else {
      throw new Error('Default language is not in the language list.');
    }
  }, [currentLanguage]);

  return (
    <context.Provider
      value={{
        file,
        setFile,
        changeFlag,
        setChangeFlag,
        currentLanguage,
        setCurrentLanguage,
      }}
    >
      {
        children
      }
    </context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Consumer, Provider };
