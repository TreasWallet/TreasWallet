"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useI18n = void 0;
var _storage = require("../../lib/storage");
var _storage2 = require("../../config/storage");
var _i = require("../../config/i18");
const useI18n = () => {
  const [lang, setLang] = (0, _storage.useStorage)(_storage2.I18N_LNG, _i.DefaultI18nLng);
  return {
    lang,
    setLang
  };
};
exports.useI18n = useI18n;