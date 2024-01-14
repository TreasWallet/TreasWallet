"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useBalance = void 0;
var _react = require("react");
var _bignumber = _interopRequireDefault(require("bignumber.js"));
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
var _useRpc = require("../rpc/useRpc");
var _ethers = require("../../lib/ethers");
var _useRpcProvider = require("../rpc/useRpcProvider");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const useBalance = ({
  address,
  asset,
  node
}) => {
  const [loading, setLoading] = (0, _react.useState)(true);
  const [value, setBalance] = (0, _storage.useStorage)(`${_storage2.BALANCE_KEY}_${asset?.id}_${address}`, '0');
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
  (0, _react.useEffect)(() => {
    const id = setTimeout(() => {
      getBalance();
    }, 500);
    return () => clearTimeout(id);
  }, [asset?.id, address, provider.connection.url]);
  const getBalance = (0, _react.useCallback)(async () => {
    setLoading(true);
    try {
      if (address && asset) {
        const addr = (0, _ethers.getAddress)(address);
        if ((0, _ethers.isAddress)(asset.id) || (0, _ethers.isAddressTrx)(asset.id)) {
          const id = (0, _ethers.getAddress)(asset.id);
          const abi = new _ethers.ethers.Contract(id, _ethers.IERC20ABI, provider);
          const wei = await abi.balanceOf(addr);
          const unit = (0, _ethers.formatUnits)(wei, asset.decimals);
          setBalance(unit);
        } else {
          const wei = await provider.getBalance(addr);
          const unit = (0, _ethers.formatUnits)(wei, asset.decimals);
          setBalance(unit);
        }
      }
    } catch (e) {
      //setBalance('0');
    } finally {
      setLoading(false);
    }
  }, [asset?.id, address, provider.connection.url]);
  return {
    loading,
    balance
  };
};
exports.useBalance = useBalance;