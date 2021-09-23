function linearSearch(arr, n) {
  for (let item of arr) if (item === n) return arr.indexOf(item);
  return -1;
}

const rslt = linearSearch([1, 2, 3, 4, 5, 6, 7], 14);
console.log(rslt);
