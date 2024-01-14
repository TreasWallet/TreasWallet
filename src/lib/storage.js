"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStorage = exports.storage = void 0;
var _reactNativeMmkvStorage = require("react-native-mmkv-storage");
const storage = exports.storage = new _reactNativeMmkvStorage.MMKVLoader().withEncryption().initialize();
const useStorage = (key, defaultValue) => (0, _reactNativeMmkvStorage.useMMKVStorage)(key, storage, defaultValue);
exports.useStorage = useStorage;