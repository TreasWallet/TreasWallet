"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DarkActionComponent = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useDark = require("../hooks/theme/useDark");
var _components = require("@ui-kitten/components");
var _uilSun = _interopRequireDefault(require("../assets/icons/uil-sun"));
var _uilMoon = _interopRequireDefault(require("../assets/icons/uil-moon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const DarkActionComponent = exports.DarkActionComponent = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    dark,
    setDark
  } = (0, _useDark.useDark)();
  const onDark = (0, _react.useCallback)(() => {
    (0, _react.startTransition)(() => {
      setDark(prevValue => !prevValue);
    });
  }, []);
  return /*#__PURE__*/_react.default.createElement(_components.TopNavigationAction, {
    onPress: onDark
    // @ts-ignore
    ,
    icon: ({
      style
    }) => dark ? /*#__PURE__*/_react.default.createElement(_uilMoon.default, {
      size: style?.height,
      color: style?.tintColor
    }) : /*#__PURE__*/_react.default.createElement(_uilSun.default, {
      size: style?.height,
      color: style?.tintColor
    })
  });
});