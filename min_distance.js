//Solution:01
/* function minDistance(arr, n) {
  const lookUp = {};
  for (let item of arr) {
    let diff;
    if (n > 0 && item < 0) {
      diff = n + item;
    }
    if (n > 0 && item > 0) {
      if (item >= n) diff = item - n;
      if (item < n) diff = n - item;
    }

    if (n === 0) return Math.min(...arr);

    lookUp[item] = diff;
  }

  const valueArray = Object.values(lookUp);
  const minValueIndex = valueArray.indexOf(Math.min(...valueArray));
  const minKey = Object.keys(lookUp)[minValueIndex];
  return minKey;
}
 */

function minDistance(arr, n) {
  let N;
  let mode = Math.max(...arr) > n;
  console.log("MODE", mode);

  if (n < 0) N = Math.abs(n);
  else N = -n;
  console.log("ARR", arr, "n", n);
  arr = arr.map((item) => item + N);

  const minValue = Math.min(...arr);

  if (minValue >= 0) {
    const index = arr.indexOf(minValue);
    return arr.map((item) => item - N)[index];
  } else {
    arr = arr.map((item) => Math.abs(item));
    const minValue = Math.min(...arr);
    const index = arr.indexOf(minValue);
    return arr.map((item) => -1 * (item + N))[index];
  }
}

//const r = minDistance([6, 2, 3, 4, 5, 1], 8);
const r = minDistance([5, 4, -1, 2, 3], 1); //-3<0

console.log("RSLT", r);
