"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addPriceJob = void 0;
var _queue = require("../lib/queue");
var _ethers = require("../lib/ethers");
var _price = require("../lib/price");
var _storage = require("../config/storage");
var _storage2 = require("../lib/storage");
_queue.queue.addWorker(new _queue.Worker('usePrice', async payload => {
  try {
    // await new Promise(resolve => {
    //  setTimeout(async () => {
    console.log('😯', 'usePrice', payload.router, payload.quoteCurrency.id);
    const provider = new _ethers.ethers.providers.JsonRpcProvider({
      url: payload.rpc,
      allowGzip: true,
      timeout: 5000
    });
    const price = await (0, _price.getPrice)(payload.router, payload.quoteCurrency, payload.amountCurrency, provider);
    console.log('😯', 'usePrice', payload.router, payload.quoteCurrency.id, price);
    await _storage2.storage.setStringAsync(`${_storage.SWAP_PRICE}_${payload.quoteCurrency.id}`, price);
    //   resolve(undefined);
    //  }, 5);
    // });
  } catch (e) {}
}));
const addPriceJob = payload => {
  _queue.queue.addJob('usePrice', payload);
};
exports.addPriceJob = addPriceJob;