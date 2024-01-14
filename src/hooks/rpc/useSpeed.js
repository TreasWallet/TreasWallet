"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSpeed = void 0;
var _react = require("react");
var _useRpcProvider = require("./useRpcProvider");
var _bignumber = _interopRequireDefault(require("bignumber.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const useSpeed = ({
  rpc
}) => {
  const [loading, setLoading] = (0, _react.useState)(false);
  const [value, setMS] = (0, _react.useState)(0);
  //const [blockNumber, setBlockNumber] = useState<number>();
  const {
    provider
  } = (0, _useRpcProvider.useRpcProvider)({
    rpc
  });
  (0, _react.useEffect)(() => {
    const id = setTimeout(() => {
      canSpeed();
    }, 50);
    return () => clearTimeout(id);
  }, [provider.connection.url]);
  const ms = (0, _react.useMemo)(() => (0, _bignumber.default)(value), [value]);
  const canSpeed = (0, _react.useCallback)(async () => {
    try {
      setLoading(true);
      const start = performance.now();
      await provider.getBlockNumber(); //.then(console.log);
      const end = performance.now();
      setMS(end - start);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [provider.connection.url]);
  return {
    ms,
    loading
  };
};
exports.useSpeed = useSpeed;