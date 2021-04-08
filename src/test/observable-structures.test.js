const productMethods = require('../utils/observable-structures');
const mockedCallback = jest.fn();
test('checking the created observable object', () => {
  const testObject = {
    test: 'test',
  };
  const resultList = productMethods.createObservableObject(testObject, mockedCallback);
  resultList.test = 'test2';
  expect(resultList.test).toEqual('test2');
  expect(productMethods.createObservableObject(testObject, 1)).toEqual(false);
  expect(productMethods.createObservableObject(testObject, mockedCallback)).not.toEqual(false);
  //expect(mockCallback.mock.calls.length).toBe(1);
});
test('checking the created observable array', () => {
  const resultList = [1, 2];
  let testList = productMethods.createObservableArray(resultList, mockedCallback);
  expect(productMethods.createObservableArray(testList, 1)).toEqual(false);
  expect(productMethods.createObservableArray(testList, mockedCallback)).not.toEqual(false);
  //expect(mockCallback.mock.calls.length).toBe(3);
});
