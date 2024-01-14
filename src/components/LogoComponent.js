"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SvgWallet = exports.SvgTron = exports.SvgShieldExclamation = exports.SvgShieldCheck = exports.SvgSetting = exports.SvgLogo = exports.SvgLock = exports.SvgFileShieldAlt = exports.SvgFileInfoAlt = exports.SvgEthereum = exports.SvgDesktopCloudAlt = exports.SvgComments = exports.SvgChannel = exports.SvgBrowser = exports.SvgBookReader = exports.SvgBankCard = exports.SvgApps = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNativeSvg = require("react-native-svg");
var _lottieReactNative = _interopRequireDefault(require("lottie-react-native"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SvgEthereum = exports.SvgEthereum = /*#__PURE__*/(0, _react.memo)(({
  height,
  width,
  fill
}) => /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Svg, {
  viewBox: "0 0 1024 1024",
  height: `${height}`,
  width: `${width}`
}, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  d: "m509.61 766.72-314.197-185.6L509.568 1024l314.453-442.88-314.538 185.6zM514.39 0 200.106 521.515l314.24 185.77 314.24-185.6z",
  fill: fill
})));
const SvgTron = exports.SvgTron = /*#__PURE__*/(0, _react.memo)(({
  height,
  width,
  fill
}) => /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Svg, {
  viewBox: "0 0 1024 1024",
  height: `${height}`,
  width: `${width}`
}, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  d: "M436.48 933.547a32.597 32.597 0 0 1-9.003-.854 75.477 75.477 0 0 1-58.026-51.2L82.73 164.523a76.203 76.203 0 0 1 6.442-76.203 72.021 72.021 0 0 1 58.283-26.197 104.064 104.064 0 0 1 14.25 1.024l553.387 73.856a81.75 81.75 0 0 1 43.094 21.333l133.546 133.547a76.288 76.288 0 0 1 5.974 98.986L497.45 900.224a78.421 78.421 0 0 1-60.971 33.323M147.627 126.123a13.952 13.952 0 0 0-8.107 1.706 28.715 28.715 0 0 0 2.603 13.056l286.72 716.8c3.328 8.534 7.168 11.52 7.68 11.52s4.65-1.664 10.197-8.96l400.213-509.44a10.283 10.283 0 0 0 1.963-7.338 9.856 9.856 0 0 0-2.816-6.699L712.533 203.221a22.528 22.528 0 0 0-6.357-2.986L153.6 126.72a30.763 30.763 0 0 0-5.973-.597",
  fill: fill
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  d: "M423.723 928a31.957 31.957 0 0 1-29.014-34.56l41.387-453.12-328.96-292.267a32.043 32.043 0 0 1 42.667-47.786L490.709 403.2a32.043 32.043 0 0 1 10.667 26.88l-42.667 469.333a32.299 32.299 0 0 1-32 28.587z",
  fill: fill
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  d: "M441.173 441.685a31.659 31.659 0 0 1 5.547-37.546l256-256a32 32 0 0 1 45.227 45.226L566.613 374.571l282.027-56.32a32 32 0 1 1 12.373 62.72l-385.706 77.226a26.24 26.24 0 0 1-5.974.427 31.872 31.872 0 0 1-28.16-16.939",
  fill: fill
})));
const SvgShieldExclamation = exports.SvgShieldExclamation = /*#__PURE__*/(0, _react.memo)(({
  height,
  width,
  fill
}) => /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Svg, {
  viewBox: "0 0 24 24",
  height: `${height}`,
  width: `${width}`
}, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  opacity: 0.4,
  d: "M12 22a.999.999 0 0 1-.581-.187l-3.65-2.607A9.016 9.016 0 0 1 4 11.883V4.426a1 1 0 0 1 1.206-.979 8 8 0 0 0 6.222-1.267.999.999 0 0 1 1.144 0 7.998 7.998 0 0 0 6.222 1.267A1 1 0 0 1 20 4.426v7.457a9.016 9.016 0 0 1-3.769 7.323l-3.65 2.607A.999.999 0 0 1 12 22"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  d: "M12 12.364a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1m0 3.995a.975.975 0 0 1-.92-.609.874.874 0 0 1-.08-.39 1.247 1.247 0 0 1 .02-.19.718.718 0 0 1 .06-.19.547.547 0 0 1 .09-.17.62.62 0 0 1 .12-.15 1.027 1.027 0 0 1 1.42 0 1 1 0 0 1 .12.15.568.568 0 0 1 .09.17.681.681 0 0 1 .06.19 1.136 1.136 0 0 1 .02.19 1.05 1.05 0 0 1-.08.39.981.981 0 0 1-.21.32 1.177 1.177 0 0 1-.33.22.989.989 0 0 1-.38.07z"
})));
const SvgFileInfoAlt = exports.SvgFileInfoAlt = /*#__PURE__*/(0, _react.memo)(({
  height,
  width,
  fill
}) => /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Svg, {
  viewBox: "0 0 24 24",
  height: `${height * 1.2}`,
  width: `${width * 1.2}`
}, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  opacity: 0.4,
  d: "m20 9-7-7H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3Z"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  d: "M20 9h-5a2 2 0 0 1-2-2V2zm-1 13a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1m0-5a1.034 1.034 0 0 1-.71-.29.991.991 0 0 1-.21-1.09 1.149 1.149 0 0 1 .21-.33 1.027 1.027 0 0 1 .33-.21.914.914 0 0 1 .76 0 1.034 1.034 0 0 1 .33.21 1.158 1.158 0 0 1 .21.33.99.99 0 0 1-.21 1.09 1.154 1.154 0 0 1-.33.21A1 1 0 0 1 19 17m-4 1H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2m0-4H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2m-5-4H9a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2"
})));
const SvgWallet = exports.SvgWallet = /*#__PURE__*/(0, _react.memo)(({
  height,
  width,
  fill
}) => /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Svg, {
  viewBox: "0 0 24 24",
  height: `${height * 1.2}`,
  width: `${width * 1.2}`
}, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  opacity: 0.4,
  d: "M2 5.333c0 1.228.995 2.223 2.222 2.223h15.556c1.227 0 2.222.994 2.222 2.222v8.889a2.222 2.222 0 0 1-2.222 2.222H4.222A2.222 2.222 0 0 1 2 18.667z"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  opacity: 0.5,
  d: "M4.222 7.556h13.334V5.11a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v.222c0 1.228.995 2.223 2.222 2.223z"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  d: "M22 17h-2.882a3.08 3.08 0 0 1-3.06-2.402A3.005 3.005 0 0 1 19 11h3z"
})));
const SvgComments = exports.SvgComments = /*#__PURE__*/(0, _react.memo)(({
  height,
  width,
  fill
}) => /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Svg, {
  viewBox: "0 0 24 24",
  height: `${height}`,
  width: `${width}`
}, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  d: "M21 22h-6a6.997 6.997 0 1 1 5.607-2.808l1.1 1.101A1 1 0 0 1 21 22"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  opacity: 0.3,
  d: "M8 15a6.987 6.987 0 0 1 9.87-6.378 7.995 7.995 0 1 0-14.19 6.284l-1.387 1.387A1 1 0 0 0 3 18h5.685A6.945 6.945 0 0 1 8 15"
})));
const SvgSetting = exports.SvgSetting = /*#__PURE__*/(0, _react.memo)(({
  height,
  width,
  fill
}) => /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Svg, {
  viewBox: "0 0 24 24",
  height: `${height / 1.1}`,
  width: `${width / 1.1}`
}, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  d: "M11.64 16a4 4 0 1 1 4-4 4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  opacity: 0.5,
  d: "M19.903 12.664a1 1 0 0 1 0-1.328l1.278-1.44a1 1 0 0 0 .118-1.164l-2-3.464a1.004 1.004 0 0 0-1.066-.48l-1.887.386a1 1 0 0 1-1.15-.663l-.608-1.827A1 1 0 0 0 13.639 2h-4a1 1 0 0 0-.949.684L8.081 4.51a1.003 1.003 0 0 1-1.15.663l-1.886-.386a1.006 1.006 0 0 0-1.066.48l-2 3.464a1 1 0 0 0 .118 1.164l1.278 1.44a1 1 0 0 1 0 1.328l-1.278 1.44a1 1 0 0 0-.118 1.164l2 3.464a.999.999 0 0 0 1.066.48l1.887-.386a.998.998 0 0 1 1.15.663l.608 1.827a1 1 0 0 0 .95.684h4a1 1 0 0 0 .948-.684l.609-1.827a1.003 1.003 0 0 1 1.149-.664l1.886.386a.996.996 0 0 0 1.067-.48l2-3.463a1 1 0 0 0-.118-1.164ZM11.64 16a4 4 0 1 1 4-4 4.005 4.005 0 0 1-4 4"
})));
const SvgApps = exports.SvgApps = /*#__PURE__*/(0, _react.memo)(({
  height,
  width,
  fill
}) => /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Svg, {
  viewBox: "0 0 24 24",
  height: `${height / 1.1}`,
  width: `${width / 1.1}`
}, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Rect, {
  width: 9,
  height: 9,
  x: 2,
  y: 2,
  fill: fill,
  rx: 1
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Rect, {
  width: 9,
  height: 9,
  x: 2,
  y: 13,
  fill: fill,
  opacity: 0.3,
  rx: 1
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Rect, {
  width: 9,
  height: 9,
  x: 13,
  y: 2,
  fill: fill,
  opacity: 0.3,
  rx: 1
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Rect, {
  width: 9,
  height: 9,
  x: 13,
  y: 13,
  fill: fill,
  opacity: 0.3,
  rx: 1
})));
const SvgBrowser = exports.SvgBrowser = /*#__PURE__*/(0, _react.memo)(({
  height,
  width,
  fill
}) => /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Svg, {
  viewBox: "0 0 24 24",
  height: `${height}`,
  width: `${width}`
}, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  opacity: 0.8,
  d: "M13 19v2.95c-.33.03-.66.05-1 .05s-.67-.02-1-.05V19a1 1 0 1 1 2 0m0-16.95V5a1 1 0 1 1-2 0V2.05c.33-.03.66-.05 1-.05s.67.02 1 .05M6 12a1.003 1.003 0 0 1-1 1H2.05c-.03-.33-.05-.66-.05-1s.02-.67.05-1H5c.552.002.998.448 1 1m16 0c0 .34-.02.67-.05 1H19a1 1 0 1 1 0-2h2.95c.03.33.05.66.05 1"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  opacity: 0.5,
  d: "M18 12a1 1 0 0 1 1-1h2.95A10.03 10.03 0 0 0 13 2.05V5a1 1 0 1 1-2 0V2.05A10.03 10.03 0 0 0 2.05 11H5c.552.002.998.448 1 1a1.003 1.003 0 0 1-1 1H2.05A10.03 10.03 0 0 0 11 21.95V19a1 1 0 1 1 2 0v2.95A10.03 10.03 0 0 0 21.95 13H19a1 1 0 0 1-1-1"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  d: "M8.465 16.535a1 1 0 0 1-.92-1.393l2.122-4.95a.995.995 0 0 1 .525-.525l4.95-2.121a1 1 0 0 1 1.312 1.312l-2.121 4.95a.995.995 0 0 1-.525.525l-4.95 2.121a.993.993 0 0 1-.393.081"
})));
const SvgBankCard = exports.SvgBankCard = /*#__PURE__*/(0, _react.memo)(({
  height,
  width,
  fill
}) => /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Svg, {
  viewBox: "0 0 1024 1024",
  height: `${height}`,
  width: `${width}`
}, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  d: "M204.8 184.32h655.36c45.056 0 81.92 36.864 81.92 81.92v409.6c0 45.056-36.864 81.92-81.92 81.92H204.8c-45.056 0-81.92-36.864-81.92-81.92v-409.6c0-45.056 36.864-81.92 81.92-81.92",
  opacity: 0.3
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  d: "M122.88 307.2h819.2v122.88h-819.2zM737.28 552.96h81.92c22.528 0 40.96 18.432 40.96 40.96s-18.432 40.96-40.96 40.96h-81.92c-22.528 0-40.96-18.432-40.96-40.96s18.432-40.96 40.96-40.96"
})));
const SvgLock = exports.SvgLock = /*#__PURE__*/(0, _react.memo)(({
  height,
  width,
  fill
}) => /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Svg, {
  viewBox: "0 0 24 24",
  height: `${height}`,
  width: `${width}`
}, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  d: "M21 10c-.6 0-1-.4-1-1V4h-5c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1M3 10c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1H4v5c0 .6-.4 1-1 1m6 12H3c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1s1 .4 1 1v5h5c.6 0 1 .4 1 1s-.4 1-1 1m12 0h-6c-.6 0-1-.4-1-1s.4-1 1-1h5v-5c0-.6.4-1 1-1s1 .4 1 1v6c0 .6-.4 1-1 1"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  opacity: 0.5,
  d: "M9 10h6c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2m2-1c0-.6.4-1 1-1s1 .4 1 1v1h2V9c0-1.7-1.3-3-3-3S9 7.3 9 9v1h2z"
})));
const SvgFileShieldAlt = exports.SvgFileShieldAlt = /*#__PURE__*/(0, _react.memo)(({
  height,
  width,
  fill
}) => /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Svg, {
  viewBox: "0 0 24 24",
  height: `${height}`,
  width: `${width}`
}, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  opacity: 0.5,
  d: "m18.493 9-7-7h-6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3Z"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  opacity: 0.5,
  d: "M18.493 9h-5a2 2 0 0 1-2-2V2Z"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  d: "M18.5 9h-5a2 2 0 0 1-2-2V2zm-1 13a1 1 0 0 1-.596-.196l-1.564-1.16a4.608 4.608 0 0 1-1.84-3.696v-2.314a1 1 0 0 1 1.212-.978 2.746 2.746 0 0 0 2.201-.466 1 1 0 0 1 1.174 0 2.744 2.744 0 0 0 2.201.466 1 1 0 0 1 1.212.978v2.314a4.608 4.608 0 0 1-1.84 3.697l-1.564 1.159A1 1 0 0 1 17.5 22m-7-4h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2m1-4h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2m-3-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2"
})));
const SvgShieldCheck = exports.SvgShieldCheck = /*#__PURE__*/(0, _react.memo)(({
  height,
  width,
  fill
}) => /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Svg, {
  viewBox: "0 0 24 24",
  height: `${height}`,
  width: `${width}`
}, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  opacity: 0.5,
  d: "M12 22a.999.999 0 0 1-.581-.187l-3.65-2.607A9.016 9.016 0 0 1 4 11.883V4.426a1 1 0 0 1 1.206-.979 8 8 0 0 0 6.222-1.267.999.999 0 0 1 1.144 0 7.998 7.998 0 0 0 6.222 1.267A1 1 0 0 1 20 4.426v7.457a9.016 9.016 0 0 1-3.769 7.323l-3.65 2.607A.999.999 0 0 1 12 22"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  d: "M10.85 14.7a1 1 0 0 1-.707-.293l-1.6-1.6a1 1 0 0 1 1.414-1.414l.893.893 2.693-2.693a1 1 0 1 1 1.414 1.414l-3.4 3.4a1 1 0 0 1-.707.293"
})));
const SvgBookReader = exports.SvgBookReader = /*#__PURE__*/(0, _react.memo)(({
  height,
  width,
  fill
}) => /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Svg, {
  viewBox: "0 0 24 24",
  height: `${height}`,
  width: `${width}`
}, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  d: "M12 9.695a3.857 3.857 0 1 1 .001-7.714A3.857 3.857 0 0 1 12 9.695"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  opacity: 0.5,
  d: "M6 9.98a11.91 11.91 0 0 0-2.18.21.996.996 0 0 0-.82.98v8.25a1.008 1.008 0 0 0 1.18.99A9.764 9.764 0 0 1 6 20.23a9.893 9.893 0 0 1 5.45 1.63c.166.101.356.156.55.16V11.6a11.894 11.894 0 0 0-6-1.62"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  opacity: 0.4,
  d: "M20.18 10.19A11.79 11.79 0 0 0 12 11.6v10.42c.194-.004.384-.059.55-.16A9.893 9.893 0 0 1 18 20.23c.611.003 1.22.063 1.82.18a1.008 1.008 0 0 0 1.18-.99v-8.25a.996.996 0 0 0-.82-.98"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  opacity: 0.3,
  d: "M15.067 8.537c-.074-.044-.153-.068-.228-.109A3.838 3.838 0 0 1 12 9.695a3.833 3.833 0 0 1-2.837-1.263 5.92 5.92 0 0 0-1.93 1.629c1.676.174 3.303.685 4.767 1.54a11.78 11.78 0 0 1 4.757-1.55 5.981 5.981 0 0 0-1.69-1.514"
})));
const SvgDesktopCloudAlt = exports.SvgDesktopCloudAlt = /*#__PURE__*/(0, _react.memo)(({
  height,
  width,
  fill
}) => /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Svg, {
  viewBox: "0 0 24 24",
  height: `${height}`,
  width: `${width}`
}, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  opacity: 0.5,
  d: "M19 2H7.527a4 4 0 0 1 3.545 2.202A2.998 2.998 0 0 1 10 10H4.5A2.5 2.5 0 0 1 2 7.5V15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3M3.586 5.173A4 4 0 0 1 7.513 2H5a3 3 0 0 0-3 3v2.5a2.5 2.5 0 0 1 1.586-2.327"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  opacity: 0.5,
  d: "M8 16h8v6H8z"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  d: "M2 13h20v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  opacity: 0.4,
  d: "M10 10H4.5a2.5 2.5 0 0 1-.914-4.827 4 4 0 0 1 7.486-.97A2.998 2.998 0 0 1 10 10"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  d: "M19 22H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2"
})));
const SvgChannel = exports.SvgChannel = /*#__PURE__*/(0, _react.memo)(({
  height,
  width,
  fill
}) => /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Svg, {
  viewBox: "0 0 24 24",
  height: `${height}`,
  width: `${width}`
}, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  d: "M4 22a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  opacity: 0.5,
  d: "M10.28 15.019a1 1 0 0 0-1.37-.35L5.73 16.56a2.999 2.999 0 0 1 1.148 1.644L9.93 16.39a1 1 0 0 0 .348-1.371"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  opacity: 0.3,
  d: "M20 22a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  opacity: 0.5,
  d: "M18.269 16.558 15.09 14.67a1 1 0 0 0-1.022 1.72l3.052 1.813a2.998 2.998 0 0 1 1.148-1.645"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  opacity: 0.3,
  d: "M12 8a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  opacity: 0.5,
  d: "M12 8a2.965 2.965 0 0 1-1-.184V11a1 1 0 0 0 2 0V7.816A2.965 2.965 0 0 1 12 8"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Circle, {
  cx: 12,
  cy: 14,
  r: 3,
  fill: fill
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: fill,
  d: "M12 18a4 4 0 1 1 4-4 4.004 4.004 0 0 1-4 4m0-6a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2"
})));
const SvgLogo = exports.SvgLogo = /*#__PURE__*/(0, _react.memo)(({
  height,
  width
}) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
  style: {
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center'
  }
}, /*#__PURE__*/_react.default.createElement(_lottieReactNative.default, {
  source: require('../assets/lottie/blockchain.json'),
  autoPlay: true,
  loop: true,
  style: {
    width: width / 1.5,
    height: height / 1.5
  },
  resizeMode: "cover"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Svg, {
  viewBox: "0 0 24 24",
  height: `${height}`,
  width: `${width}`,
  style: {
    position: 'absolute'
  }
}, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: "url(#logo_svg__a)",
  fillRule: "evenodd",
  d: "M11.272 1.09a3 3 0 0 1 1.456 0l6.757 1.689A2 2 0 0 1 21 4.719v8.399a9.09 9.09 0 0 1-5.025 8.13l-3.08 1.54a2 2 0 0 1-1.79 0l-3.08-1.54A9.09 9.09 0 0 1 3 13.119V4.719a2 2 0 0 1 1.515-1.94z",
  clipRule: "evenodd",
  opacity: 0.2
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Path, {
  fill: "url(#logo_svg__b)",
  fillRule: "evenodd",
  d: "M12 3a1 1 0 0 0-.242.03L5 4.72v8.398a7.09 7.09 0 0 0 3.92 6.342L12 21l3.08-1.54A7.09 7.09 0 0 0 19 13.118V4.719l-6.757-1.69A1 1 0 0 0 12 3m-.728-1.91a3 3 0 0 1 1.456 0l6.757 1.689A2 2 0 0 1 21 4.719v8.399a9.09 9.09 0 0 1-5.025 8.13l-3.08 1.54a2 2 0 0 1-1.79 0l-3.08-1.54A9.09 9.09 0 0 1 3 13.119V4.719a2 2 0 0 1 1.515-1.94z",
  clipRule: "evenodd"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Defs, null, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.LinearGradient, {
  id: "logo_svg__a",
  x1: 3,
  x2: 24.564,
  y1: 1,
  y2: 18.644,
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Stop, {
  stopColor: "#4EA2EA"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Stop, {
  offset: 0.245,
  stopColor: "#484DFF"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Stop, {
  offset: 0.484,
  stopColor: "#CD0EF3"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Stop, {
  offset: 0.724,
  stopColor: "#F640BB"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Stop, {
  offset: 0.95,
  stopColor: "#FB6D64"
})), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.LinearGradient, {
  id: "logo_svg__b",
  x1: 3,
  x2: 24.564,
  y1: 1,
  y2: 18.644,
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Stop, {
  stopColor: "#4EA2EA"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Stop, {
  offset: 0.245,
  stopColor: "#484DFF"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Stop, {
  offset: 0.484,
  stopColor: "#CD0EF3"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Stop, {
  offset: 0.724,
  stopColor: "#F640BB"
}), /*#__PURE__*/_react.default.createElement(_reactNativeSvg.Stop, {
  offset: 0.95,
  stopColor: "#FB6D64"
}))))));