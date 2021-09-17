//const strings = ['ab','ab','abc'];
//const quries = ['ab','abc','bc'];

const strings = ["aba", "baba", "aba", "xzxb"];
const quries = ["aba", "xzxb", "ab"];

//const strings = ["def", "de", "fgh", "abc", "abc"];
//const quries = ["de", "lmn", "fgh", "abc"];

function same(strings, quries) {
  const lookUp = {};
  const output = [];

  for (let key of strings) {
    lookUp[key] = ++lookUp[key] || 1;
  }

  for (let key of quries) {
    lookUp[key] ? output.push(lookUp[key]) : output.push(0);
  }

  return output;
}
const output = same(strings, quries);

console.log(output);
