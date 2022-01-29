const checkAir = (samples, threshold) => {
    let dirtySamples = [0];
    const sampleThresh = samples.length * threshold;
    for (let sample of samples) {
        if (sample === "dirty") {
            dirtySamples++;
        }
    }
    if (dirtySamples >= sampleThresh) {
        return "Polluted";
    } else {
        return "Clean";
    }
}

console.log(checkAir(
    ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
    0.3
  ));

  console.log(checkAir(
    ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
    0.25
  ));
  
  console.log(checkAir(
    ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
    0.9
  ));
  
// 1. need to loop through the array and check for dirty samples. if we find one: dirtySamples++
// 2. need to count the total amount of samples and figure out how many samples make up the threshold.
// in the first example here ^^ e.g. const sampleThresh = samples.length * threshold
// 3. If (dirtySamples >= sampleThresh) { return "Polluted"; } else { return "Clean"; } 