const moduleProduct = require('../js/products-methods');
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

test('check receipt of the count', () => {
  moduleProduct.setCountProduct(productElements[0], 4);
  expect(productElements[0].count).toEqual(4);
  expect(productElements[0].count).not.toEqual(40);
  expect(productElements[0].count).not.toEqual('');
  expect(productElements[0].count).not.toEqual(null);
  expect(productElements[0].count).not.toEqual({});
  expect(productElements[0].count).not.toEqual([]);
  expect(productElements[0].count).not.toEqual();
  expect(moduleProduct.setCountProduct(productElements[0], null)).toEqual(false);
  expect(moduleProduct.setCountProduct(null, 1)).toEqual(false);
  expect(moduleProduct.setCountProduct(productElements[0], false)).toEqual(false);
  expect(moduleProduct.setCountProduct(false, 1)).toEqual(false);
  expect(moduleProduct.setCountProduct(productElements[0], 'String')).toEqual(false);
  expect(moduleProduct.setCountProduct('String', 4)).toEqual(false);
  moduleProduct.setCountProduct(productElements[0], 40);
});

test('check price invoice of each item', () => {
  const firstTotal = moduleProduct.countTotal(productElements[0]);
  const secondTotal = moduleProduct.countTotal(productElements[1]);
  const thirdTotal = moduleProduct.countTotal(productElements[2]);
  expect(firstTotal).toBe(2000);
  expect(secondTotal).toBe(2000);
  expect(thirdTotal).toBe(1000);
  expect(firstTotal).not.toBe(0);
  expect(secondTotal).not.toBe(0);
  expect(thirdTotal).not.toBe(0);
  expect(firstTotal).not.toBe('');
  expect(secondTotal).not.toBe('');
  expect(thirdTotal).not.toBe('');
  expect(firstTotal).not.toBe(null);
  expect(firstTotal).not.toBe({});
  expect(firstTotal).not.toBe([]);
  expect(firstTotal).not.toBe();
  expect(secondTotal).not.toBe(null);
  expect(secondTotal).not.toBe({});
  expect(secondTotal).not.toBe([]);
  expect(secondTotal).not.toBe();
  expect(thirdTotal).not.toBe(null);
  expect(thirdTotal).not.toBe({});
  expect(thirdTotal).not.toBe([]);
  expect(thirdTotal).not.toBe();
  expect(thirdTotal).not.toBe(Infinity);
  expect(moduleProduct.countTotal(null)).toEqual(false);
  expect(moduleProduct.countTotal(false)).toEqual(false);
  expect(moduleProduct.countTotal('String')).toEqual(false);
  expect(moduleProduct.countTotal(56)).toEqual(false);
});

test('check receipt of the price', () => {
  moduleProduct.setPriceForOneProduct(productElements[0], 5);
  expect(productElements[0].priceForOne).toEqual(5);
  expect(productElements[0].priceForOne).not.toEqual('String');
  expect(productElements[0].priceForOne).not.toEqual(15);
  expect(productElements[0].priceForOne).not.toEqual('');
  expect(productElements[0].priceForOne).not.toEqual(null);
  expect(productElements[0].priceForOne).not.toEqual({});
  expect(productElements[0].priceForOne).not.toEqual([]);
  expect(productElements[0].priceForOne).not.toEqual();
  expect(moduleProduct.setPriceForOneProduct(false, 4)).toEqual(false);
  expect(moduleProduct.setPriceForOneProduct(productElements[0], false)).toEqual(false);
  expect(moduleProduct.setPriceForOneProduct(null, 4)).toEqual(false);
  expect(moduleProduct.setPriceForOneProduct(productElements[0], null)).toEqual(false);
  expect(moduleProduct.setPriceForOneProduct('String', 4)).toEqual(false);
  expect(moduleProduct.setPriceForOneProduct(productElements[0], 'String')).toEqual(false);
  expect(moduleProduct.setPriceForOneProduct(2, 4)).toEqual(false);
  moduleProduct.setPriceForOneProduct(productElements[0], 50);
});

test('check total value', () => {
  const resultTotal = moduleProduct.setResultTotal(productElements);
  expect(resultTotal).toEqual(5000);
  expect(resultTotal).not.toEqual('String');
  expect(resultTotal).not.toEqual(50);
  expect(resultTotal).not.toEqual('');
  expect(resultTotal).not.toEqual(null);
  expect(resultTotal).not.toEqual({});
  expect(resultTotal).not.toEqual([]);
  expect(resultTotal).not.toEqual();
  expect(moduleProduct.setResultTotal(3)).toEqual(false);
  expect(moduleProduct.setResultTotal('String')).toEqual(false);
  expect(moduleProduct.setResultTotal(false)).toEqual(false);
  expect(moduleProduct.setResultTotal(null)).toEqual(false);
});

test('check receipt of the name', () => {
  moduleProduct.setNameProduct(productElements[0], 'Колбаса');
  expect(productElements[0].name).toEqual('Колбаса');
  expect(productElements[0].name).not.toEqual('String');
  expect(productElements[0].name).not.toEqual(10);
  expect(productElements[0].name).not.toEqual('');
  expect(productElements[0].name).not.toEqual(null);
  expect(productElements[0].name).not.toEqual({});
  expect(productElements[0].name).not.toEqual([]);
  expect(productElements[0].name).not.toEqual();
  expect(moduleProduct.setNameProduct(false, 'сыр')).toEqual(false);
  expect(moduleProduct.setNameProduct(productElements[0], false)).toEqual(false);
  expect(moduleProduct.setNameProduct(null, 'сыр')).toEqual(false);
  expect(moduleProduct.setNameProduct(productElements[0], null)).toEqual(false);
  expect(moduleProduct.setNameProduct(2, 'сыр')).toEqual(false);
  expect(moduleProduct.setNameProduct(productElements[0], 2)).toEqual(false);
  moduleProduct.setNameProduct(productElements[0], 'Молоко');
});
