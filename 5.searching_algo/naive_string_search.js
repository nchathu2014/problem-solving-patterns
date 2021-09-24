/* function stringSearchOld(str, word) {
  let match = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < word.length; j++) {
      let N = word.length - 1;
      if (str[i] === word[j]) {
        if (str[i + N - 2] === word[j + N - 2]) {
          if (str[i + N - 1] === word[j + N - 1]) {
            if (str[i + N] === word[j + N]) {
              match++;
            }
          } else {
            break;
          }
        } else {
          break;
        }
      } else {
        break;
      }
    }
  }

  return match;
} */

function stringSearch(str, word) {
  let match = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (word[j] !== str[i + j]) {
        break;
      }
      if (j === word.length - 1) {
        match++;
      }
    }
  }

  return match;
}

const r = stringSearch("lorie loled", "lo");
console.log(r);
