const productMethods = require('../utils/observable-structures');
const mockedCallback = jest.fn();
test('checking the created observable object', () => {
  let testObject = {
    test: 'test',
  };
  const resultList = productMethods.createObservableObject(testObject, mockedCallback);
  resultList.test = 'test2';
  expect(mockedCallback).toHaveBeenCalled();
  mockedCallback.mockClear();
  resultList.test = 'test2';
  expect(mockedCallback).toHaveBeenCalled();
  //const resultList = productMethods.createObservableObject(testObject, mockedCallback);
  //resultList.test = 'test2';
  //expect(resultList.test).toEqual('test2');
  //expect(productMethods.createObservableObject(testObject, 1)).toEqual(false);
  //expect(productMethods.createObservableObject(testObject, mockedCallback)).not.toEqual(false);
  //expect(mockedCallback).toHaveBeenCalled();
  //expect(mockCallback.mock.calls.length).toBe(1);
});
test('checking the created observable array', () => {
  const resultList = [{id: 1, name:'Тушенка'}];
  let testList = productMethods.createObservableArray(resultList, mockedCallback);
  testList[0].name = 'Чеснок';
  expect(mockedCallback).toHaveBeenCalled();
  mockedCallback.mockClear();
  testList[0] = 'Чеснок';
  expect(mockedCallback).toHaveBeenCalled();
  //expect(productMethods.createObservableArray(testList, 1)).toEqual(false);
  //expect(productMethods.createObservableArray(testList, mockedCallback)).not.toEqual(false);
  //expect(mockedCallback).toHaveBeenCalled();
  //mockedCallback.mockClear();
  //expect(productMethods.createObservableArray(testList, 1)).toEqual(false);
  //expect(productMethods.createObservableArray(testList, mockedCallback)).not.toEqual(false);
  //expect(mockedCallback).toHaveBeenCalled();
  //expect(mockCallback.mock.calls.length).toBe(3);
});
