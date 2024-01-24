function changeInputColor() {
  let input = document.getElementById("input");

  if (input.value === "") {
    input.style.backgroundColor = "yellow";
  } else {
    input.style.backgroundColor = "white";
  }
}

function addItem() {
  let input = document.getElementById("input");
  let list = document.getElementById("list");

  let item = document.createElement("li");
  item.textContent = input.value;

  list.appendChild(item);

  input.value = "";
  changeInputColor();
}

document.getElementById("input").addEventListener("input", changeInputColor);
document.getElementById("add").addEventListener("click", addItem);
