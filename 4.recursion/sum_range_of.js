function sumRangeOfN(range) {
  if (range === 1) return 1;
  return range + sumRangeOfN(range - 1);
}

const sum = sumRangeOfN(3);
console.log(sum);

// 1, 2, 3
/**
 *
 * sum(3) = 3 + sum(2)
 *                2 + sum(1)
 *                       1
 */
