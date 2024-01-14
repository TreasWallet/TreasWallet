"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useToken = void 0;
var _react = require("react");
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
var _ethers = require("../../lib/ethers");
var _useRpcProvider = require("../rpc/useRpcProvider");
const useToken = ({
  token,
  rpc
}) => {
  const [loading, setLoading] = (0, _react.useState)(false);
  const [info, setInfo] = (0, _storage.useStorage)(`${_storage2.TOKEN_INFO_KEY}_${token}`);
  const {
    provider
  } = (0, _useRpcProvider.useRpcProvider)({
    rpc
  });
  (0, _react.useEffect)(() => {
    const id = setTimeout(() => {
      getInfo();
    }, 500);
    return () => clearTimeout(id);
  }, [token, provider.connection.url]);
  const getInfo = (0, _react.useCallback)(async () => {
    try {
      if (token) {
        setLoading(true);
        const id = token;
        const address = (0, _ethers.getAddress)(token);
        const abi = new _ethers.ethers.Contract(address, _ethers.IERC20ABI, provider);
        const isERC721 = await isNft();
        const [symbol, name, decimals] = isERC721 ? await Promise.all([abi.symbol(), abi.name(), Promise.resolve(0)]) : await Promise.all([abi.symbol(), abi.name(), abi.decimals()]);
        const unit = await abi.totalSupply();
        const totalSupply = (0, _ethers.formatUnits)(unit, decimals);
        setInfo({
          name,
          symbol,
          decimals,
          id,
          isERC721,
          totalSupply
        });
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [token, provider.connection.url]);
  const isNft = (0, _react.useCallback)(async () => {
    try {
      if (token) {
        const address = (0, _ethers.getAddress)(token);
        const abi = new _ethers.ethers.Contract(address, _ethers.IERC721ABI, provider);
        const is = await abi.supportsInterface('0x80ac58cd');
        return is;
      } else {
        return false;
      }
    } catch (e) {
      // @ts-ignore
      if (e?.data === '0x' && e?.code === 'CALL_EXCEPTION') {
        return false;
      } else {
        throw e;
      }
    }
  }, [token, provider.connection.url]);
  return {
    info,
    loading
  };
};
exports.useToken = useToken;