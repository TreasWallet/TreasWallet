"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pbkdf2 = void 0;
var _reactNativeQuickCrypto = _interopRequireDefault(require("react-native-quick-crypto"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const pbkdf2 = exports.pbkdf2 = _reactNativeQuickCrypto.default.pbkdf2Sync;