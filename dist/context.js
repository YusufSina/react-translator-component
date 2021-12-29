"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = exports.Consumer = exports.context = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _storage = _interopRequireDefault(require("./storage"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var context = _react["default"].createContext();

exports.context = context;
var Consumer = context.Consumer;
exports.Consumer = Consumer;

var Provider = function Provider(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      file = _useState2[0],
      setFile = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      changeFlag = _useState4[0],
      setChangeFlag = _useState4[1];

  var _useState5 = (0, _react.useState)(_storage["default"].language() || _config["default"]["default"]),
      _useState6 = _slicedToArray(_useState5, 2),
      currentLanguage = _useState6[0],
      setCurrentLanguage = _useState6[1];

  var onLanguageChange = function onLanguageChange(lang) {
    if (_config["default"].list[lang]) {
      _storage["default"].setLanguage(lang);

      setFile(_config["default"].list[lang].file);
      return;
    }

    _storage["default"].setLanguage(_config["default"]["default"]);

    setFile(_config["default"].list[_config["default"]["default"]].file);
  };

  (0, _react.useEffect)(function () {
    if (_config["default"].list[currentLanguage]) {
      onLanguageChange(currentLanguage);
    } else if (_config["default"].list[_config["default"]["default"]]) {
      setCurrentLanguage(_config["default"]["default"]);
    } else {
      throw new Error('Default language is not in the language list.');
    }
  }, [currentLanguage]);
  return _react["default"].createElement(context.Provider, {
    value: {
      file: file,
      setFile: setFile,
      changeFlag: changeFlag,
      setChangeFlag: setChangeFlag,
      currentLanguage: currentLanguage,
      setCurrentLanguage: setCurrentLanguage
    }
  }, children);
};

exports.Provider = Provider;
Provider.propTypes = {
  children: _propTypes["default"].node.isRequired
};