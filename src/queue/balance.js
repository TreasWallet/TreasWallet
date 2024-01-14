"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addBalanceJob = void 0;
var _queue = require("../lib/queue");
var _ethers = require("../lib/ethers");
var _storage = require("../lib/storage");
var _storage2 = require("../config/storage");
_queue.queue.addWorker(new _queue.Worker('useBalance', async payload => {
  try {
    // await new Promise(resolve => {
    //setTimeout(async () => {
    console.log('😯', 'useBalance', payload.asset.id, payload.address);
    const provider = new _ethers.ethers.providers.JsonRpcProvider({
      url: payload.rpc,
      allowGzip: true,
      timeout: 5000
    });
    const address = (0, _ethers.getAddress)(payload.address);
    if ((0, _ethers.isAddress)(payload.asset.id) || (0, _ethers.isAddressTrx)(payload.asset.id)) {
      const id = (0, _ethers.getAddress)(payload.asset.id);
      const abi = new _ethers.ethers.Contract(id, _ethers.IERC20ABI, provider);
      const wei = await abi.balanceOf(address);
      const unit = (0, _ethers.formatUnits)(wei, payload.asset.decimals);
      await _storage.storage.setStringAsync(`${_storage2.BALANCE_KEY}_${payload.asset.id}_${payload.address}`, unit);
    } else {
      const wei = await provider.getBalance(address);
      const unit = (0, _ethers.formatUnits)(wei, payload.asset.decimals);
      await _storage.storage.setStringAsync(`${_storage2.BALANCE_KEY}_${payload.asset.id}_${payload.address}`, unit);
    }
    //  resolve(undefined);
    //  }, 5);
    //});
  } catch (e) {
    console.log(e);
  }
}));
const addBalanceJob = payload => {
  _queue.queue.addJob('useBalance', payload);
};
exports.addBalanceJob = addBalanceJob;