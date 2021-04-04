/* eslint-disable no-undef */
const productMethods = require('../utils/observable-structures');

const mock = jest.fn();
test('checking the created observable object', () => {
  const testObject = 
    {
        test: 'test'
    }
  ;
  const resultList = productMethods.createObservableObject(testObject, mock);
  resultList.test = 'test2';
  expect(resultList.test).toEqual('test2');
  expect(productMethods.createObservableObject(testObject, 1)).toEqual(false);
  expect(productMethods.createObservableObject(1, mock)).toEqual(false);
  expect(productMethods.createObservableObject(false, mock)).toEqual(false);
  expect(productMethods.createObservableObject(null, mock)).toEqual(false);
  expect(productMethods.createObservableObject(null, 1)).toEqual(false);
  expect(productMethods.createObservableObject(testObject, '')).toEqual(false);
  expect(productMethods.createObservableObject('', mock)).toEqual(false);
});
test('checking the created observable array', () => {
  const productElements = [1,2,3];
  let resultList = [];
  resultList[0] = productMethods.createObservableObject(productElements[0], mock);
  resultList = productMethods.createObservableArray(resultList, mock);
  expect(productMethods.createObservableArray(resultList, 1)).toEqual(false);
  expect(productMethods.createObservableArray(1, mock)).toEqual(false);
  expect(productMethods.createObservableArray(false, mock)).toEqual(false);
  expect(productMethods.createObservableArray(null, mock)).toEqual(false);
  expect(productMethods.createObservableArray(null, 1)).toEqual(false);
  expect(productMethods.createObservableArray(resultList, '')).toEqual(false);
  expect(productMethods.createObservableArray('', mock)).toEqual(false);
});