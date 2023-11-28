// BÀI TẬP 1
/* 
Đầu vào: Lấy dữ liệu người dùng

Các bước xử lí: Lấy lương một ngày làm được * số ngày làm

Đầu ra: Hiển thị kết quả lên UI
*/
// Bài làm
document.getElementById("tinhLuong").onclick = function () {
  var luongMotNgay = document.getElementById("luongMotNgay").value * 1;

  var soNgayLam = document.getElementById("soNgayLam").value * 1;

  var tongLuong = luongMotNgay * soNgayLam;

  document.querySelector(".bg-success").innerHTML =
    "Tiền lương của bạn là: " +
    tongLuong.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
};

/*BÀI TẬP 2 : Tính trung bình
Đầu vào: Xây dựng layout, lấy dữ liệu người dùng

Các bước thực hiện: Lấy dữ liệu người dùng nhập vào tính trung bình

Đầu ra: Hiển thị kết quả lên UI
*/
document.querySelector(".btn-info").onclick = function () {
  var giaTriMot = document.getElementById("soThuMot").value * 1;
  var giaTriHai = document.getElementById("soThuHai").value * 1;
  var giaTriBa = document.getElementById("soThuBa").value * 1;
  var giaTriBon = document.getElementById("soThuTu").value * 1;
  var giaTriNam = document.getElementById("soThuNam").value * 1;
  var tinhTrungBinh =
    (giaTriMot + giaTriHai + giaTriBa + giaTriBon + giaTriNam) / 5;
  document.querySelector(".bg-info").innerHTML = tinhTrungBinh;
};

// BÀI TẬP 3: Quy đổi tiền USD sang tiền Việt
/* 
Đầu vào: Xây dựng layout, lấy dữ liêuj người dùng

Các bước thực hiện: Lấy dữ liệu người dùng * tỉ giá USD

Đầu ra: Hiển thị kết quả lên UI
*/
document.querySelector(".btn-dark").onclick = function () {
  var tienUSD = document.getElementById("tienUSD").value * 1;
  var tiGia = 23500;
  var tienViet = tienUSD * tiGia;
  document.querySelector(".bg-dark").innerHTML =
    tienUSD +
    "$ = " +
    tienViet.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
};

// BÀI TẬP 4
/* 
Đầu vào: Lấy dữ liệu chiều dài và chiều rộng hình chữ nhật từ người dùng

Các bước xử lí: 
 - Tính chu vi: (chieuDai + chieuRong) * 2
 - Tính diện tích: chieuDai * chieuRong

 Đầu ra: Hiển thị kết quả lên UI
*/

document.querySelector(".btn-danger").onclick = function () {
  var chieuDai = document.getElementById("chieuDai").value * 1;
  var chieuRong = document.getElementById("chieuRong").value * 1;
  var tinhDienTich = chieuDai * chieuRong;
  var tinhChuVi = (chieuDai + chieuRong) * 2;
  document.getElementById("chuVi").innerHTML =
    "Chu vi HCN của bạn = " + tinhChuVi;
  document.getElementById("dienTich").innerHTML =
    "Diện tích HCN của bạn = " + tinhDienTich;
};

// BÀI TẬP 5
/* 
Đầu vào: Lấy dữ liệu từ người dùng

Các bước xử lí: soHangDonVi + soHangChuc

Đầu ra: Hiển thị dữ liệu lên UI
*/
document.querySelector(".btn-secondary").onclick = function () {
  var soCanTinh = document.getElementById("soCanTinh").value * 1;
  var soHangChuc = Math.floor(soCanTinh / 10);
  var soHangDonVi = soCanTinh % 10;
  var ketQuaTong = soHangChuc + soHangDonVi;
  if (soCanTinh < 10) {
    alert("Vui lòng nhập giá trị 10 trở lên");
  } else if (soCanTinh <= 99) {
    console.log(ketQuaTong);
  }
  document.querySelector(".bg-secondary").innerHTML = "Kết quả = " + ketQuaTong;
};
