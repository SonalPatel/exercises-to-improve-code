const checkValue = x => {
  if (x > 10) {
    return true;
    //executes if true
  } else {
    return false;
    //executes if false
  }
};
module.exports = checkValue;
// export default checkValue;

//cleaner way to write my function
//const checkValue = x => x > 10;
