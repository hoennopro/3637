const hotenmua = document.querySelector("input[name='hotenmua']");
const emailmua = document.querySelector("input[name='emailmua']");
const sodienthoaimua = document.querySelector("input[name='sodienthoaimua']");
const diachimua = document.querySelector("input[name='diachimua']");
const ngaydat = document.querySelector("input[name='ngaydat']"); // Thêm nếu có trường ngày đặt hàng
const hotennhan = document.querySelector("input[name='hotennhan']");
const emailnhan = document.querySelector("input[name='emailnhan']");
const sodienthoai = document.querySelector("input[name='sodienthoai']");
const diachinhan = document.querySelector("input[name='diachinhan']");
const languoinhan = document.querySelector("input[name='languoinhan']");

function checkThongTinNguoiMua() {
  if (hotenmua.value === "") {
    alert("Bạn chưa nhập họ và tên");
    hotenmua.focus();
    return false;
  } else {
    hotenmua.value = hotenmua.value.toUpperCase();
  }

  if (!emailmua.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,6}$/)) {
    alert("Email không đúng định dạng");
    emailmua.focus();
    return false;
  }

  if (ngaydat && !ngaydat.value.match(/^\d{2}-\d{2}-\d{4}$/)) {
    alert("Ngày đặt không đúng định dạng");
    ngaydat.focus();
    return false;
  }

  if (languoinhan.checked) {
    hotennhan.value = hotenmua.value;
    emailnhan.value = emailmua.value;
    sodienthoai.value = sodienthoaimua.value;
    diachinhan.value = diachimua.value;
  }

  return true;
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  if (!checkThongTinNguoiMua()) {
    return;
  }

  if (confirm("Bạn có muốn gửi email cho tôi không?")) {
    alert("Đặt hàng thành công, email đã gửi tới cho quý khách");
  } else {
    alert("Đặt hàng thành công");
  }
});

document
  .querySelector("input[type='reset']")
  .addEventListener("click", function () {
    hotenmua.value = "";
    emailmua.value = "";
    sodienthoaimua.value = "";
    diachimua.value = "";
    ngaydat.value = "";
    hotennhan.value = "";
    emailnhan.value = "";
    sodienthoai.value = "";
    diachinhan.value = "";
    languoinhan.checked = false;
  });
