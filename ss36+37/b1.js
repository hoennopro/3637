function checkAnswer() {
  let answer = document.getElementById("answer").value;
  let message = document.getElementById("message");

  if (answer.length > 10) {
    message.innerHTML = "Câu trả lời không hợp lệ (độ dài tối đa là 10 ký tự)";
  } else {
    message.innerHTML = "Câu trả lời hợp lệ";
  }
}

document.getElementById("check").addEventListener("click", checkAnswer);
