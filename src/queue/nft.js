"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNFTJob = exports.addNFTAvatarJob = void 0;
var _queue = require("../lib/queue");
var _ethers = require("../lib/ethers");
var _storage = require("../lib/storage");
var _storage2 = require("../config/storage");
_queue.queue.addWorker(new _queue.Worker('useNFT', async payload => {
  try {
    //  await new Promise(resolve => {
    //   setTimeout(async () => {
    console.log('😯', 'useNFT', payload.asset.id, payload.address);
    if (payload.address && payload.asset?.isERC721) {
      const provider = new _ethers.ethers.providers.JsonRpcProvider({
        url: payload.rpc,
        allowGzip: true,
        timeout: 5000
      });
      const address = (0, _ethers.getAddress)(payload.address);
      const id = (0, _ethers.getAddress)(payload.asset.id);
      const abi = new _ethers.ethers.Contract(id, _ethers.IERC721ABI, provider);
      const balance = await abi.balanceOf(address);
      const tokenIDs = await Promise.all(new Array(Number(balance.toString())).fill('').map(async (_v, index) => {
        return await abi.tokenOfOwnerByIndex(address, index);
      }));
      const tokens = await Promise.all(tokenIDs.map(async (id, _index) => {
        const uri = await abi.tokenURI(id);
        return {
          id: id.toString(),
          uri
        };
      }));
      await _storage.storage.setArrayAsync(`${_storage2.BALANCE_NFT_KEY}_${payload.asset?.id}_${payload.address}`, tokens);
    }
    //    resolve(undefined);
    //  }, 5);
    //});
  } catch (e) {}
}));
_queue.queue.addWorker(new _queue.Worker('useNFTAvatar', async payload => {
  try {
    //  await new Promise(resolve => {
    //  setTimeout(async () => {
    console.log('😯', 'useNFTAvatar', payload.asset.id, payload.address);
    if (payload.address && payload.asset?.isERC721) {
      const provider = new _ethers.ethers.providers.JsonRpcProvider({
        url: payload.rpc,
        allowGzip: true,
        timeout: 5000
      });
      const address = (0, _ethers.getAddress)(payload.address);
      const id = (0, _ethers.getAddress)(payload.asset.id);
      const abi = new _ethers.ethers.Contract(id, _ethers.IERC721ABI, provider);
      const index = await abi.tokenOfOwnerByIndex(address, 0);
      const uri = await abi.tokenURI(index);
      await _storage.storage.setMapAsync(`${_storage2.BALANCE_TOKEN_NFTS_AVATAR_KEY}_${id}`, {
        uri
      });
    }
    //  resolve(undefined);
    // }, 5);
    //});
  } catch (e) {}
}));
const addNFTJob = payload => {
  _queue.queue.addJob('useNFT', payload);
};
exports.addNFTJob = addNFTJob;
const addNFTAvatarJob = payload => {
  _queue.queue.addJob('useNFTAvatar', payload);
};
exports.addNFTAvatarJob = addNFTAvatarJob;