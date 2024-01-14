"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSwaps = void 0;
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
var _react = require("react");
const useSwaps = ({
  node
}) => {
  const def = (0, _react.useMemo)(() => node.swaps?.length > 0 ? node.swaps[0] : undefined, [node]);
  const [swap, setSwap] = (0, _storage.useStorage)(`${_storage2.SWAPS_ROUTER_KEY}_${node.id}`, def);
  return {
    swap,
    setSwap
  };
};
exports.useSwaps = useSwaps;