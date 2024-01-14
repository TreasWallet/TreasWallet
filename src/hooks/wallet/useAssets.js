"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAssets = void 0;
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
var _react = require("react");
const useAssets = ({
  node
}) => {
  const [value, setWatchAsset] = (0, _storage.useStorage)(`${_storage2.WATCH_ASSET}_${node.id}`, []);
  const assets = (0, _react.useMemo)(() => [node, ...value], [value, node]);
  const ids = (0, _react.useMemo)(() => assets.map(v => v.id), [assets]);
  return {
    assets,
    setWatchAsset,
    ids
  };
};
exports.useAssets = useAssets;