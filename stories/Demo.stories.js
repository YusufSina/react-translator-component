/* eslint-disable global-require */
import React, { useState } from 'react';
import { Translator, T, LanguageList, Config } from '../src';
import './css/bootstrap.min.css';
import './css/demo.css';

export default {
  title: 'Demo',
};

Config.default = 'tr';
Config.list = {
  de: {
    text: 'Deutsch',
    icon: require('./locale/flags/de.svg'),
    file: require('./locale/de'),
  },
  en: {
    text: 'English',
    icon: require('./locale/flags/en.svg'),
    file: require('./locale/en'),
  },
  es: {
    text: 'Español',
    icon: require('./locale/flags/es.svg'),
    file: require('./locale/es'),
  },
  fr: {
    text: 'Français',
    icon: require('./locale/flags/fr.svg'),
    file: require('./locale/fr'),
  },
  it: {
    text: 'Italiano',
    icon: require('./locale/flags/it.svg'),
    file: require('./locale/it'),
  },
  ru: {
    text: 'Pусский',
    icon: require('./locale/flags/ru.svg'),
    file: require('./locale/ru'),
  },
  tr: {
    text: 'Türkçe',
    icon: require('./locale/flags/tr.svg'),
    file: require('./locale/tr'),
  },
};

const App = () => {
  const [, setTest] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h6>{T('Doğrular ve yanlışlar yoktur, sadece yorumlar vardır.')}</h6>
        </div>
        <table className="language-lists">
          <thead>
            <tr>
              <td>Default Language List</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <td>
                <p>Dropdown Theme</p>
                <LanguageList />
                <br />
              </td> */}
              <td>
                <p>Dropdown Theme With Onchange</p>
                <LanguageList onChange={(lang) => setTest(lang)} />
                <br />
              </td>

            </tr>
          </tbody>
        </table>
        <div className="author">
          <a href="https://github.com/barisates" target="_blank" rel="noopener noreferrer" className="mr-1">barisates</a>
          <a href="https://github.com/eneszeren" target="_blank" rel="noopener noreferrer" className="ml-1">eneszeren</a>
          <a href="https://github.com/yusufsina" target="_blank" rel="noopener noreferrer" className="ml-1">yusufsina</a>
        </div>
      </header>
    </div>
  );
};
export const Demo = () => (

  <Translator>
    <App />
  </Translator>
);
