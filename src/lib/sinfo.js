"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setItemSInfo = exports.getItemSInfo = exports.getAllItemsSInfo = void 0;
var _reactNativeSensitiveInfo = _interopRequireDefault(require("react-native-sensitive-info"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const options = {
  sharedPreferencesName: 'io.treas.wallet',
  keychainService: 'TreasWalletKeychain'
};
const setItemSInfo = async (key, value) => await _reactNativeSensitiveInfo.default.setItem(key, value, options);
exports.setItemSInfo = setItemSInfo;
const getItemSInfo = async key => await _reactNativeSensitiveInfo.default.getItem(key, options);
exports.getItemSInfo = getItemSInfo;
const getAllItemsSInfo = async () => await _reactNativeSensitiveInfo.default.getAllItems(options);
exports.getAllItemsSInfo = getAllItemsSInfo;