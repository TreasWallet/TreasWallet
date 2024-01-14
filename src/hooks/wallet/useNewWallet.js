"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useNewWallet = void 0;
var _react = require("react");
var _ethers = require("../../lib/ethers");
var _sinfo = require("../../lib/sinfo");
var _storage = require("../../config/storage");
var _useWallet = require("./useWallet");
var _storage2 = require("../../lib/storage");
// useNewWallet 新钱包
const useNewWallet = () => {
  const {
    setWallets,
    setWallet
  } = (0, _useWallet.useWallet)();
  const newWallet = (0, _react.useCallback)(
  // @ts-ignore
  async (password, seed, backed = false, path) => {
    try {
      if ((0, _ethers.isValidMnemonic)(seed)) {
        const node = (0, _ethers.fromMnemonic)(seed);
        if (node) {
          const hdnode = node.derivePath(path || _ethers.ethers.utils.defaultPath);
          const HDwallet = new _ethers.ethers.Wallet(hdnode);
          if (HDwallet._isSigner) {
            const address = HDwallet.address;
            if (password) {
              const passwordHash = (0, _ethers.createHash)(password);
              await (0, _sinfo.setItemSInfo)(_storage.PERSISTENCE_KEY, passwordHash);
            }
            await (0, _sinfo.setItemSInfo)(`${_storage.WALLET_PATH_KEY}_${address}`, hdnode.path);
            await (0, _sinfo.setItemSInfo)(`${_storage.WALLET_KEY}_${address}`, seed);
            setWallets(prevValue => Array.from(new Set([...prevValue, address])));
            if (password) {
              setWallet(address);
            }
            await _storage2.storage.setBoolAsync(`${_storage.WALLET_BACK_KEY}_${address}`, backed);
            return true;
          }
        }
      } else if ((0, _ethers.isValidPrivateKey)(seed)) {
        const wallet = new _ethers.ethers.Wallet(seed);
        if (wallet._isSigner) {
          const address = wallet.address;
          if (password) {
            const passwordHash = (0, _ethers.createHash)(password);
            await (0, _sinfo.setItemSInfo)(_storage.PERSISTENCE_KEY, passwordHash);
          }
          await (0, _sinfo.setItemSInfo)(`${_storage.WALLET_KEY}_${address}`, seed);
          setWallets(prevValue => Array.from(new Set([...prevValue, address])));
          if (password) {
            setWallet(address);
          }
          await _storage2.storage.setBoolAsync(`${_storage.WALLET_BACK_KEY}_${address}`, backed);
          return true;
        }
      }
      return false;
    } catch (e) {
      throw e;
    }
  }, [setWallets]);
  return {
    newWallet
  };
};
exports.useNewWallet = useNewWallet;