"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useShare = void 0;
var _app = require("../../config/app");
var _reactI18next = require("react-i18next");
var _react = require("react");
var _reactNative = require("react-native");
const useShare = () => {
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const onShare = (0, _react.useCallback)(async (url = _app.WEBSITE_URL, title = `${t('onboarding_carousel.title1')}`,
  // ${WEBSITE_URL}
  message = `${t('onboarding_carousel.subtitle1')} ${_app.WEBSITE_URL}`) => {
    try {
      await _reactNative.Share.share({
        url,
        title,
        message
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return {
    onShare
  };
};
exports.useShare = useShare;