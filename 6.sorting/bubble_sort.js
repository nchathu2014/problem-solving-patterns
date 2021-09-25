//OPTIMIZED THE bubbleSort with noSwap varaible

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) {
      break;
    }
    console.log("ONE PASS COMPLETED");
  }
  return arr;
}

function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

const r = bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
console.log(r);

/**                   i
 *     1, 2, 5, 3, 4, 8
 *                    j
 */
