"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOpenURL = void 0;
var _react = require("react");
var _native = require("@react-navigation/native");
var _reactNative = require("react-native");
const useOpenURL = () => {
  const navigation = (0, _native.useNavigation)();
  const canOpenURL = (0, _react.useCallback)(async value => {
    /* const supported = await Linking.canOpenURL(url);
                if (supported) {
                  await Linking.openURL(url);
                }*/
    // @ts-ignore
    navigation.navigate('WebViewScreen', {
      value
    });
  }, []);
  const onOpenURL = (0, _react.useCallback)(async url => {
    const supported = await _reactNative.Linking.canOpenURL(url);
    if (supported) {
      await _reactNative.Linking.openURL(url);
    }
  }, []);
  return {
    canOpenURL,
    onOpenURL
  };
};
exports.useOpenURL = useOpenURL;