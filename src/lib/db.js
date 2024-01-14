"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dbChains = void 0;
var _reactNativeQuickSqlite = require("react-native-quick-sqlite");
const dbChains = exports.dbChains = (0, _reactNativeQuickSqlite.open)({
  name: 'chains.sqlite'
});