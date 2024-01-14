"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useNFT = void 0;
var _react = require("react");
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
var _useRpc = require("../rpc/useRpc");
var _ethers = require("../../lib/ethers");
var _useRpcProvider = require("../rpc/useRpcProvider");
const useNFT = ({
  address,
  asset,
  node
}) => {
  const [loading, setLoading] = (0, _react.useState)(true);
  const [balance, setBalance] = (0, _storage.useStorage)(`${_storage2.BALANCE_NFT_KEY}_${asset?.id}_${address}`);
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
      getBalance();
    }, 500);
    return () => clearTimeout(id);
  }, [asset?.id, address, provider.connection.url]);
  const getBalance = (0, _react.useCallback)(async () => {
    setLoading(true);
    try {
      if (address && asset?.isERC721) {
        const add = (0, _ethers.getAddress)(address);
        const id = (0, _ethers.getAddress)(asset.id);
        const abi = new _ethers.ethers.Contract(id, _ethers.IERC721ABI, provider);
        const balance = await abi.balanceOf(add);
        const tokenIDs = await Promise.all(new Array(Number(balance.toString())).fill('').map(async (_v, index) => {
          return await abi.tokenOfOwnerByIndex(add, index);
        }));
        const tokens = await Promise.all(tokenIDs.map(async (id, _index) => {
          const uri = await abi.tokenURI(id);
          return {
            id: id.toString(),
            uri
          };
        }));
        setBalance(tokens);
      }
    } catch (e) {
      // setBalance([])
    } finally {
      setLoading(false);
    }
  }, [asset?.id, address, provider.connection.url]);
  return {
    loading,
    balance,
    getBalance
  };
};
exports.useNFT = useNFT;