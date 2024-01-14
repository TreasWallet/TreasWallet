"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useVersion = void 0;
var _react = require("react");
var _reactNativeDeviceInfo = require("react-native-device-info");
var _app = require("../../config/app");
var _useOpenURL = require("./useOpenURL");
const useVersion = () => {
  const version = (0, _react.useMemo)(() => (0, _reactNativeDeviceInfo.getVersion)(), []);
  const buildNumber = (0, _react.useMemo)(() => (0, _reactNativeDeviceInfo.getBuildNumber)(), []);
  const website = (0, _react.useMemo)(() => _app.WEBSITE_HOST, []);
  const websiteUrl = (0, _react.useMemo)(() => _app.WEBSITE_URL, []);
  const {
    canOpenURL
  } = (0, _useOpenURL.useOpenURL)();
  const readableVersion = (0, _react.useMemo)(() => `${version}.${buildNumber}`, [buildNumber, version]);
  const canWebsite = (0, _react.useCallback)(() => canOpenURL(websiteUrl), []);
  return {
    readableVersion,
    version,
    buildNumber,
    website,
    canWebsite,
    websiteUrl
  };
};
exports.useVersion = useVersion;