"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCosImageSource = exports.getCosAuth = void 0;
var _env = require("@env");
var _reactNativeQuickCrypto = _interopRequireDefault(require("react-native-quick-crypto"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// @ts-ignore

const getCosAuth = (pathname, expires = 3600, method = 'get') => {
  const now = Math.round(getSkewTime() / 1000) - 1;
  const exp = now + expires;
  const qSignAlgorithm = 'sha1';
  const qAk = _env.ENV_COR_SECRET_ID;
  const qSignTime = now + ';' + exp;
  const qKeyTime = now + ';' + exp;
  const signKey = _reactNativeQuickCrypto.default.createHmac(qSignAlgorithm, _env.ENV_COR_SECRET_KEY).update(qKeyTime).digest('hex');
  const formatString = Buffer.from([method, pathname, '', '', ''].join('\n'), 'utf8');
  const res = _reactNativeQuickCrypto.default.createHash(qSignAlgorithm).update(formatString).digest('hex');
  const stringToSign = [qSignAlgorithm, qSignTime, res, ''].join('\n');
  const qSignature = _reactNativeQuickCrypto.default.createHmac(qSignAlgorithm, signKey).update(stringToSign).digest('hex');
  return `q-sign-algorithm=${qSignAlgorithm}&q-ak=${qAk}&q-sign-time=${qSignTime}&q-key-time=${qKeyTime}&q-header-list=&q-url-param-list=&q-signature=${qSignature}`;
};
exports.getCosAuth = getCosAuth;
const getCosImageSource = pathname => {
  const Authorization = getCosAuth(pathname);
  return {
    uri: `${_env.ENV_ASSETS_URL}${pathname}`,
    headers: {
      Authorization
    }
  };
};
exports.getCosImageSource = getCosImageSource;
const getSkewTime = offset => Date.now() + (offset || 0);