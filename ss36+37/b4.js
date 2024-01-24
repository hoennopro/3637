function calculateSum() {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  let sum = parseInt(number1) + parseInt(number2);

  document.getElementById("sum").value = sum;
}

// C2
// function calculateSumWithOperator() {
//   let number1 = document.getElementById("number1").value;
//   let number2 = document.getElementById("number2").value;
//   let sum = number1 + number2;

//   document.getElementById("sum").value = sum;
// }
