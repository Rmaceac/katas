const numberOfVowels = function(data) {
  let vowels = ["a", "e", "i", "o", "u"];
  let num = 0;
  for (let i = 0; i < data.length; i++) {
    let char = data[i];
    for (let vowel of vowels) {
      if (char === vowel) {
        num++;
      }
    }
  } return num;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));