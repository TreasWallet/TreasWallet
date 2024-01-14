"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useEstimateGas = void 0;
var _react = require("react");
var _ethers = require("../../lib/ethers");
var _useRpc = require("../rpc/useRpc");
var _useRpcProvider = require("../rpc/useRpcProvider");
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
var _useWallet = require("./useWallet");
const useEstimateGas = ({
  row
}) => {
  const [showCustomNonce] = (0, _storage.useStorage)(_storage2.SHOW_CUSTOM_NONCE_KEY, false);
  const [transaction, setTransaction] = (0, _react.useState)();
  const [gasPrice, setGasPrice] = (0, _react.useState)('');
  const [estimateGas, setEstimateGas] = (0, _react.useState)('');
  const [nonce, setNonce] = (0, _react.useState)('');
  const [loading, setLoading] = (0, _react.useState)(false);
  const {
    node
  } = (0, _useWallet.useWallet)();
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
    const id = setTimeout(() => {
      getData();
    }, 50);
    return () => clearTimeout(id);
  }, [row]);
  (0, _react.useEffect)(() => {
    const id = setTimeout(() => {
      getEstimateGas();
    }, 50);
    return () => clearTimeout(id);
  }, [transaction, provider.connection.url]);
  const getData = (0, _react.useCallback)(async () => {
    if (row) {
      const t = {
        from: row.from,
        to: row.to
      };
      if (row.value) {
        t.value = _ethers.ethers.utils.parseUnits(_ethers.ethers.utils.formatUnits(row.value, node.decimals), node.decimals);
      }
      if (row.data) {
        t.data = row.data;
      }
      setTransaction(t);
    } else {
      setTransaction(undefined);
    }
  }, [row]);
  const getEstimateGas = (0, _react.useCallback)(async () => {
    try {
      setLoading(true);
      if (transaction) {
        const gasPrice = await provider.getGasPrice();
        //setGasPrice(gasPrice.toString());
        setGasPrice((0, _ethers.formatUnits)(gasPrice, _ethers.GWEI));
        transaction.gasPrice = gasPrice;
        const estimateGas = await provider.estimateGas(transaction);
        setEstimateGas(estimateGas.toString());
        if (transaction.from && showCustomNonce) {
          const nonce = await provider.getTransactionCount(transaction.from, 'pending');
          setNonce(`${nonce}`);
        }
      } else {
        setGasPrice('');
        setEstimateGas('');
      }
    } catch (e) {
      setGasPrice('');
      setEstimateGas('');
    } finally {
      setLoading(false);
    }
  }, [provider.connection.url, transaction, showCustomNonce]);
  return {
    transaction,
    gasPrice,
    estimateGas,
    loading,
    nonce
  };
};
exports.useEstimateGas = useEstimateGas;