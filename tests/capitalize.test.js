import capitalize from '../src/capitalize.js';
import { strict as assert } from 'assert'
//assert.equal(capitalize(''), '')

assert.equal(capitalize('hello'), 'Hello' );
assert.equal(capitalize(''), '');

 
// if (capitalize('hello') !== 'Hello') {
//   throw new Error('Функция работает неверно!');
// }
  
// if (capitalize('') !== '') {
//   throw new Error('Функция работает неверно!');
// }
  
console.log('Все тесты пройдены!');
