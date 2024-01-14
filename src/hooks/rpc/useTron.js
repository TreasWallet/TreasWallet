"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTron = void 0;
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
var _react = require("react");
var _urlParse = _interopRequireDefault(require("url-parse"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// @ts-ignore

// @ts-ignore
//import TronWeb from 'tronweb';
const useTron = () => {
  const [value] = (0, _storage.useStorage)(`${_storage2.NODE_RPC_KEY}_tron`);
  const info = (0, _react.useMemo)(() => (0, _urlParse.default)(value), [value]);
  const rpc = (0, _react.useMemo)(() => `https://${info.hostname}`, [info]);
  //const tronWeb = useMemo(() => new TronWeb(rpc, rpc, rpc), [rpc]);
  return {
    rpc
  };
};
exports.useTron = useTron;