const text = "hello world";
const reverseText = text.split("").reverse().join("");
const reverseArr = reverseText.split(" ");
const resultArr = [];

for (let i = reverseArr.length - 1; i >= 0; i--) {
  resultArr.push(reverseArr[i] + "ay");
}

console.log(resultArr.join(" "));
