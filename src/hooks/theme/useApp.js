"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useApp = void 0;
var _react = require("react");
var _translations = _interopRequireDefault(require("../../translations"));
var _useDark = require("./useDark");
var _useDesign = require("./useDesign");
var _useI18n = require("./useI18n");
var _reactNative = require("react-native");
var eva = _interopRequireWildcard(require("@eva-design/eva"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const useApp = () => {
  const {
    dark
  } = (0, _useDark.useDark)();
  const {
    theme: designTheme,
    design
  } = (0, _useDesign.useDesign)();
  const {
    lang
  } = (0, _useI18n.useI18n)();
  const defaultTheme = (0, _react.useMemo)(() => dark ? designTheme.dark : designTheme.light, [dark, designTheme]);
  const theme = (0, _react.useMemo)(() => ({
    ...(dark ? eva.dark : eva.light),
    ...defaultTheme
  }), [dark, defaultTheme]);
  (0, _react.useEffect)(() => {
    (0, _react.startTransition)(() => {
      _translations.default.changeLanguage(lang);
    });
  }, [lang]);
  (0, _react.useEffect)(() => {
    _reactNative.Appearance.setColorScheme(dark ? 'dark' : 'light');
  }, [dark]);
  return {
    dark,
    i18n: _translations.default,
    design,
    theme
  };
};
exports.useApp = useApp;