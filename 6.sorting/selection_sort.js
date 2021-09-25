/* function selectionSort(arr) {
  let min = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        min = arr.indexOf(arr[j + 1]);
      } else {
        min = arr.indexOf(arr[j]);
      }
      swap(arr, j, min);
      //console.log(arr[j], arr[j + 1]);
    }
  }
  return arr;
} */

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
      console.log(i, j);
    }
    swap(arr, i, lowest);
    console.log("first pass");
  }
  return arr;
}

function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

console.log(selectionSort([34, 22, 10, 19, 17]));
