"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScanScreen = void 0;
var _react = _interopRequireWildcard(require("react"));
var _native = require("@react-navigation/native");
var _AssetsComponent = require("../../components/AssetsComponent");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ScanScreen = exports.ScanScreen = /*#__PURE__*/(0, _react.memo)(() => {
  const {
    params
  } = (0, _native.useRoute)();
  const navigation = (0, _native.useNavigation)();
  const [code, setCode] = (0, _react.useState)('');
  const canItem = (0, _react.useCallback)(code => {
    setCode(code);
  }, []);
  (0, _react.useEffect)(() => {
    if (code) {
      navigation.goBack();
      params?.onItem && params.onItem(code);
    }
  }, [code, params]);
  return /*#__PURE__*/_react.default.createElement(_AssetsComponent.ScanView, {
    onItem: canItem,
    showFrame: true
  });
});