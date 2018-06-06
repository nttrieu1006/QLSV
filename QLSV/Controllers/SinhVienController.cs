using Model;
using QLSV.Infrastructure;
using QLSV.ViewModel;
using System.Linq;
using System.Web.Http;

namespace QLSV.Controllers
{
    public class SinhVienController : ApiController
    {
        private ApiDbContext db;
        private ErrorModel err;

        public SinhVienController()
        {
            db = new ApiDbContext();
            err = new ErrorModel();
        }

        /**
         * @api {Get} /SinhVien/Danhsach
         * @apigroup SINHVIEN
         * @apiPermission none
         * @apiVersion 1.0.0
         * 
         * @apiSuccess {long} Id Id của sinh viên
         * @apiSuccess {string} MaSV Mã của sinh viên
         * @apiSuccess {string} HoTen Họ tên của sinh viên
         * @apiSuccess {string} NTNS Ngày tháng năm sinh của sinh viên
         * @apiSuccess {string} Lop Tên lớp sinh viên đang học
         * 
         * @apiSuccessExample {json} Response: 
         * {
         *      Id:1,
         *      MaGV: "SV001",
         *      HoTen: "Nguyễn Văn A",
         *      NTNS: "1996",
         *      Lop: "14ABC01"
         * }
         */
        [HttpGet]
        public IHttpActionResult DanhSach()
        {
            var list = db.SinhViens.Select(x => new SinhVienModel()
            {
                Id = x.Id,
                MaSV = x.MaSV,
                HoTen = x.HoTen,
                NTNS = x.NTNS,
                Lop = x.Lop.TenLop
            });
            return Ok(list);
        }

        /**
        * @api {Get} /SinhVien/SVTheoId/:id
        * @apigroup SINHVIEN
        * @apiPermission none
        * @apiVersion 1.0.0
        * 
        * @apiSuccess {long} Id Id của sinh viên
        * @apiSuccess {string} MaSV Mã của sinh viên
        * @apiSuccess {string} HoTen Họ tên của sinh viên
        * @apiSuccess {string} NTNS Ngày tháng năm sinh của sinh viên
        * @apiSuccess {string} Lop Tên lớp sinh viên đang học
        * 
        * @apiSuccessExample {json} Response: 
        * {
        *      Id:1,
        *      MaSV: "GV001",
        *      HoTen: "Nguyễn Văn A",
        *      NTNS: "1990",
        *      Lop: "14ABC01"
        * }
        * 
        * @apiError (Error 404) {string} Errors Mảng các lỗi
        * @apiErrorExample {json} Error-Response:
        *     HTTP/1.1 404 Not Found
        *     {
        *       "error": "Không tìm thấy sinh viên"
        *     }
        *
        */
        [HttpGet]
        public IHttpActionResult SVTheoId(long id)
        {
            IHttpActionResult httpActionResult;
            SinhVien sv = db.SinhViens.FirstOrDefault(x => x.Id == id);
            if (sv == null)
            {
                err.Add("Không tìm thấy sinh viên");
                httpActionResult = new ErrorActionResult(Request, System.Net.HttpStatusCode.NotFound, err);
            }
            else
            {
                httpActionResult = Ok(new SinhVienModel(sv));
            }
            return httpActionResult;
        }

        /**
         * @api {Post} /SinhVien/TaoMoi
         * @apigroup SINHVIEN
         * @apiPermission none
         * @apiVersion 1.0.0
         * 
         * @apiParam {string} MaSV Mã của sinh viên mới
         * @apiParam {string} HoTen Họ tên của sinh viên mới
         * @apiParam {string} [NTNS] Ngày tháng năm sinh của sinh viên mới
         * @apiParam {long} Lop Id của lớp sinh viên mới đang học
         * 
         * @apiParamExample {json} Request-Example: 
		 * {
         *      MaSV: "SV002",
         *      HoTen: "Nguyễn Văn B",
         *      NTNS: "1998",
         *      Lop: 2
		 * }
         * 
         * @apiSuccess {long} Id Id của sinh viên vửa tạo
         * @apiSuccess {string} MaSV Mã của sinh viên vửa tạo
         * @apiSuccess {string} HoTen Họ tên của sinh viên vửa tạo
         * @apiSuccess {string} [NTNS] Ngày tháng năm sinh của sinh viên vửa tạo
         * @apiSuccess {long} Lop Id của lớp sinh viên vửa tạo đang học 
         * 
         * @apiSuccessExample {json} Response: 
         * {
         *      Id:2,
         *      MaSV: "SV002",
         *      HoTen: "Nguyễn Văn B",
         *      NTNS: "1998",
         *      Lop: 2
         * }
         * 
         * @apiError (Error 404) {string} Errors Mảng các lỗi
         * @apiErrorExample {json} Error-Response:
         *     HTTP/1.1 400 Bad Request
         *     {
         *       "error": "Mã sinh viên không được để trống",
         *       "error": "Họ tên sinh viên không được để trống",
         *       "error": "Lớp không tồn tại"    
         *     }
         *
         */
        [HttpPost]
        public IHttpActionResult TaoMoi(TaoHSModel model)
        {
            IHttpActionResult httpActionResult;
            if (string.IsNullOrEmpty(model.MaSV))
            {
                err.Add("Mã sinh viên là trường bắt buộc");
            }
            if (string.IsNullOrEmpty(model.HoTen))
            {
                err.Add("Họ tên là trường bắt buộc");
            }
            Lop lop = db.Lops.FirstOrDefault(x => x.Id == model.Lop);
            if (lop == null)
            {
                err.Add("Lớp không tồn tại");
            }
            if (err.errors.Count == 0)
            {
                SinhVien sv = new SinhVien();
                sv.MaSV = model.MaSV;
                sv.HoTen = model.HoTen;
                sv.Lop = lop;
                sv.NTNS = model.NTNS;

                sv = db.SinhViens.Add(sv);
                db.SaveChanges();

                SinhVienModel viewmodel = new SinhVienModel(sv);
                httpActionResult = Ok(viewmodel);
            }
            else
            {
                httpActionResult = new ErrorActionResult(Request, System.Net.HttpStatusCode.BadRequest, err);
            }
            return httpActionResult;
        }

        /**
         * @api {Put} /SinhVien/Sua
         * @apigroup SINHVIEN
         * @apiPermission none
         * @apiVersion 1.0.0
         * 
         * @apiParam {long} Id Id cúa sinh viên cần sửa
         * @apiParam {string} MaSV Mã của sinh viên cần sửa
         * @apiParam {string} HoTen Họ tên của sinh viên cần sửa
         * @apiParam {string} [NTNS] Ngày tháng năm sinh của sinh viên cần sửa
         * @apiParam {long} Lop Id của lớp sinh viên cần sửa đang học
         * 
         * @apiParamExample {json} Request-Example: 
		 * {
         *      Id : 2
         *      MaSV: "SV003",
         *      HoTen: "Nguyễn Văn B",
         *      NTNS: "1998",
         *      Lop: 2
		 * }
         * 
         * @apiSuccess {long} Id Id của sinh viên vửa sửa
         * @apiSuccess {string} MaSV Mã của sinh viên vửa sửa
         * @apiSuccess {string} HoTen Họ tên của sinh viên vửa sửa
         * @apiSuccess {string} [NTNS] Ngày tháng năm sinh của sinh viên vửa sửa
         * @apiSuccess {long} Lop Id của lớp sinh viên vửa sửa đang học 
         * 
         * @apiSuccessExample {json} Response: 
         * {
         *      Id : 2
         *      MaSV: "SV003",
         *      HoTen: "Nguyễn Văn B",
         *      NTNS: "1998",
         *      Lop: 2
         * }
         * 
         * @apiError (Error 404) {string} Errors Mảng các lỗi
         * @apiErrorExample {json} Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "Không tìm thấy sinh viên",
         *       "error": "Lớp không tồn tại"     
         *     }
         *
         */
        [HttpPut]
        public IHttpActionResult Sua(SuaHSModel model)
        {
            IHttpActionResult httpActionResult;
            SinhVien sv = db.SinhViens.FirstOrDefault(x => x.Id == model.Id);
            if (sv == null)
            {
                err.Add("Không tìm thấy học sinh");
            }
            Lop lop = db.Lops.FirstOrDefault(x => x.Id == model.Lop);
            if (lop == null)
            {
                err.Add("Lớp không tồn tại");
            }
            if (err.errors.Count == 0)
            {
                sv.MaSV = model.MaSV ?? model.MaSV;
                sv.HoTen = model.HoTen ?? model.HoTen;
                sv.Lop = lop ?? lop;
                sv.NTNS = model.NTNS ?? model.NTNS;

                db.Entry(sv).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                httpActionResult = Ok(new SinhVienModel(sv));
            }
            else
            {
                httpActionResult = new ErrorActionResult(Request, System.Net.HttpStatusCode.BadRequest, err);
            }
            return httpActionResult;
        }
    }
}