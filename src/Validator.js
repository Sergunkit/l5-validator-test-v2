/* eslint-disable class-methods-use-this */
import StringSchema from './StringSchema.js';
import ArraySchema from './ArraySchema.js';
import ObjectSchema from './ObjectSchema.js';

export default class Validaor {
  string() {
    // eslint-disable-next-line no-new-wrappers
    return new StringSchema([(value) => typeof value === 'string']);
  }

  array() {
    return new ArraySchema([(value) => Array.isArray(value)]);
  }

  object() {
    return new ObjectSchema();
  }
}
