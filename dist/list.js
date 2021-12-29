"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _config = _interopRequireDefault(require("./config"));

var _index = require("./ui/index");

var _context = require("./context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SelectList = function SelectList(_ref) {
  var Theme = _ref.Theme,
      onChange = _ref.onChange;

  var _useContext = (0, _react.useContext)(_context.context),
      currentLanguage = _useContext.currentLanguage;

  (0, _react.useEffect)(function () {
    onChange(currentLanguage);
  }, [currentLanguage]);
  var returnElement = {
    dropdown: _react["default"].createElement("div", null, _react["default"].createElement(_index.Dropdown, {
      languages: _config["default"].list,
      defaultLanguage: currentLanguage
    })),
    list: _react["default"].createElement("div", null, _react["default"].createElement(_index.List, {
      languages: _config["default"].list,
      defaultLanguage: currentLanguage
    }))
  };
  return returnElement[Theme];
};

SelectList.propTypes = {
  Theme: _propTypes["default"].string,
  onChange: _propTypes["default"].func
};
SelectList.defaultProps = {
  Theme: '',
  onChange: function onChange() {}
};
var _default = SelectList;
exports["default"] = _default;