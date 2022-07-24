const GRAB_X_1 = 8000;
const GRAB_X_2 = 7500;
const GRAB_X_3 = 7000;
const GRAB_X_WAIT = 2000;

const GRAB_SUV_1 = 9000;
const GRAB_SUV_2 = 8500;
const GRAB_SUV_3 = 8000;
const GRAB_SUV_WAIT = 3000;

const GRAB_BLACK_1 = 10000;
const GRAB_BLACK_2 = 9500;
const GRAB_BLACK_3 = 9000;
const GRAB_BLACK_WAIT = 3500;

var tienKm_1 = 0;
var tienKm_2 = 0;
var tienKm_3 = 0;
var tienCho = 0;
var tongTien = 0;

function loaiXe() {
  var grabX = document.getElementById("grabX");
  var grabSUV = document.getElementById("grabSUV");
  var grabBlack = document.getElementById("grabBlack");
  var loaiXe = "";
  if (grabX.checked) {
    loaiXe = "grabX";
  } else if (grabSUV.checked) {
    loaiXe = "grabSUV";
  } else if (grabBlack.checked) {
    loaiXe = "grabBlack";
  }
  return loaiXe;
}

document.getElementById("btnTinhTien").onclick = function () {
  //reset tiền chờ
  tienCho = 0;
  var xe = loaiXe();
  var soKm = document.getElementById("soKm").value * 1;
  var tgCho = document.getElementById("tgCho").value * 1;

  switch (xe) {
    case "grabX":
      tinhTienTong(soKm, tgCho, GRAB_X_WAIT, GRAB_X_1, GRAB_X_2, GRAB_X_3);
      break;

    case "grabSUV":
      tinhTienTong(
        soKm,
        tgCho,
        GRAB_SUV_WAIT,
        GRAB_SUV_1,
        GRAB_SUV_2,
        GRAB_SUV_3
      );
      break;

    case "grabBlack":
      tinhTienTong(
        soKm,
        tgCho,
        GRAB_BLACK_WAIT,
        GRAB_BLACK_1,
        GRAB_BLACK_2,
        GRAB_BLACK_3
      );
      break;

    default:
      alert("Vui lòng chọn loại xe");
      break;
  }
  document.getElementById("xuatTien").innerHTML = tongTien;
  document.getElementById("divThanhTien").style.display = "block";
};

// refactor code
// Tính tiền chờ
function tinhTienCho(tgCho, giaCho) {
  var result = 0;
  if (tgCho >= 3) {
    result = Math.floor(tgCho / 3) * giaCho;
  }
  return result;
}

// Tính tiền Km1
function tinhTienKm1(soKm, giaKm) {
  var result = soKm * giaKm;
  return result;
}

//Tính tiền Km2
function tinhTienKm2(soKm, giaKm) {
  var result = (soKm - 1) * giaKm;
  return result;
}

// Tinh tiền Km3
function tinhTienKm3(soKm, giaKm) {
  var result = (soKm - 19) * giaKm;
  return result;
}

// Tính tiền tổng
function tinhTienTong(soKm, tgCho, giaCho, giaKm1, giaKm2, giaKm3) {
  tienCho = tinhTienCho(tgCho, giaCho);
  if (0 < soKm && soKm <= 1) {
    tienKm_1 = tinhTienKm1(soKm, giaKm1);
    tongTien = tienKm_1 + tienCho;
  } else if (soKm > 1 && soKm <= 19) {
    tienKm_1 = tinhTienKm1(1, giaKm1);
    tienKm_2 = tinhTienKm2(soKm, giaKm2);
    tongTien = tienKm_1 + tienKm_2 + tienCho;
  } else if (19 < soKm) {
    tienKm_1 = tinhTienKm1(1, giaKm1);
    tienKm_2 = tinhTienKm2(soKm, giaKm2);
    tienKm_3 = tinhTienKm3(soKm, giaKm3);
    tongTien = tienKm_1 + tienKm_2 + tienKm_3 + tienCho;
  } else {
    alert("Vui lòng nhập đúng số Km!");
  }
}
