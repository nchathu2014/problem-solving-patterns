// Iterative Solution
function collectOddValues(arr) {
  return arr.filter((num) => {
    if (num % 2 !== 0) return num;
  });
}

//HELPER METHOD RECURSION
// Recursive Solution without Space Complexity
function collectOddValuesNew(arr) {
  const result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);
    helper(helperInput.slice(1));
  }

  helper(arr);
  return result;
}

// Recursive Solution with Space Complexity
function collectOddValuesNew1(arr) {
  let len = arr.length;
  let Olen = arr.length;

  function helper(helperInput) {
    if (len === 0) return;
    if (helperInput[0] % 2 !== 0) arr.push(helperInput[0]);

    len--;
    helper(helperInput.slice(1));
  }

  helper(arr);
  return arr.slice(Olen);
}

const r = collectOddValuesNew1([1, 2, 3, 4, 5, 6, 7]);
console.log(r);

// PURE RECUSRION
