"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAvatar = void 0;
var _useWallet = require("./useWallet");
var _useRpc = require("../rpc/useRpc");
var _react = require("react");
var _cos = require("../../lib/cos");
var _useID = require("./useID");
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
var _ethers = require("../../lib/ethers");
var _useRpcProvider = require("../rpc/useRpcProvider");
const useAvatar = ({
  item
}) => {
  const {
    id
  } = (0, _useID.useID)({
    item
  });
  const [source, setSource] = (0, _storage.useStorage)(`${_storage2.BALANCE_TOKEN_NFTS_AVATAR_KEY}_${id}`);
  const {
    node,
    address
  } = (0, _useWallet.useWallet)();
  const {
    rpc
  } = (0, _useRpc.useRpc)({
    node
  });
  const {
    provider
  } = (0, _useRpcProvider.useRpcProvider)({
    rpc
  });
  (0, _react.useEffect)(() => {
    const id = setTimeout(() => {
      getAvatar();
    }, 500);
    return () => clearTimeout(id);
  }, [address, item, id, provider.connection.url]);
  const getAvatar = (0, _react.useCallback)(async () => {
    if (address && item.isERC721) {
      const add = (0, _ethers.getAddress)(address);
      const id = (0, _ethers.getAddress)(item.id);
      const abi = new _ethers.ethers.Contract(id, _ethers.IERC721ABI, provider);
      const index = await abi.tokenOfOwnerByIndex(add, 0);
      const uri = await abi.tokenURI(index);
      setSource({
        uri
      });
    } else {
      const r = (0, _cos.getCosImageSource)(`/images/${id}`);
      setSource(r);
    }
  }, [address, item, id, provider.connection.url]);
  return {
    source
  };
};
exports.useAvatar = useAvatar;