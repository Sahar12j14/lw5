import {
  countTotal,
  setNameProduct,
  setCountProduct,
  setPriceForOneProduct,
  setResultTotal,
} from './products-methods';
import { createObservableObject, createObservableArray } from '../utils/observable-structures';

let productsList = [
  {
    id: 1,
    name: 'Молоко',
    count: 50,
    priceForOne: 50,
    priceTotal: 2500,
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
function checkIsNumber(value) {
  return value.match(/^\d*[.]?\d+$/);
}
window.onload = function loading() {
  function updateUI() {
    var resultTotal = 0;
    resultTotal = setResultTotal(productsList);
    const source = document.getElementById('store-template').innerHTML;
    const template = Handlebars.compile(source);

    const html = template({ productsList, resultTotal });
    document.getElementById('result-table').innerHTML = html;
    document.querySelectorAll('.table-column__input').forEach((element) => {
      element.addEventListener('dblclick', (event) => {
        event.target.readOnly = false;
      });
    });
    const listName = document.getElementsByClassName('table-column__input-name');
    const listCount = document.getElementsByClassName('table-column__input-count');
    const listPrise = document.getElementsByClassName('table-column__input-priceForOne');
    for (let i = 0; i < listName.length; i += 1) {
      listName[i].addEventListener('keydown', (e) => {
        const { key } = e;
        if (key === 'Enter') {
          setNameProduct(productsList[i], listName[i].value);
          return true;
        }
        return false;
      });
    }
    for (let i = 0; i < listCount.length; i += 1) {
      listCount[i].addEventListener('keydown', (e) => {
        const { key } = e;
        if (key === 'Enter') {
          if (checkIsNumber(listCount[i].value)) {
            setCountProduct(productsList[i], listCount[i].value);
            productsList[i].priceTotal = countTotal(productsList[i]);
          }
          return true;
        }
        return false;
      });
    }
    for (let i = 0; i < listPrise.length; i += 1) {
      listPrise[i].addEventListener('keydown', (e) => {
        const { key } = e;
        if (key === 'Enter') {
          if (checkIsNumber(listPrise[i].value)) {
            setPriceForOneProduct(productsList[i], listPrise[i].value);
            productsList[i].priceTotal = countTotal(productsList[i]);
          }
          return true;
        }
        return false;
      });
    }
  }

  for (let i = 0; i < productsList.length; i += 1) {
    productsList[i] = createObservableObject(productsList[i], updateUI);
  }
  productsList = createObservableArray(productsList, updateUI);
  updateUI();
};
