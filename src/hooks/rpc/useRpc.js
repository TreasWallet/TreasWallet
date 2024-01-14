"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRpc = void 0;
var _react = require("react");
var _storage = require("../../config/storage");
var _storage2 = require("../../lib/storage");
const useRpc = ({
  node
}) => {
  const [value, setRpc] = (0, _storage2.useStorage)(`${_storage.NODE_RPC_KEY}_${node?.id}`);
  const rpcList = (0, _react.useMemo)(() => node?.rpc || [], [node]);
  // @ts-ignore
  const rpc = (0, _react.useMemo)(() => value || rpcList[0], [value, rpcList]);
  return {
    rpc,
    rpcList,
    setRpc
  };
};
exports.useRpc = useRpc;