"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOpenWallet = void 0;
var _react = require("react");
var _ethers = require("ethers");
var _sinfo = require("../../lib/sinfo");
var _storage = require("../../config/storage");
var _ethers2 = require("../../lib/ethers");
const useOpenWallet = ({
  address
}) => {
  const [wallet, setWallet] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    const id = setTimeout(() => {
      openWallet();
    }, 500);
    return () => {
      clearTimeout(id);
      setWallet(undefined);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);
  const openWallet = (0, _react.useCallback)(async () => {
    if (address) {
      const seedPhrase = await (0, _sinfo.getItemSInfo)(`${_storage.WALLET_KEY}_${address}`);
      if ((0, _ethers2.isValidMnemonic)(seedPhrase)) {
        const node = (0, _ethers2.fromMnemonic)(seedPhrase);
        if (node) {
          const path = await (0, _sinfo.getItemSInfo)(`${_storage.WALLET_PATH_KEY}_${address}`);
          const hdnode = node.derivePath(path || _ethers.ethers.utils.defaultPath);
          const HDwallet = new _ethers.ethers.Wallet(hdnode);
          if (HDwallet._isSigner) {
            setWallet(HDwallet);
          }
        }
      } else if ((0, _ethers2.isValidPrivateKey)(seedPhrase)) {
        const HEXwallet = new _ethers.ethers.Wallet(seedPhrase);
        if (HEXwallet._isSigner) {
          setWallet(HEXwallet);
        }
      }
    }
  }, [address]);
  return {
    wallet
  };
};
exports.useOpenWallet = useOpenWallet;