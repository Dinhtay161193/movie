import Axios from "axios";
class CartCourseService {
  signInCourse(item, user) {
    return Axios({
      method: "POST",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc",
      data: {
        maKhoaHoc: item,
        taiKhoan: user.taiKhoan,
      },
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });
  }
}

export default CartCourseService;
