"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partial = partial;

function partial(func) {
  for (var _len = arguments.length, outerArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    outerArgs[_key - 1] = arguments[_key];
  }

  function wrapper() {
    for (var _len2 = arguments.length, innerArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      innerArgs[_key2] = arguments[_key2];
    }

    return func.apply(void 0, outerArgs.concat(innerArgs));
  }

  return wrapper;
}