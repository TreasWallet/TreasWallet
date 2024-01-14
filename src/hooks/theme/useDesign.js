"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDesign = void 0;
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
var _env = require("@env");
var _react = require("react");
var material = _interopRequireWildcard(require("@eva-design/material"));
var eva = _interopRequireWildcard(require("@eva-design/eva"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// @ts-ignore

const useDesign = () => {
  const [design, setDesign] = (0, _storage.useStorage)(_storage2.DESIGN_THEME, _env.ENV_DEFAULT_DESIGN_THEME);
  const theme = (0, _react.useMemo)(() => design === 'material' ? material : eva, [design]);
  return {
    theme,
    design,
    setDesign
  };
};
exports.useDesign = useDesign;