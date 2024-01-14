"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWallet = void 0;
var _react = require("react");
var _useWalletApp = require("./useWalletApp");
const useWallet = () => {
  const value = (0, _react.useContext)(_useWalletApp.WalletContext);
  return {
    ...value
  };
};
exports.useWallet = useWallet;