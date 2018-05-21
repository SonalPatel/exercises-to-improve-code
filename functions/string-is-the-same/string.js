//function to check if one string equals another.
/*
const s = "123";
const p = "321";

if (s === p) {
  alert(true);
} else {
  alert(false);
}
*/

//now re-create this as a reusable function
function isTheSameWord(string1, string2) {
  if (string1 === string2) {
    return true;
  } else {
    return false;
  }
}
alert(isTheSameWord("word1", "word2"));

const isTheSameWord = (string1, string2) => string1 === string2;
