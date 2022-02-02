const repeatNumbers = (data) => {
     let sequence = "";
     for (let x = 0; x < data.length; x++) {
          for (i = 0; i < data[x][1]; i++)
            sequence += data[x][0];
            if (i === data[x][1] && x < data.length -1) {
                 sequence += ", "
            }
     } return sequence;
}


console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

// 1. a for...each loop to run through the arrays within the larger array
// 1a. for (let num of data) {}
// 2. use indexes of arrays so that num[0] is the value repeated and num[1] is the number of repeats.
// 3. declare a empty string vairable, which will populate with the repeats (let seq = ""; seq += (repeats)).
// 3a. this will mean the numbers will repeat on one line in a string format (e.g. 34343434)
// 4. use an if statement after the first loop to add a space and comma if the larger array has more than 1 nested array.