"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractHostname = void 0;
const extractHostname = url => {
  const hostname = (url.indexOf('//') > -1 ? url.split('/')[2] : url.split('/')[0]).split(':')[0].split('?')[0];
  const name = hostname.split('.').slice(-2);
  return name.join('.');
};
exports.extractHostname = extractHostname;