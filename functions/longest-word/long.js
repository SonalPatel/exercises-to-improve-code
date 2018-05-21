//given two strings return the one with the longest word
const nameOne = "Sonal is learning js";
const nameTwo = "Pete is already awesome at js";

function findlongestword(sonal, pete) {
  if (nameOne.length > nameTwo.length) {
    alert(nameOne);
  } else {
    alert(nameTwo);
  }
}
findlongestword();
