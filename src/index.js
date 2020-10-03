
exports.min = function min (array) {
  if (Array.isArray(array) && array.length !== 0) {
    let mini = array[0];
    for (let i = 0; i < array.length - 1; i++) {
      if (mini > array[i]) {mini = array[i];}
    }
    return mini;
  }
  return 0;
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length !== 0) {
    let maxi = array[0];
    for (let i = 0; i < array.length; i++) {
      if (maxi < array[i]) {maxi = array[i];}
    }
    return maxi;
  }
  return 0;
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length !== 0) {
    let avrg = array[0];
    for (let i = 1; i < array.length; i++) {
      avrg += array[i];
    }
    return avrg / array.length;
  }
  return 0;
}
