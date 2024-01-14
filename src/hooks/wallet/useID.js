"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useID = void 0;
var _react = require("react");
var _ethers = require("../../lib/ethers");
const useID = ({
  item
}) => {
  const id = (0, _react.useMemo)(() => (0, _ethers.isAddress)(item.id) ? (0, _ethers.getCheckSumAddress)(item.id) : item.id, [item]);
  return {
    id
  };
};
exports.useID = useID;