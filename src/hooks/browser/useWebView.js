"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWebView = void 0;
var _react = require("react");
var _useWebViewContext = require("./useWebViewContext");
// @ts-ignore

const useWebView = () => {
  const value = (0, _react.useContext)(_useWebViewContext.WebViewContext);
  return {
    ...value
  };
};
exports.useWebView = useWebView;