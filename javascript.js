const myNumbers = document.querySelector(".Numbers");

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
