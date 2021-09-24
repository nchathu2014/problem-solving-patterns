/* function binarySearch(arr, n) {
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
console.log(rslt); */

function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === num) return middle;

    arr[middle] < num ? (start = middle + 1) : (end = middle - 1);
  }

  return -1;
}

const r = binarySearch([1, 2, 3, 4, 5, 6, 7, 89, 90, 97, 98], 98);
console.log(r);
// O(log(n))

//log(log(11))

// S         M             E
// 1,2,3,4,5,6,7,89,90,97,98

// S     M     E
// 7,89,90,97,98

// SM  E
// 97,98

// SEM
// 98

//while(S<E){}
