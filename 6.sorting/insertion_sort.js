function insertionSort(array) {
  let arr = Array.from(array);
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      console.log(i, j);
      // [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }

  return arr;
}

console.log(insertionSort([9, 5, 1, 4, 3]));
