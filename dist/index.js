"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Config", {
  enumerable: true,
  get: function get() {
    return _config["default"];
  }
});
exports.LanguageList = exports.T = exports.Translator = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactHtmlParser = _interopRequireDefault(require("react-html-parser"));

var _storage = _interopRequireDefault(require("./storage"));

var _config = _interopRequireDefault(require("./config"));

var _list = _interopRequireDefault(require("./list"));

require("./index.css");

var _context = require("./context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Translator = function Translator(_ref) {
  var children = _ref.children;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_context.Provider, null, _react["default"].createElement(_context.Consumer, null, function () {
    return children;
  })));
};

exports.Translator = Translator;
Translator.propTypes = {
  children: _propTypes["default"].node
};
Translator.defaultProps = {
  children: null
};

var SetLanguageFile = function SetLanguageFile(text) {
  var languageFile = JSON.parse(_storage["default"].missing()) || {};
  languageFile["\"".concat(text, "\"")] = text;

  try {
    _storage["default"].setMissing(JSON.stringify(languageFile)); // eslint-disable-next-line no-empty

  } catch (_unused) {}

  return text;
};

var T = function T(text) {
  var _useContext = (0, _react.useContext)(_context.context),
      file = _useContext.file;

  return (0, _reactHtmlParser["default"])(file[text] || SetLanguageFile(text));
};

exports.T = T;

var LanguageList = function LanguageList(_ref2) {
  var Theme = _ref2.Theme,
      onChange = _ref2.onChange;
  return _react["default"].createElement(_list["default"], {
    Theme: Theme,
    onChange: onChange
  });
};

exports.LanguageList = LanguageList;
LanguageList.propTypes = {
  Theme: _propTypes["default"].string,
  onChange: _propTypes["default"].func
};
LanguageList.defaultProps = {
  Theme: 'dropdown',
  onChange: function onChange() {}
};