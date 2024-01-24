function changeButtonText() {
  let myButton = document.getElementById("myButton");

  if (myButton.innerHTML === "OFF") {
    myButton.innerHTML = "ON";
  } else {
    myButton.innerHTML = "OFF";
  }
}

document.getElementById("myButton").addEventListener("click", changeButtonText);
