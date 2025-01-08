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

for (let i = 0; i < myNumberList.length; i++) {
  myNumberList[i].addEventListener("click", () => {
    if (operand === null) {
      if (number1 === null) {
        number1 = myNumberList[i].textContent;
      } else {
        if (number1.length <= 18) number1 += myNumberList[i].textContent;
      }
      mainText.textContent = number1;
    } else {
      if (number2 === null) {
        number2 = myNumberList[i].textContent;
      } else {
        if (number2.length <= 18) number2 += myNumberList[i].textContent;
      }
      mainText.textContent = number2;
    }
  });
}

const myChangeSign = document.querySelector(".change-sign");

myChangeSign.addEventListener("click", () => {
  number1 = -parseInt(number1);
  mainText.textContent = number1;
});
function evaluate(number1, number2, operand) {
  let num1 = parseFloat(number1);
  let num2 = parseFloat(number2);
  let res;
  if (operand == "x") {
    res = num1 * num2;
  } else if (operand == "/") {
    res = num1 / num2;
  } else if (operand == "-") {
    res = num1 - num2;
  } else if (operand == "+") {
    res = num1 + num2;
  } else if ((operand = "+/-")) {
    res = num2;
  }
  return res;
}
for (let i = 0; i < myOperationList.length; i++) {
  myOperationList[i].addEventListener("click", () => {
    if (myOperationList[i].textContent == "clear") {
      mainText.textContent = "0";
      number1 = null;
      number2 = null;
      operand = null;
    } else {
      if (number1 !== null && number2 != null) {
        let newText = evaluate(number1, number2, operand);
        mainText.textContent = newText;
        number1 = newText;
        operand = myOperationList[i].textContent;
        number2 = null;
      } else if (number1 !== null && operand === null) {
        operand = myOperationList[i].textContent;
      } else if (number1 !== null && operand !== null) {
        operand = myOperationList[i].textContent;
      }
    }
  });
}

const myCalculate = document.querySelector(".calculate");

myCalculate.addEventListener("click", () => {
  if (number1 !== null && number2 !== null && operand !== null) {
    mainText.textContent = evaluate(number1, number2, operand);
    number1 = mainText.textContent;
    operand = null;
    number2 = null;
  }
});

const myBack = document.querySelector(".back");

myBack.addEventListener("click", () => {
  if (operand === null) {
    if (number1.toString().length > 1) {
      const newNumber1 = number1.slice(0, -1);
      mainText.textContent = newNumber1;
      number1 = newNumber1;
    } else if (number1.toString().length == 1) {
      number1 = null;
      mainText.textContent = "0";
    }
  } else {
    if (number2.toString().length > 1) {
      const newNumber2 = number2.slice(0, -1);
      mainText.textContent = newNumber2;
      number2 = newNumber2;
    } else if (number2.toString().length == 1) {
      number2 = 0;
      mainText.textContent = "0";
    }
  }
});

const myDecimal = document.querySelector(".decimal");

myDecimal.addEventListener("click", () => {
  if (operand === null) {
    if (number1 === null) {
      number1 = myDecimal.textContent;
    } else {
      if (number1.length <= 18) number1 += myDecimal.textContent;
    }
    mainText.textContent = number1;
  } else {
    if (number2 === null) {
      number2 = myDecimal.textContent;
    } else {
      if (number2.length <= 18) number2 += myDecimal.textContent;
    }
    mainText.textContent = number2;
  }
});
