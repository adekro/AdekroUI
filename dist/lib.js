"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeToken = normalizeToken;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
function normalizeToken(token) {
  do {
    token = token.replace("+", "_p_");
  } while (token.indexOf("+") > -1);
  do {
    token = token.replace("\\", "_b_");
  } while (token.indexOf("\\") > -1);
  do {
    token = token.replace("/", "_s_");
  } while (token.indexOf("/") > -1);
  do {
    token = token.replace("|", "_pipe_");
  } while (token.indexOf("|") > -1);
  do {
    token = token.replace(".", "_dot_");
  } while (token.indexOf(".") > -1);
  do {
    token = token.replace(":", "_2dot_");
  } while (token.indexOf(":") > -1);
  return token;
}