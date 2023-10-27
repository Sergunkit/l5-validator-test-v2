export default class ArraySchema {
  constructor(validators) {
    this.validators = [...validators];
  }

  isValid(arr) {
    return this.validators.every((validator) => validator(arr));
  }

  maxDepth(mDepth) {
    const wraper = (ar) => {
      let depthes = [];
      const iter = (arr, deep) => {
        const res = arr.reduce((acc, item) => {
          if (!Array.isArray(item)) {
            return acc.concat(deep);
          }
          return iter(item, deep + 1);
        }, []);
        depthes = depthes.concat(res).filter((el) => el);
        return Math.max(...depthes) <= mDepth;
      };
      return iter(ar, 0);
    };
    return new ArraySchema([...this.validators, wraper]);
  }
}
