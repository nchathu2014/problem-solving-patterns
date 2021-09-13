//SOLUTION:1
//O(n^2) : time-complexity : BAD
/* function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let item of arr1) {
    // O(n)
    const index = arr2.indexOf(item ** 2); // O(n)
    if (index === -1) return false;
    arr2.splice(index, 1);
  }

  return true;
} */

//O(n)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let item of arr1) ////O(n)
    frequencyCounter1[item] = ++frequencyCounter1[item] || 1;

  for (let item of arr2) ////O(n)
    frequencyCounter2[item] = ++frequencyCounter2[item] || 1;

  for (let item in frequencyCounter1) ////O(n)
    if (frequencyCounter1[item] !== frequencyCounter2[item ** 2]) return false;

  return true;
}

const r = same([1, 5, 2, 3], [1, 4, 9, 25]); // true

console.log(r);
