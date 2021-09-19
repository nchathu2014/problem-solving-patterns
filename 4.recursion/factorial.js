//Iterative approach
function factorial(n) {
  //3,2,1
  let fac = 1;
  for (let i = n; i > 1; i--) fac *= i;
  return fac;
}

// Recursive approach
/**
 * 3! = 3 * 2!
 *          2! = 2 * 1!
 *                   1!= 1
 * n! = n * (n-1)!
 */
function factorialNew(n) {
  //3,2,1
  if (n === 1) return 1;
  return n * factorialNew(n - 1);
}

const r = factorialNew(5);
console.log(r);
