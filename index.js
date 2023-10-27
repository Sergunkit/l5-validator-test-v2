import Validator from './src/Validator.js';

// const validator = new Validator();

// const schema1 = validator.string();
// console.log((schema1.isValid('Hexlet'))); // , true);
// console.log((schema1.isValid(''))); // , true);
// console.log((schema1.isValid(true))); // , false);
// console.log((schema1.isValid(123))); // , false);
// console.log((schema1.isValid())); // , false);

// const validator = new Validator();
// const schema1 = validator.string().startsFromUpperCase();

// console.log((schema1.isValid(''))); // , false);
// console.log((schema1.isValid('Hexlet'))); // , true);
// console.log((schema1.isValid(' '))); // , false);
// console.log((schema1.isValid('!H!'))); // , false);
// console.log((schema1.isValid('1H!'))); // , false);
// console.log((schema1.isValid('3H!'))); // , false);
// console.log((schema1.isValid('0H!'))); // , false);

// const schema2 = validator.string().length(5).startsFromUpperCase();
// console.log((schema2.isValid('hexlet'))); // , false);
// console.log((schema2.isValid(' hello?'))); // , false);
// console.log((schema2.isValid('Hieee'))); // , true);
// console.log((schema2.isValid('!Hide'))); // , false);

// const schema3 = validator.string().length(5).startsFromUpperCase().hasExclamation();
// console.log((schema3.isValid('hexlet'))); // , false);
// console.log((schema3.isValid(' hello?'))); // , false);
// console.log((schema3.isValid('Hieee'))); // , false);
// console.log((schema3.isValid('Hide!'))); // , true);

// const v = new Validator();
// const schema = v.array();

// console.log(schema.isValid([])); // true
// console.log(schema.isValid({})); // false
// console.log(schema.isValid(123)); // false
// console.log(schema.isValid('Hexlet')); // false

// const v = new Validator();
// const schema1 = v.array();
// console.log(schema1.isValid([1, [2]])); // true

// const schema2 = v.array().maxDepth(3);
// console.log(schema2.isValid([1, 2])); // true
// console.log(schema2.isValid([1, [2, [3]]])); // true
// console.log(schema2.isValid([1, [2, [3, [4]]]])); // false

// const validator = new Validator();
// const schema1 = validator.array().maxDepth(1);
// const schema2 = validator.array().maxDepth(8);
// const schema3 = validator.array().maxDepth(3);

// console.log((schema1.isValid(null))); // , false);
// console.log((schema1.isValid([]))); // , true);
// console.log((schema1.isValid([0, 0, 0, [0]]))); // , true);
// console.log((schema1.isValid([0, 0, 0, 0, [1], [1, [2]]]))); // , false);

// console.log((schema2.isValid([1, 2, 3, [0, [1, [2, [3, [4]]]]]]))); // , true);
// console.log((schema2
//   .isValid([1, [2], [1, [2, [3, [4, [5, [6, [7, [8, [9, [10, [11]]]]]]]]]]]]))); // , false);

// console.log(888, (schema3.isValid([0, 0, 0, [1, [2], [2, [3]], [1, [2, [3, [4]]]]]])));
// console.log(555, (schema3.isValid([[1], [[2]], [[[3]]]]))); // , true);

const validator = new Validator();
const schema1 = validator.object().shape({
  name: validator.string().startsFromUpperCase(),
  basket: validator.array().maxDepth(1),
});

const schema2 = validator.object().shape({
  name: validator.string(),
  basket: validator.array().maxDepth(0),
  payment: validator.array().maxDepth(2),
});

console.log((schema1.isValid({ name: 'B11', basket: ['potatos', 'tomatos', 'oranges', ['carrots']] }))); // , true);
console.log((schema1.isValid({ name: '12', basket: ['potatos', 'tomatos', 'oranges'] }))); // , false);
console.log((schema1.isValid({}))); // , false);

console.log((schema2.isValid({ name: 'sergey', basket: ['apple', 'cucumber'], payment: ['10 dollars', '10 cents', [0, [1]]] }))); // , true);
console.log((schema2.isValid({ name: 17, basket: ['apple', 'cucumber'], payment: ['10 dollars', '10 cents'] }))); // , false);
console.log((schema2.isValid({ name: '213', basket: ['apple'], payment: ['10 dollars', '10 cents'] }))); // , true);

export default Validator;
