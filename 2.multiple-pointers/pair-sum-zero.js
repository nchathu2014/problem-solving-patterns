console.log("Multiple Pointers");
//Time-CDomplexity: O(n)
// Space Complexity: O(1)
function sumZero(arr) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    const sum = arr[leftPointer] + arr[rightPointer];
    if (sum === 0) {
      return [arr[leftPointer], arr[rightPointer]];
    } else if (sum > 0) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
}

const r = sumZero([-10, -3, -2, -1, 0, 1, 2, 4]);
console.log(r);
