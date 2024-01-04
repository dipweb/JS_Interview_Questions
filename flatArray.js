let arr = [1, [2, 3], [4, 5, [6, 7, 8]]];
// let flatArray = [];
function flatArray(arr) {
  var flatArray = [];
  flatten(arr);
  function flatten(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number") {
        flatArray.push(arr[i]);
      } else if (Array.isArray(arr[i])) {
        flatten(arr[i]);
      }
    }
  }
  return flatArray;
}

console.log(flatArray(arr));
