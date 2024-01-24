function calculate() {
  const operator = document.querySelector("select[name='operator']").value;
  const number1 = document.querySelector("input[name='number1']").value;
  const number2 = document.querySelector("input[name='number2']").value;

  let result;
  switch (operator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
  }

  document.querySelector("#result").innerHTML = result;
}

document.querySelector("button").addEventListener("click", calculate);
