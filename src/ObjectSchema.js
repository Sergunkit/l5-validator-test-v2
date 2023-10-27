/* eslint-disable class-methods-use-this */
export default class ObjectSchema {
  constructor(validators) {
    this.validators = validators;
  }

  isValid(testObj) {
    const keys = Object.keys(testObj);
    if (keys.length !== Object.keys(this.validators).length) {
      return false;
    }
    return keys.every((key) => this.validators[key].isValid(testObj[key]));
  }

  shape(valObj) {
    return new ObjectSchema(valObj);
  }
}
