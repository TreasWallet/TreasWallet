"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDark = void 0;
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
const useDark = () => {
  // const colorScheme = useColorScheme();
  const [dark, setDark] = (0, _storage.useStorage)(_storage2.DESIGN_THEME_DARK, false);
  return {
    dark,
    setDark
  };
};
exports.useDark = useDark;