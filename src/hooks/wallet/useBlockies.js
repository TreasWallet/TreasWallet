"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useBlockies = void 0;
var _react = require("react");
var _blockies = require("../../util/blockies");
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
var _wallet = require("../../config/wallet");
const useBlockies = ({
  address
}) => {
  const seed = (0, _react.useMemo)(() => (address || _wallet.ZERO_ADDRESS).toLowerCase(), [address]);
  const [uri, setUrl] = (0, _storage.useStorage)(`${_storage2.BLOCKIES_KEY}_${seed}`);
  (0, _react.useEffect)(() => {
    (0, _react.startTransition)(() => {
      if (!uri) {
        getDataUrl();
      }
    });
  }, [seed]);
  const getDataUrl = (0, _react.useCallback)(() => {
    const str = (0, _blockies.toDataUrl)(seed);
    setUrl(str);
  }, [seed]);
  return {
    uri
  };
};
exports.useBlockies = useBlockies;