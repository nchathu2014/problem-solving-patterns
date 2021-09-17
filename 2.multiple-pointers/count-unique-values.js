//Solution-1
/* function countUniqueValues(arr) {
  const lookUp = {};
  for (let key of arr) lookUp[key] = ++lookUp[key] || 1;
  return Object.keys(lookUp).length;
} */

//Solution-2
/* function countUniqueValues(arr) {
  return new Set(arr).size;
} */

//Solution-3
/* function countUniqueValues(arr) {
  let left = 0;
  let right = 1;

  for (let item of arr) {
    if (arr[left] === arr[right]) {
      right++;
    } else {
      left++;
      arr[left] = arr[right];
      right++;
    }
  }

  return left;
} */

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

const r = countUniqueValues([1, 1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 8]);
console.log(r);
