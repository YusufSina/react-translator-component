import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Config from './config';
import { Dropdown, List } from './ui/index';
import { context } from './context';

const SelectList = ({ Theme, onChange }) => {
  const { currentLanguage } = useContext(context);
  useEffect(() => {
    onChange(currentLanguage);
  }, [currentLanguage]);

  const returnElement = {
    dropdown: (
      <div>
        <Dropdown languages={Config.list} defaultLanguage={currentLanguage} />
      </div>
    ),
    list: (
      <div>
        <List languages={Config.list} defaultLanguage={currentLanguage} />
      </div>
    ),
  };

  return returnElement[Theme];
};

SelectList.propTypes = {
  Theme: PropTypes.string,
  onChange: PropTypes.func,
};

SelectList.defaultProps = {
  Theme: '',
  onChange: () => {},
};

export default SelectList;
