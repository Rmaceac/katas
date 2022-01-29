const conditionalSum = function(values, condition) {
  let newArray = [];
  let sum = 0;
  for (let value of values) {
    if (value % 2 === 0 && condition === "even") {
      newArray.push(value);
    } else if (value % 2 !== 0 && condition === "odd") {
      newArray.push(value);
    }
  } 
  for (let num of newArray) {
    sum += num;
  } return sum;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));