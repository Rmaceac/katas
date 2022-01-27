const sumLargestNumbers = function(data) {
  let firstNum = 0;
  let secondNum = 0;
  for (let num of data) {
    for (num of data) {
      if (num > firstNum) {
        firstNum = num;
    } else if (num < firstNum && num > secondNum) {
        secondNum = num;
      } 
    }
  }
  return firstNum + secondNum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));