const myNumbers = document.querySelector(".Numbers");
const mainText = document.querySelector(".mainText");
for (let i = 0; i <= 9; i++) {
  const newNumber = document.createElement("button");
  newNumber.textContent = `${i}`;
  newNumber.classList.add(`myNumber`);
  myNumbers.appendChild(newNumber);
}

const myOperationList = document.querySelector(".Operations").children;

for (let i = 0; i < myOperationList.length; i++) {
  myOperationList[i].classList.add("Operation");
}

const mySpecialList = document.querySelector(".special").children;

for (let i = 0; i < mySpecialList.length; i++) {
  mySpecialList[i].classList.add("Spl");
}

let number1 = null,
  number2 = null;
let operand = null;
const myNumberList = document.querySelectorAll(".myNumber");

// Add functionality when the User Presses number
for (let i = 0; i < myNumberList.length; i++) {
  myNumberList[i].addEventListener("click", () => {
    if (operand === null) {
      if (number1 === null) {
        number1 = myNumberList[i].textContent;
      } else {
        number1 += myNumberList[i].textContent;
      }
      mainText.textContent = number1;
      console.log("clicked");
    } else {
      if (number2 === null) {
        number2 = myNumberList[i].textContent;
      } else {
        number2 += myNumberList[i].textContent;
      }
      mainText.textContent = number2;
      console.log("clicked");
    }
  });
}

const myChangeSign = document.querySelector(".change-sign");

myChangeSign.addEventListener("click", () => {
  number1 = -parseInt(number1);
  mainText.textContent = number1;
});
function evaluate(number1, number2, operand) {
  let num1 = parseInt(number1);
  let num2 = parseInt(number2);
  if (operand == "x") {
    return num1 * num2;
  } else if (operand == "/") {
    return num1 / num2;
  } else if (operand == "-") {
    return num1 - num2;
  } else if (operand == "+") {
    return num1 + num2;
  }
}
for (let i = 0; i < myOperationList.length; i++) {
  myOperationList[i].addEventListener("click", () => {
    if (myOperationList[i].textContent == "clear") {
      mainText.textContent = "0";
      number1 = null;
      number2 = null;
      operand = null;
      console.log("clicked");
    } else {
      if (number1 !== null && number2 != null) {
        let newText = evaluate(number1, number2, operand);
        mainText.textContent = newText;
        number1 = newText;
        operand = myOperationList[i].textContent;
        number2 = null;
      } else if (number1 !== null && operand === null) {
        operand = myOperationList[i].textContent;
      }
    }
  });
}

const myCalculate = document.querySelector(".calculate");

myCalculate.addEventListener("click", () => {
  if (number1 !== null && number2 !== null) {
    mainText.textContent = evaluate(number1, number2, operand);
  }
});
