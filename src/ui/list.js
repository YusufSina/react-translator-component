import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { context } from '../context';

export const List = ({ languages }) => {
  const { currentLanguage, setCurrentLanguage } = useContext(context);

  return (
    <ul className="rtc-translator">
      {Object.keys(languages).map(key => (
        <li key={key} value={key} data-selected={(key === currentLanguage)}>
          <button type="button" onClick={() => { setCurrentLanguage(key); }}>
            <img src={languages[key].icon} alt="Flag" className="rtc-flag" />
            <span className="rtc-title">{languages[key].text}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  languages: PropTypes.object.isRequired,
};
