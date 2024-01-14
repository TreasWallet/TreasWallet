"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAndroid = exports.WEBSITE_URL = exports.WEBSITE_HOST = exports.EMAIL_ADDRESS = void 0;
var _reactNative = require("react-native");
var _env = require("@env");
// @ts-ignore

const WEBSITE_HOST = exports.WEBSITE_HOST = _env.ENV_WEBSITE_HOST;
const WEBSITE_URL = exports.WEBSITE_URL = _env.ENV_WEBSITE_URL;
const EMAIL_ADDRESS = exports.EMAIL_ADDRESS = _env.ENV_EMAIL_ADDRESS;
const isAndroid = exports.isAndroid = _reactNative.Platform.OS === 'android';