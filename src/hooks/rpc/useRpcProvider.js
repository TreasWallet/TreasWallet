"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRpcProvider = exports.removeLastPart = void 0;
var _react = require("react");
var _ethers = require("../../lib/ethers");
var _env = require("@env");
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
// @ts-ignore

const useRpcProvider = ({
  rpc
}) => {
  const [key] = (0, _storage.useStorage)(_storage2.INFURA_API_KEY, _env.ENV_INFURA_API_KEY);
  const url = (0, _react.useMemo)(() => rpc?.endsWith('.infura.io/v3') ? `${removeLastPart(rpc)}/${key}` : removeLastPart(rpc), [rpc]);
  const provider = (0, _react.useMemo)(() => new _ethers.ethers.providers.JsonRpcProvider({
    url,
    allowGzip: true,
    timeout: 5000
  }), [url]);
  return {
    provider
  };
};
exports.useRpcProvider = useRpcProvider;
const removeLastPart = url => {
  if (url.slice(-1) === '/') {
    return url.slice(0, -1);
  } else {
    return url;
  }
};
exports.removeLastPart = removeLastPart;