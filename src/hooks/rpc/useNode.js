"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useNode = void 0;
var _storage = require("../../config/storage");
var _chains = require("../../config/chains");
var _storage2 = require("../../lib/storage");
var _react = require("react");
const useNode = () => {
  const [node, setNode] = (0, _storage2.useStorage)(_storage.NODE_KEY, _chains.DefaultChain);
  const isTron = (0, _react.useMemo)(() => node.id === 'tron', [node.id]);
  const isSwap = (0, _react.useMemo)(() => node.swaps.length > 0, [node]);
  return {
    node,
    setNode,
    isTron,
    isSwap
  };
};
exports.useNode = useNode;