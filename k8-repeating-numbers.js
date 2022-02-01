const repeatNumbers = (data) => {
     for (let num of data) {
         for (i = 0; i <= num[1]; i++)
            console.log(num[0]);
     }    
}


console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

// 1. a for...each loop to run through the arrays within the larger array
// 1a. for (let num of data) {}
// 2. use indexes of arrays so that num[0] is the value repeated and num[1] is the number of repeats.