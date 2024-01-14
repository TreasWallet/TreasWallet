"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWalletApp = exports.WalletContext = void 0;
var _react = require("react");
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
var _ethers = require("../../lib/ethers");
var _useNode = require("../rpc/useNode");
var _useRpc = require("../rpc/useRpc");
const useWalletApp = () => {
  const [wallets, setWallets] = (0, _storage.useStorage)(_storage2.WALLETS_KEY, []);
  const [wallet, setWallet] = (0, _storage.useStorage)(_storage2.WALLET_KEY);
  const {
    isTron,
    node,
    isSwap
  } = (0, _useNode.useNode)();
  const isEmpty = (0, _react.useMemo)(() => !wallets.length, [wallets.length]);
  const address = (0, _react.useMemo)(() => wallet || (wallets.length > 0 ? wallets[0] : undefined), [wallet, wallets]);
  const descAddress = (0, _react.useMemo)(() => address ? (0, _ethers.descriptionAddress)(address, isTron) : '', [isTron, address]);
  const {
    rpc
  } = (0, _useRpc.useRpc)({
    node
  });
  return {
    wallets,
    isEmpty,
    address,
    descAddress,
    setWallet,
    setWallets,
    node,
    isTron,
    isSwap,
    rpc
  };
};

// @ts-ignore
exports.useWalletApp = useWalletApp;
const WalletContext = exports.WalletContext = /*#__PURE__*/(0, _react.createContext)(null);