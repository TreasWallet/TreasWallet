"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useNetworks = void 0;
var _react = require("react");
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
var _cos = require("../../lib/cos");
const useNetworks = () => {
  const [networks, setNetworks] = (0, _storage.useStorage)(`${_storage2.NETWORKS_KEY}`, []);
  //const networks = useMemo(() => chains, []);
  (0, _react.useEffect)(() => {
    const id = setTimeout(() => {
      getInfo();
    }, 500);
    return () => clearTimeout(id);
  }, []);
  const getInfo = (0, _react.useCallback)(() => {
    const {
      uri,
      headers
    } = (0, _cos.getCosImageSource)('/config/chains.json');
    fetch(`${uri}`, {
      headers
    }).then(res => res.json()).then(res => {
      const data = res.sort((a, b) => a.swaps.length > b.swaps.length ? -1 : 1);
      setNetworks(data);
    });
  }, []);
  return {
    networks
  };
};
exports.useNetworks = useNetworks;