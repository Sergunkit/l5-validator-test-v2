/* eslint-disable max-len */
/* eslint-disable no-new-wrappers */
/* eslint-disable class-methods-use-this */
export default class StringSchema {
  constructor(validators) {
    this.validators = [...validators];
  }

  isValid(str) {
    return this.validators.every((validator) => validator(str));
  }

  startsFromUpperCase() {
    const forbiddenSimbols = ['1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', '-', '!', '?', '0'];
    const val = (str) => (str.length > 0 ? !!((str[0].toUpperCase() === str[0] && !(forbiddenSimbols.includes(str[0])))) : false);
    return new StringSchema([...this.validators, val]);
  }

  length(len) {
    const val = (str) => !!(str.length === len);
    return new StringSchema([...this.validators, val]);
  }

  hasExclamation() {
    const val = (str) => str.split('').includes('!');
    return new StringSchema([...this.validators, val]);
  }
}
