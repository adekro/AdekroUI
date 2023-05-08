"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _ButtonModule = _interopRequireDefault(require("./style/Button.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Button = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: _ButtonModule.default.button
  }, /*#__PURE__*/_react.default.createElement("h4", null, children));
};
var _default = Button;
exports.default = _default;