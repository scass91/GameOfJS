function arrayCreation(x, y) {
  let arr = new Array(x);
  for (let i=0; i<arr.length; i++) {
    arr[i] = new Array(y);
  }
  return arr;
}

function cellCount(arr) {
  var cells = arr.map(element => { return element.length }).reduce((a,b) => a + b, 0)
  return cells;
}
