//given two strings return the one with the longest word
function findlongestword(name1, name2) {
  if (name2.length > name1.length) {
    return name1;
  } else {
    return name2;
  }
}
//alert(findlongestword("pete", "sonal"));

module.exports = long;
