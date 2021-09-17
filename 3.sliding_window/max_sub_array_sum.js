//Solution 1: O(n^2): Bad
/* function maxSubArraySum(arr, n) {
  if (arr.length === 0) return null;
  let output = 0;
  for (let i = 0; i < arr.length; i++) {
    const sum = arr.slice(i, n + i).reduce((a, b) => a + b);
    if (output < sum) {
      output = sum;
    }
  }
  return output;
} */

//Solution 2: O(n): Good
function maxSubArraySum(arr, n) {
  if (arr.length === 0) throw new Error("Enter array");

  let maxSum = 0;
  let tempMaxSum = 0;

  maxSum = arr.slice(0, n).reduce((a, b) => a + b);
  tempMaxSum = maxSum;

  for (let i = n; i < arr.length; i++) {
    tempMaxSum = tempMaxSum + arr[i] - arr[i - n];
    maxSum = Math.max(maxSum, tempMaxSum);
  }
  return maxSum;
}

//const arr = [2, 6, 9, 2, 1, 8, 5, 6, 3];

/* const arr = [1, 2, 5, 2, 8, 1, 5];
const n = 2; // 10 */

/* const arr = [1, 2, 5, 2, 8, 1, 5];
const n = 4; // 17 */

const arr = [4, 2, 1, 6];
const n = 1; // 6

/* const arr = [4, 2, 1, 6, 2];
const n = 4; // 13 */

/* const arr = [];
const n = 4; // error */

const r = maxSubArraySum(arr, n);
console.log(r);
