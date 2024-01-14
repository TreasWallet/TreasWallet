"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "IERC20ABI", {
  enumerable: true,
  get: function () {
    return _IERC.default;
  }
});
Object.defineProperty(exports, "IERC721ABI", {
  enumerable: true,
  get: function () {
    return _IERC2.default;
  }
});
Object.defineProperty(exports, "IPancakeRouter02", {
  enumerable: true,
  get: function () {
    return _IPancakeRouter.default;
  }
});
var _IERC = _interopRequireDefault(require("./IERC20.json"));
var _IERC2 = _interopRequireDefault(require("./IERC721.json"));
var _IPancakeRouter = _interopRequireDefault(require("./IPancakeRouter02.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }