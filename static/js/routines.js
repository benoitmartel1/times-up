// Get array item that has the highest value at  specified key and return the value incremented
function getNextValue(arr, key) {
  var res = Math.max.apply(
    Math,
    arr.map(function(a) {
      return a[key];
    })
  );
  return ++res;
}
