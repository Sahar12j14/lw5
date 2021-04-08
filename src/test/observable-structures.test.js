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
  expect(productMethods.createObservableObject(testObject, 1)).toEqual(false);
  expect(productMethods.createObservableObject(testObject, mockedCallback)).not.toEqual(false);
});
test('checking the created observable array', () => {
  const resultList = [{id: 1, name:'Тушенка'}];
  let testList = productMethods.createObservableArray(resultList, mockedCallback);  
  mockedCallback.mockClear();
  testList[0] = 'Чеснок';
  expect(mockedCallback).toHaveBeenCalled();
  expect(productMethods.createObservableArray(testList, 1)).toEqual(false);
  expect(productMethods.createObservableArray(testList, mockedCallback)).not.toEqual(false);
});
