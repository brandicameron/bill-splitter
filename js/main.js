let bill = document.getElementById("bill");
let tipOutput = document.querySelector(".tip-output");
let personOutput = document.querySelector(".person-output");
let tipValue = 20;
let personValue = 2;

function tipAmount(e) {
  e.preventDefault();
  if (e.target.classList.contains("tip-decrement") && tipValue === 0) {
    tipValue = 0;
    tipOutput.textContent = tipValue;
  } else if (e.target.classList.contains("tip-decrement")) {
    tipValue = tipValue - 5;
    tipOutput.textContent = tipValue;
  } else if (e.target.classList.contains("tip-increment")) {
    tipValue = tipValue + 5;
    tipOutput.textContent = tipValue;
  }
}

function personCounter(e) {
  e.preventDefault();
  if (e.target.classList.contains("person-decrement") && personValue === 1) {
    personValue = 1;
    personOutput.textContent = personValue;
  } else if (e.target.classList.contains("person-decrement")) {
    personValue = personValue - 1;
    personOutput.textContent = personValue;
  } else if (e.target.classList.contains("person-increment")) {
    personValue = personValue + 1;
    personOutput.textContent = personValue;
  }
}

function calculateBill() {
  let billAmount = parseFloat(bill.value);
  let totalTip = document.querySelector(".total-tip");
  let totalBill = document.querySelector(".total-bill");
  let personTip = document.querySelector(".person-tip");
  let personBill = document.querySelector(".person-bill");
  let tipTotal = parseFloat((billAmount * tipValue) / 100);
  let billTotal = billAmount + tipTotal;

  if (isNaN(billAmount)) {
    totalTip.textContent = `0.00`;
    totalBill.textContent = `0.00`;
    personTip.textContent = `0.00`;
    personBill.textContent = `0.00`;
  } else {
    totalTip.textContent = tipTotal.toFixed(2);
    totalBill.textContent = billTotal.toFixed(2);
    personTip.textContent = (tipTotal / personValue).toFixed(2);
    personBill.textContent = (billTotal / personValue).toFixed(2);
  }
}

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", tipAmount);
  button.addEventListener("click", personCounter);
  button.addEventListener("click", calculateBill);
});

bill.addEventListener("input", calculateBill);

document.querySelector(".clear-btn").addEventListener("click", () => {
  bill.value = "";
  tipValue = 20;
  tipOutput.textContent = tipValue;
  personValue = 2;
  personOutput.textContent = personValue;
  calculateBill();
});
