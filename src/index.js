import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Storage from './storage';
import Config from './config';
import SelectList from './list';
import './index.css';
import { Consumer, context, Provider } from './context';

const Translator = ({ children }) => (
  <>
    <Provider>
      <Consumer>
        {() => (children)}
      </Consumer>
    </Provider>
  </>
);

Translator.propTypes = {
  children: PropTypes.node,
};

Translator.defaultProps = {
  children: null,
};

const SetLanguageFile = text => {
  const languageFile = (JSON.parse(Storage.missing()) || {});

  languageFile[`"${text}"`] = text;

  try {
    Storage.setMissing(JSON.stringify(languageFile));
    // eslint-disable-next-line no-empty
  } catch { }

  return text;
};

const T = text => {
  const { file } = useContext(context);

  return ReactHtmlParser(file[text] || SetLanguageFile(text));
};

const LanguageList = ({ Theme, onChange }) => (
  <SelectList Theme={Theme} onChange={onChange} />
);

LanguageList.propTypes = {
  Theme: PropTypes.string,
  onChange: PropTypes.func,
};

LanguageList.defaultProps = {
  Theme: 'dropdown',
  onChange: () => {},
};

export { Translator, T, LanguageList, Config };
