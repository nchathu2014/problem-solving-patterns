function binarySearch(arr, n) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (arr[middle] !== n && left <= right) {
    if (arr[middle] > n) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  if (arr[middle] === n) {
    return middle;
  }
  return -1;
}

const rslt = binarySearch([1, 2, 3, 4, 5, 6, 7, 15, 16, 45], 45);
console.log(rslt);
