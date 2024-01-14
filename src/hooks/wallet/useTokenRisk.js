"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTokenRisk = void 0;
var _react = require("react");
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
var _useRpcProvider = require("../rpc/useRpcProvider");
var _ethers = require("../../lib/ethers");
const useTokenRisk = ({
  token,
  rpc
}) => {
  const [loading, setLoading] = (0, _react.useState)(false);
  const [error, setError] = (0, _react.useState)(false);
  const [mintable, setMintable] = (0, _react.useState)(false);
  const [code, setCode] = (0, _storage.useStorage)(`${_storage2.TOKEN_CODE_KEY}_${token}`);
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
      if (!code && token) {
        setLoading(true);
        const id = (0, _ethers.getAddress)(token);
        const c = await provider.getCode(id);
        setCode(c);
      }
      setError(false);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [token, provider.connection.url]);
  (0, _react.useEffect)(() => {
    const id = setTimeout(() => {
      checkRisk();
    }, 50);
    return () => clearTimeout(id);
  }, [code]);
  const checkRisk = (0, _react.useCallback)(() => {
    try {
      setLoading(true);
      if (code && code !== '0x') {
        //const iface = getInterfaceRisk();
        console.log(code.search((0, _ethers.getMethodID)('burn(uint256)')));
        console.log(code.search((0, _ethers.getMethodID)('mint(uint256)')));
        //console.log(iface.getSighash(TRC_002_002).substring(2)); // true
        //console.log(ethers.utils.defaultAbiCoder.encode('mint', ['unit256']));
      }
      setError(false);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(true);
    }
  }, [code]);
  return {
    loading,
    error,
    mintable
  };
};
exports.useTokenRisk = useTokenRisk;