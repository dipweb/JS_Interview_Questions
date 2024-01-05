// Polyfill for map

let arr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (callbackFn) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callbackFn(this[i], i, this));
  }
  return result;
};

let modifiedArray = arr.myMap((item, index, arr) => item * 2);
console.log("modifiedArray", modifiedArray);

// Polyfill for filter

Array.prototype.myFilter = function (callbackFn) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      result.push(callbackFn(this[i], i, this));
    }
  }
  return result;
};

let filterData = arr.filter((item, index, arr) => {
  if (item < 4) {
    return item;
  }
});
console.log("filterData", filterData);

//Polyfill for reduce
Array.prototype.myReduce = function (callbackFn, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callbackFn(accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};

let reducedData = arr.myReduce((acc, item, index, arr) => {
  return acc + item;
}, 0);

console.log("reducedData", reducedData);
