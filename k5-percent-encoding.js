const urlEncode = (text) => {
  const trim = text.trim();
  let newText = "";
  for (let i = 0; i < trim.length; i++) {
    if (trim[i] === " ") {
      newText += "%20";
    } else {
      newText += trim[i];
    }
  } return newText;
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));