const checkValue = x => {
  if (x > 10) {
    return "15 is greater than 10";
    //executes if true
  } else {
    return "15 is lower than 10";
    //executes if false
  }
};
console.log(checkValue(15));
alert(checkValue(15));
