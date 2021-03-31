/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */

export function createObservableObject(object, callback) {
  if (
    Array.isArray(object) ||
    typeof callback !== 'function' ||
    typeof object !== 'object' ||
    callback === null ||
    object === null
  ) {
    return false;
  }
  return new Proxy(object, {
    set(target, property, value) {
      target[property] = value;
      callback();
      return true;
    },
  });
}
export function createObservableArray(array, callback) {
  if (
    typeof callback !== 'function' ||
    typeof array !== 'object' ||
    callback === null ||
    array === null
  ) {
    return false;
  }
  return new Proxy(array, {
    set() {
      callback();
      return true;
    },
  });
}