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
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}

function getUniqueId(arr, key) {
  if (arr.length > 0) {
    var highest = Math.max.apply(
      Math,
      arr.map(function(o) {
        return o[key];
      })
    );
    return parseInt(highest) + 1;
  } else {
    return 0;
  }
}
