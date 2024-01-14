"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSuggestedGasFees = void 0;
var _env = require("@env");
// @ts-ignore

const authorization = () => {
  const Auth = Buffer.from(_env.ENV_INFURA_API_KEY + ':' + _env.ENV_INFURA_API_KEY_SECRET).toString('base64');
  return {
    Authorization: `Basic ${Auth}`
  };
};
const getSuggestedGasFees = chainId => {
  const headers = authorization();
  return fetch(`https://gas.api.infura.io/networks/${chainId}/suggestedGasFees`, {
    headers
  }).then(res => res.json());
};
exports.getSuggestedGasFees = getSuggestedGasFees;