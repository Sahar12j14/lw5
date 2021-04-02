/* eslint-disable no-undef */
const productMethods = require('../utils/observable-structures');

function poke() {
  return 1;
}
test('checking the created observable object', () => {
  const productElements = [
    {
      id: 1,
      name: 'Молоко',
      count: 40,
      priceForOne: 50,
      priceTotal: 2000,
    },
    {
      id: 2,
      name: 'Хлеб',
      count: 100,
      priceForOne: 20,
      priceTotal: 2000,
    },
    {
      id: 3,
      name: 'Лук',
      count: 200,
      priceForOne: 5,
      priceTotal: 1000,
    },
  ];
  let resultList = [];
  resultList[0] = productMethods.createObservableObject(productElements[0], poke);
  resultList = productMethods.createObservableArray(resultList, poke);
  resultList[0].count = 1;
  expect(resultList[0].count).toEqual(1);
  expect(resultList[0].count).not.toEqual(2);
  expect(resultList[0].count).not.toEqual('String');
  expect(resultList[0].count).not.toEqual('');
  expect(productMethods.createObservableObject(productElements[0], 1)).toEqual(false);
  expect(productMethods.createObservableObject(1, poke)).toEqual(false);
  expect(productMethods.createObservableObject(false, poke)).toEqual(false);
  expect(productMethods.createObservableObject(null, poke)).toEqual(false);
  expect(productMethods.createObservableObject(null, 1)).toEqual(false);
  expect(productMethods.createObservableObject(productElements[0], '')).toEqual(false);
  expect(productMethods.createObservableObject('', poke)).toEqual(false);
});
test('checking the created observable array', () => {
  const productElements = [
    {
      id: 1,
      name: 'Молоко',
      count: 40,
      priceForOne: 50,
      priceTotal: 2000,
    },
    {
      id: 2,
      name: 'Хлеб',
      count: 100,
      priceForOne: 20,
      priceTotal: 2000,
    },
    {
      id: 3,
      name: 'Лук',
      count: 200,
      priceForOne: 5,
      priceTotal: 1000,
    },
  ];
  let resultList = [];
  resultList[0] = productMethods.createObservableObject(productElements[0], poke);
  resultList = productMethods.createObservableArray(resultList, poke);
  expect(productMethods.createObservableArray(resultList, 1)).toEqual(false);
  expect(productMethods.createObservableArray(1, poke)).toEqual(false);
  expect(productMethods.createObservableArray(false, poke)).toEqual(false);
  expect(productMethods.createObservableArray(null, poke)).toEqual(false);
  expect(productMethods.createObservableArray(null, 1)).toEqual(false);
  expect(productMethods.createObservableArray(resultList, '')).toEqual(false);
  expect(productMethods.createObservableArray('', poke)).toEqual(false);
  resultList = 1;
  expect(resultList).toEqual(1);
  expect(resultList).not.toEqual(2);
  expect(resultList).not.toEqual(NaN);
  expect(resultList).not.toEqual(true);
  expect(resultList).not.toEqual('');
  expect((resultList = '')).toEqual('');
  expect((resultList = NaN)).toEqual(NaN);
});