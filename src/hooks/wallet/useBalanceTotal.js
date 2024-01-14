"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useBalanceTotal = void 0;
var _react = require("react");
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
var _bignumber = _interopRequireDefault(require("bignumber.js"));
var _ethers = require("../../lib/ethers");
var _price = require("../../lib/price");
var _useWallet = require("./useWallet");
var _useRpcProvider = require("../rpc/useRpcProvider");
var _useRpc = require("../rpc/useRpc");
var _usePrimaryCurrency = require("../rpc/usePrimaryCurrency");
var _useToken = require("./useToken");
var _useSwaps = require("../rpc/useSwaps");
var _useAssets = require("./useAssets");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const useBalanceTotal = () => {
  const [loading, setLoading] = (0, _react.useState)(true);
  const {
    address,
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
  const {
    primaryCurrency
  } = (0, _usePrimaryCurrency.usePrimaryCurrency)({
    node
  });
  const [primarycurrency] = (0, _storage.useStorage)(_storage2.PRIMARY_CURRENCY_KEY, false);
  const {
    info
  } = (0, _useToken.useToken)({
    token: primaryCurrency,
    rpc
  });
  const {
    swap
  } = (0, _useSwaps.useSwaps)({
    node
  });
  const {
    assets
  } = (0, _useAssets.useAssets)({
    node
  });
  const amountCurrency = (0, _react.useMemo)(() => primarycurrency ? node : info, [primarycurrency, info, node]);
  const [value, setValue] = (0, _storage.useStorage)(`${_storage2.BALANCE_TOTAL_KEY}_${amountCurrency?.id}`, '0');
  const totalPrice = (0, _react.useMemo)(() => (0, _bignumber.default)(value), [value]);
  (0, _react.useEffect)(() => {
    const id = setInterval(() => {
      getBalance();
    }, 1000 * 60 * 12);
    const id2 = setTimeout(() => {
      getBalance();
    }, 1000);
    return () => {
      clearInterval(id);
      clearTimeout(id2);
    };
  }, [address, provider.connection.url, amountCurrency, assets]);
  const getBalance = (0, _react.useCallback)(async () => {
    setLoading(true);
    try {
      if (amountCurrency && address && swap) {
        const addr = (0, _ethers.getAddress)(address);
        const t = await Promise.all(assets.filter(v => !v.isERC721).map(async asset => {
          try {
            const price = await (0, _price.getPrice)(swap.router_address, asset, amountCurrency, provider);
            const bn = (0, _bignumber.default)(price);
            if (bn.gt(0)) {
              await _storage.storage.setStringAsync(`${_storage2.SWAP_PRICE}_${asset.id}`, price);
              if ((0, _ethers.isAddress)(asset.id) || (0, _ethers.isAddressTrx)(asset.id)) {
                const id = (0, _ethers.getAddress)(asset.id);
                const abi = new _ethers.ethers.Contract(id, _ethers.IERC20ABI, provider);
                const wei = await abi.balanceOf(addr);
                const unit = (0, _ethers.formatUnits)(wei, asset.decimals);
                await _storage.storage.setStringAsync(`${_storage2.BALANCE_KEY}_${asset.id}_${address}`, unit);
                return (0, _bignumber.default)(unit).multipliedBy(price);
              } else {
                const wei = await provider.getBalance(addr);
                const unit = (0, _ethers.formatUnits)(wei, asset.decimals);
                await _storage.storage.setStringAsync(`${_storage2.BALANCE_KEY}_${asset.id}_${address}`, unit);
                return (0, _bignumber.default)(unit).multipliedBy(price);
              }
            } else {
              return (0, _bignumber.default)(0);
            }
          } catch (e) {
            return (0, _bignumber.default)(0);
          }
        }));
        const total = t.reduce((a, b) => a.plus(b), (0, _bignumber.default)(0));
        setValue(total.toString());
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [address, provider.connection.url, amountCurrency, assets]);
  return {
    loading,
    amountCurrency,
    totalPrice
  };
};
exports.useBalanceTotal = useBalanceTotal;