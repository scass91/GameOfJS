function arrayCreation(x, y) {
  let arr = new Array(x);
  for (let i=0; i<arr.length; i++) {
    arr[i] = new Array(y);
  }
  return arr;
}
