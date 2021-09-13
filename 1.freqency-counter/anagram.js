/* function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  if (str1 === "" && str2 === "") return true;

  const frCounter1 = {};
  const frCounter2 = {};

  for (let char of str1) {
    frCounter1[char] = ++frCounter1[char] || 1;
  }

  for (let char of str2) {
    frCounter2[char] = ++frCounter2[char] || 1;
  }

  for (let key in frCounter1) {
    if (frCounter1[key] !== frCounter2[key]) return false;
  }

  return true;
} */

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  if (str1 === "" && str2 === "") return true;

  const lookUp = {};

  for (let char of str1) lookUp[char] = ++lookUp[char] || 1;
  for (let char of str2) if (lookUp[char]) lookUp[char]--;
  for (let key in lookUp) if (lookUp[key] > 0) return false;

  return true;
}

const r = validAnagram("anagram", "namgara");
console.log(r);
