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
const s = "123";
const p = "321";
function reUsable(s, p) {
  if (s === p) {
    return true;
  } else {
    return false;
  }
}
alert(reUsable(p));
