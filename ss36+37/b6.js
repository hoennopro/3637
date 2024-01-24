function checkData() {
  const studentId = document.querySelector("input[name='studentId']").value;
  if (studentId.length !== 6) {
    alert("Mã số sinh viên phải gồm 6 ký tự");
    return false;
  }

  const studentName = document.querySelector("input[name='studentName']").value;
  if (studentName === "") {
    alert("Tên sinh viên không được để trống");
    return false;
  }

  const age = document.querySelector("input[name='age']").value;
  if (age < 18) {
    alert("Tuổi sinh viên phải lớn hơn hoặc bằng 18");
    return false;
  }

  return true;
}

document
  .querySelector("button[name='action'][value='create']")
  .addEventListener("click", () => {
    if (!checkData()) {
      return;
    }

    const studentId = document.querySelector("input[name='studentId']").value;
    const studentName = document.querySelector(
      "input[name='studentName']"
    ).value;
    const age = document.querySelector("input[name='age']").value;
    const phone = document.querySelector("input[name='phone']").value;
    const email = document.querySelector("input[name='email']").value;

    const tableBody = document.querySelector("tbody");
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
      <td>${studentId}</td>
      <td>${studentName}</td>
      <td>${age}</td>
      <td>${phone}</td>
      <td>${email}</td>
    `;
    tableBody.appendChild(tableRow);

    document.querySelector("form").reset();
  });
