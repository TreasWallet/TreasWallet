"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useBlock = void 0;
var _react = require("react");
var _useRpcProvider = require("../rpc/useRpcProvider");
var _bignumber = _interopRequireDefault(require("bignumber.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const useBlock = ({
  rpc
}) => {
  const [block, setBlock] = (0, _react.useState)();
  const {
    provider
  } = (0, _useRpcProvider.useRpcProvider)({
    rpc
  });
  const [value, setMS] = (0, _react.useState)(0);
  // @ts-ignore
  (0, _react.useEffect)(() => {
    const start = performance.now();
    provider.on('block', blockNumber => {
      (0, _react.startTransition)(() => {
        const end = performance.now();
        setBlock(blockNumber);
        setMS(prevState => prevState == 0 ? end - start : prevState);
      });
    });
    return () => provider.off('block');
  }, [provider.connection.url]);
  const ms = (0, _react.useMemo)(() => (0, _bignumber.default)(value), [value]);
  return {
    block,
    ms
  };
};
exports.useBlock = useBlock;