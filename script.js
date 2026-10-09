const displayField = document.querySelector(".displayField");
const acBtn = document.querySelector(".acBtn");
const calculateBtn = document.querySelector(".calculateBtn");
const numBtn = document.querySelectorAll(".numBtn");
const operatorBtn = document.querySelectorAll(".operatorBtn");

numBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    displayField.value += btn.textContent;
  });
});

operatorBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    displayField.value += btn.textContent;
  });
});
acBtn.addEventListener("click", () => {
  displayField.value = " ";
});

calculateBtn.addEventListener("click", () => {
  displayField.value = displayField.value.replace("÷", "/");
  displayField.value = displayField.value.replace("x", "*");
  displayField.value = eval(displayField.value);
});
