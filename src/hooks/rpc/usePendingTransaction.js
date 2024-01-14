"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePendingTransaction = void 0;
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
var _react = require("react");
var _useRpc = require("./useRpc");
var _useRpcProvider = require("./useRpcProvider");
var _useWallet = require("../wallet/useWallet");
const usePendingTransaction = () => {
  const {
    node
  } = (0, _useWallet.useWallet)();
  const [pending, setPending] = (0, _storage.useStorage)(`${_storage2.TRANSACTION_HASH}_${node.id}`);
  const {
    rpc
  } = (0, _useRpc.useRpc)({
    node
  });
  const {
    provider
  } = (0, _useRpcProvider.useRpcProvider)({
    rpc
  });
  (0, _react.useEffect)(() => {
    if (pending) {
      const id = setInterval(() => {
        getPending();
      }, 5000);
      return () => clearInterval(id);
    }
  }, [pending, provider.connection.url]);
  const getPending = (0, _react.useCallback)(() => {
    if (pending && provider) {
      provider.getTransactionReceipt(pending).then(() => {
        setPending('');
      }).catch(console.log);
    }
  }, [pending, provider.connection.url]);
  return {
    pending,
    node
  };
};
exports.usePendingTransaction = usePendingTransaction;