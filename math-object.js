function randomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateNumbers() {
  let randomNo1 = randomNumbers(1, 100);
  let randomNo2 = randomNumbers(1, 100);
  let lownum = Math.min(randomNo1, randomNo2);
  let result = lownum * (randomNo1 + randomNo2);
  document.getElementById("output").innerHTML =
    `The first generated number is ${randomNo1} and the second number is ${randomNo2}. The minimum between the two numbers is ${lownum} . The final computation based on the assignment is ${result} `;
}
