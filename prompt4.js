function checkCondition(input) {
  if (input === 0) {
    console.log("The number is 0");
    return "Input is 0";
  } else if (input > 0) {
    console.log("The number is greater than 0");
    return "Input is greater than 0";
  } else {
    console.log("The number is less than 0");
    return "Input is less than 0";
  }
}

checkCondition(0);
checkCondition(55.768);
checkCondition(-2,000);
