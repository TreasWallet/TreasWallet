"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _en = _interopRequireDefault(require("./en"));
var _cn = _interopRequireDefault(require("./cn"));
var _tw = _interopRequireDefault(require("./tw"));
var _i18next = _interopRequireDefault(require("i18next"));
var _reactI18next = require("react-i18next");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_i18next.default.use(_reactI18next.initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: _en.default,
    cn: _cn.default,
    tw: _tw.default
  },
  lng: 'en',
  fallbackLng: 'en'
});
var _default = exports.default = _i18next.default;