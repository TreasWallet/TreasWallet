"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePrice = void 0;
var _react = require("react");
var _bignumber = _interopRequireDefault(require("bignumber.js"));
var _useRpc = require("../rpc/useRpc");
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
var _usePriceSymbol = require("./usePriceSymbol");
var _useSwaps = require("../rpc/useSwaps");
var _useRpcProvider = require("../rpc/useRpcProvider");
var _price = require("../../lib/price");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const usePrice = ({
  asset,
  node
}) => {
  const isSwap = (0, _react.useMemo)(() => node.swaps.length > 0, [node]);
  const {
    rpc
  } = (0, _useRpc.useRpc)({
    node
  });
  //const {primaryCurrency} = usePrimaryCurrency({node});
  const {
    provider
  } = (0, _useRpcProvider.useRpcProvider)({
    rpc
  });
  const [loading, setLoading] = (0, _react.useState)(false);
  const [value, setPrice] = (0, _storage.useStorage)(`${_storage2.SWAP_PRICE}_${asset.id}`, '0');
  const {
    priceSymbol: amountCurrency
  } = (0, _usePriceSymbol.usePriceSymbol)({
    node
  });
  const price = (0, _react.useMemo)(() => (0, _bignumber.default)(value), [value]);
  const {
    swap
  } = (0, _useSwaps.useSwaps)({
    node
  });
  (0, _react.useEffect)(() => {
    const id = setTimeout(() => {
      isSwap && !asset?.isERC721 && canPrice();
    }, 50);
    return () => clearTimeout(id);
  }, [asset.id, amountCurrency?.id, isSwap, provider.connection.url]);
  const canPrice = (0, _react.useCallback)(async () => {
    setLoading(true);
    try {
      if (amountCurrency && swap) {
        const router = swap.router_address;
        const price = await (0, _price.getPrice)(router, asset, amountCurrency, provider);
        setPrice(price);
      }
    } catch (e) {
      console.log(e);
      // setPrice('0');
    } finally {
      setLoading(false);
    }
  }, [asset.id, amountCurrency?.id, isSwap, provider.connection.url]);
  return {
    price,
    loading,
    amountCurrency,
    isSwap
  };
};
exports.usePrice = usePrice;