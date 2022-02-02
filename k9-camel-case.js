const camelCase = (input) => {
  let camelString = "";
  strArr = input.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    if (i !== 0) {
      camelString += strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    } else {
      camelString += strArr[i];
    }
  } return camelString;
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

// 1. declare a variable and assign it an empty string
// 2. run through input using a for loop and add letters to new variable one at a time.
// 2a. If the character is a space, we capitalize the next letter and do not copy over the space