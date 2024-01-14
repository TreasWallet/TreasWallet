"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTransactionContext = exports.useTransaction = exports.WalletTransactionContext = void 0;
var _react = require("react");
var _bignumber = _interopRequireDefault(require("bignumber.js"));
var _ethers = require("../../lib/ethers");
var _native = require("@react-navigation/native");
var _useWallet = require("./useWallet");
var _utils = require("ethers/lib/utils");
var _wallet = require("../../config/wallet");
var _reactI18next = require("react-i18next");
var _reactNativeToastMessage = _interopRequireDefault(require("react-native-toast-message"));
var _useRpc = require("../rpc/useRpc");
var _useRpcProvider = require("../rpc/useRpcProvider");
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const useTransactionContext = () => {
  const {
    params
  } = (0, _native.useRoute)();
  const {
    asset
  } = params;
  const {
    address,
    isTron,
    node
  } = (0, _useWallet.useWallet)();
  const [to, setTo] = (0, _react.useState)('');
  const [amount, setAmount] = (0, _react.useState)('');
  const {
    t
  } = (0, _reactI18next.useTranslation)();
  const bn = (0, _react.useMemo)(() => (0, _bignumber.default)(amount), [amount]);
  const [free, setFree] = (0, _react.useState)('0');
  const [populatedTransaction, setTransaction] = (0, _react.useState)();
  const [gasPrice, setGasPrice] = (0, _react.useState)('');
  const [estimateGas, setEstimateGas] = (0, _react.useState)('');
  const [nonce, setNonce] = (0, _react.useState)('');
  const [loading, setLoading] = (0, _react.useState)(false);
  const [value] = (0, _storage.useStorage)(`${_storage2.BALANCE_KEY}_${asset?.id}_${address}`, '0');
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
  const balance = (0, _react.useMemo)(() => (0, _bignumber.default)(value), [value]);
  const isAmount = (0, _react.useMemo)(() => bn.isPositive() && (asset.isERC721 || Number(bn.decimalPlaces()) <= asset.decimals && bn.gt(0) && bn.lte(balance)), [bn, asset, balance]);
  const isTo = (0, _react.useMemo)(() => !isTron && (0, _ethers.isAddress)(to) || isTron && (0, _ethers.isAddressTrx)(to), [to, isTron]);
  const isAsset = (0, _react.useMemo)(() => !isTron && (0, _ethers.isAddress)(asset.id) || isTron && (0, _ethers.isAddressTrx)(asset.id), [asset, isTron]);
  const transaction = (0, _react.useMemo)(() => populatedTransaction ? {
    ...populatedTransaction,
    nonce: Number(nonce || '0'),
    gasLimit: (0, _utils.parseUnits)(estimateGas || '0', 0),
    gasPrice: (0, _utils.parseUnits)(gasPrice || '0', _ethers.GWEI) //parseUnits(gasPrice || '0', 0),
  } : undefined, [populatedTransaction, gasPrice, estimateGas, nonce]);
  const isConfirm = (0, _react.useMemo)(() => !loading && isAmount && isTo && !!transaction, [isAmount, isTo, transaction, loading]);
  (0, _react.useEffect)(() => {
    if (gasPrice && estimateGas) {
      try {
        const frreBN = (0, _bignumber.default)((0, _utils.parseUnits)(gasPrice, _ethers.GWEI).toString()).multipliedBy((0, _bignumber.default)(estimateGas));
        const free = frreBN.isPositive() ? frreBN.toString() : '0';
        setFree(free);
      } catch (e) {}
    }
  }, [gasPrice, estimateGas]);
  (0, _react.useEffect)(() => {
    setLoading(true);
    const id = setTimeout(() => {
      getData();
    }, 500);
    return () => clearTimeout(id);
  }, [to, amount, asset, isTo, isAmount, isAsset, address]);
  (0, _react.useEffect)(() => {
    setLoading(true);
    const id = setTimeout(() => {
      isTron ? setLoading(false) : getEstimateGas();
    }, 500);
    return () => clearTimeout(id);
  }, [provider.connection.url, populatedTransaction]);
  const getData = (0, _react.useCallback)(async () => {
    try {
      if (isAsset) {
        const value = (0, _utils.parseUnits)(isAmount ? (0, _bignumber.default)(amount).toString() : '0', asset.isERC721 ? 0 : asset.decimals);
        const t = {
          from: (0, _ethers.getAddress)(address || _wallet.ZERO_ADDRESS),
          to: (0, _ethers.getAddress)(asset.id),
          chainId: Number(node.chainId)
        };
        console.log(t);
        const abi = new _ethers.ethers.Contract((0, _ethers.getAddress)(asset.id), asset.isERC721 ? _ethers.IERC721ABI : _ethers.IERC20ABI);
        const d = asset.isERC721 ? await abi.populateTransaction.transferFrom((0, _ethers.getAddress)(address || _wallet.ZERO_ADDRESS), (0, _ethers.getAddress)(isTo ? to : _wallet.ZERO_ADDRESS), value) : await abi.populateTransaction.transfer((0, _ethers.getAddress)(isTo ? to : _wallet.ZERO_ADDRESS), value);
        if (d.data) {
          t.data = d.data;
        }
        setTransaction(t);
      } else {
        const t = {
          from: (0, _ethers.getAddress)(address || _wallet.ZERO_ADDRESS),
          to: (0, _ethers.getAddress)(isTo ? to : _wallet.ZERO_ADDRESS),
          chainId: Number(node.chainId)
        };
        if (isAmount) {
          t.value = (0, _utils.parseUnits)(amount, node.decimals);
        }
        setTransaction(t);
      }
      //d.data && setData(d.data);
    } catch (e) {
      _reactNativeToastMessage.default.show({
        type: 'error',
        text1: t('wallet.send.deeplink_failure')
      });
    }
  }, [to, amount, asset, isTo, isAsset, isAmount, address]);
  const getEstimateGas = (0, _react.useCallback)(async () => {
    setLoading(true);
    try {
      if (provider && populatedTransaction && populatedTransaction.from) {
        const gasPrice = await provider.getGasPrice();
        setGasPrice((0, _ethers.formatUnits)(gasPrice, _ethers.GWEI));
        populatedTransaction.gasPrice = gasPrice;
        const estimateGas = await provider.estimateGas(populatedTransaction);
        setEstimateGas(estimateGas.toString());
        const nonce = await provider.getTransactionCount(populatedTransaction.from, 'pending');
        setNonce(`${nonce}`);
      }
    } catch (e) {} finally {
      setLoading(false);
    }
  }, [provider.connection.url, populatedTransaction]);

  /* useEffect(() => {
     const id = setTimeout(() => {
       getSuggestedGasFees(node.chainId).then(console.log);
     }, 500);
     return () => clearTimeout(id);
   }, [node]);*/
  return {
    to,
    setTo,
    amount,
    setAmount,
    isAmount,
    isTo,
    asset,
    node,
    address,
    isAsset,
    bn,
    transaction,
    gasPrice,
    estimateGas,
    loading,
    nonce,
    setGasPrice,
    setEstimateGas,
    setNonce,
    free,
    isConfirm,
    provider
  };
};
exports.useTransactionContext = useTransactionContext;
const useTransaction = () => {
  const value = (0, _react.useContext)(WalletTransactionContext);
  return {
    ...value
  };
};
// @ts-ignore
exports.useTransaction = useTransaction;
const WalletTransactionContext = exports.WalletTransactionContext = /*#__PURE__*/(0, _react.createContext)(null);