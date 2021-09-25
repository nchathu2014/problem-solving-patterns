function largestAndSecondLargest(sizeOfArray, arr) {
  arr = [...new Set(arr)].sort((a, b) => b - a);
  if (!arr[1]) arr[1] = -1;
  return [arr[0], arr[1]];
}

console.log(largestAndSecondLargest(5, [2, 2, 2]));
