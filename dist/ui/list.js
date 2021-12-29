"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("../context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var List = function List(_ref) {
  var languages = _ref.languages;

  var _useContext = (0, _react.useContext)(_context.context),
      currentLanguage = _useContext.currentLanguage,
      setCurrentLanguage = _useContext.setCurrentLanguage;

  return _react["default"].createElement("ul", {
    className: "rtc-translator"
  }, Object.keys(languages).map(function (key) {
    return _react["default"].createElement("li", {
      key: key,
      value: key,
      "data-selected": key === currentLanguage
    }, _react["default"].createElement("button", {
      type: "button",
      onClick: function onClick() {
        setCurrentLanguage(key);
      }
    }, _react["default"].createElement("img", {
      src: languages[key].icon,
      alt: "Flag",
      className: "rtc-flag"
    }), _react["default"].createElement("span", {
      className: "rtc-title"
    }, languages[key].text)));
  }));
};

exports.List = List;
List.propTypes = {
  languages: _propTypes["default"].object.isRequired
};