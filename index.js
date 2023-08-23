function cal1() {
  let diemChuan = document.querySelector("#diemChuan").value * 1;
  let diemToan = document.querySelector("#diemToan").value * 1;
  let diemLy = document.querySelector("#diemLy").value * 1;
  let diemHoa = document.querySelector("#diemHoa").value * 1;
  let khuVuc = document.querySelector("#khuVuc").value * 1;
  let doiTuong = document.querySelector("#doiTuong").value * 1;
  let diemTong = diemToan + diemLy + diemHoa + khuVuc + doiTuong;

  if (diemToan === 0 || diemLy === 0 || diemHoa === 0) {
    document.querySelector(
      "#result1"
    ).innerHTML = `Bạn đã thi trượt <br> Tổng điểm của bạn là ${diemTong} điểm `;
    return;
  }
  if (diemTong >= diemChuan) {
    document.querySelector(
      "#result1"
    ).innerHTML = `Bạn đã thi đậu <br> Tổng điểm của bạn là ${diemTong} điểm `;
  } else {
    document.querySelector(
      "#result1"
    ).innerHTML = `Bạn đã thi trượt <br> Tổng điểm của bạn là ${diemTong} điểm `;
  }
}
function cal2() {
  let ten = document.querySelector("#ten").value;
  let kw = document.querySelector("#kw").value * 1;
  let result = 1;

  if (kw <= 0) {
    alert("Mời bạn nhập lại số kw");
    return;
  }
  if (kw <= 50) {
    result = result * 500 * kw;
  } else if (kw <= 100) {
    result = result * 500 * 50 + 650 * (kw - 50);
  } else if (kw <= 200) {
    result = result * 500 * 50 + 650 * 50 + 850 * (kw - 100);
  } else if (kw <= 350) {
    result = result * 500 * 50 + 650 * 50 + 850 * 100 + 1100 * (kw - 200);
  } else {
    result =
      result * 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + 1300 * (kw - 350);
  }
  document.querySelector(
    "#result2"
  ).innerHTML = `Tiền thanh toán của quý khách ${ten} là ${result.toLocaleString()} VND`;
}
function cal3() {
  let hoTen = document.querySelector("#hoTen").value;
  let tongThuNhap = document.querySelector("#tongThuNhap").value * 1;
  let soNguoiPhuThuoc = document.querySelector("#soNguoiPhuThuoc").value * 1;
  let thuNhapChiuThue = tongThuNhap - 4 - soNguoiPhuThuoc * 1.6;
  let result;
  let thueSuat;
  if (thuNhapChiuThue <= 60) {
    thueSuat = 5 / 100;
  } else if (thuNhapChiuThue <= 120) {
    thueSuat = 10 / 100;
  } else if (thuNhapChiuThue <= 210) {
    thueSuat = 15 / 100;
  } else if (thuNhapChiuThue <= 384) {
    thueSuat = 20 / 100;
  } else if (thuNhapChiuThue <= 624) {
    thueSuat = 25 / 100;
  } else if (thuNhapChiuThue <= 960) {
    thueSuat = 30 / 100;
  } else {
    thueSuat = 35 / 100;
  }
  result = thuNhapChiuThue * thueSuat;
  document.querySelector(
    "#result3"
  ).innerHTML = `Thuế thu nhập cá nhân phải trả theo quy định của ${hoTen} là ${result.toFixed(
    2
  )} triệu VND`;
}
function addClass() {
  let loaiKH = document.querySelector("#loaiKhachHang").value * 1;
  let KetNoi = document.querySelector(".KetNoi");
  let isOn;
  // 0 là nhà dân, 1 là doanh nghiệp
  if (loaiKH === 0) {
    isOn = true;
  } else {
    isOn = false;
  }
  KetNoi.classList.toggle("disable", isOn);
}
function cal4() {
  let maKH = document.querySelector("#maKhachHang").value;
  let loaiKH = document.querySelector("#loaiKhachHang").value * 1;
  let soKetNoi = document.querySelector("#soKetNoi").value * 1;
  let soKenhCaoCap = document.querySelector("#soKenhCaoCap").value * 1;
  let result;
  if (loaiKH === 0) {
    result = 4.5 + 20.5 + soKenhCaoCap * 7.5;
  } else {
    if (soKetNoi <= 10) {
      result = 15 + 7.5 * soKetNoi + 50 * soKenhCaoCap;
    } else {
      result = 15 + 75 + (soKetNoi - 10) * 5 + 50 * soKenhCaoCap;
    }
  }
  document.querySelector(
    "#result4"
  ).innerHTML = `Mã khách hàng ${maKH} có hóa đơn tiền cáp cần thanh toán là ${result} $`;
}
