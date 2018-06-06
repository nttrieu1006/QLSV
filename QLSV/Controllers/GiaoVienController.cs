using Model;
using QLSV.Infrastructure;
using QLSV.ViewModel;
using System.Linq;
using System.Web.Http;

namespace QLSV.Controllers
{
    public class GiaoVienController : ApiController
    {
        private ApiDbContext db;
        private ErrorModel err;

        public GiaoVienController()
        {
            db = new ApiDbContext();
            err = new ErrorModel();
        }

        /**
         * @api {Get} /GiaoVien/Danhsach
         * @apigroup GIAOVIEN
         * @apiPermission none
         * @apiVersion 1.0.0
         * 
         * @apiSuccess {long} Id Id của giáo viên
         * @apiSuccess {string} MaGV Mã của giáo viên
         * @apiSuccess {string} HoTen Họ tên của giáo viên
         * @apiSuccess {string} NTNS Ngày tháng năm sinh của giáo viên
         * @apiSuccess {string} TrinhDo Trình độ học vấn của giáo viên
         * 
         * @apiSuccessExample {json} Response: 
         * {
         *      Id:1,
         *      MaGV: "GV001",
         *      HoTen: "Nguyễn Văn A",
         *      NTNS: "1990",
         *      TrinhDo: "Tiến Sĩ"
         * }
         */
        [HttpGet]
        public IHttpActionResult DanhSach()
        {
            var list = db.GiaoViens.Select(x => new GiaoVienModel
            {
                Id = x.Id,
                MaGV = x.MAGV,
                HoTen = x.HoTen,
                NTNS = x.NTNS,
                TrinhDo = x.TrinhDo
            });
            return Ok(list);
        }

        /**
         * @api {Get} /GiaoVien/GVTheoId/:id
         * @apigroup GIAOVIEN
         * @apiPermission none
         * @apiVersion 1.0.0
         * 
         * @apiSuccess {long} Id Id của giáo viên
         * @apiSuccess {string} MaGV Mã của giáo viên
         * @apiSuccess {string} HoTen Họ tên của giáo viên
         * @apiSuccess {string} NTNS Ngày tháng năm sinh của giáo viên
         * @apiSuccess {string} TrinhDo Trình độ học vấn của giáo viên
         * 
         * @apiSuccessExample {json} Response: 
         * {
         *      Id:1,
         *      MaGV: "GV001",
         *      HoTen: "Nguyễn Văn A",
         *      NTNS: "1990",
         *      TrinhDo: "Tiến Sĩ"
         * }
         * 
         * @apiError (Error 404) {string} Errors Mảng các lỗi
         * @apiErrorExample {json} Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "Không tìm thấy giáo viên"
         *     }

         */
        [HttpGet]
        public IHttpActionResult GVTheoId(long id)
        {
            IHttpActionResult httpActionResult;
            GiaoVien giaoVien = db.GiaoViens.FirstOrDefault(x => x.Id == id);
            if (giaoVien == null)
            {
                err.Add("Không tìm thấy giáo viên");
                httpActionResult = new ErrorActionResult(Request,System.Net.HttpStatusCode.NotFound,err);
            }
            else
            {
                httpActionResult = Ok(new GiaoVienModel(giaoVien));
            }
            return httpActionResult;
        }

        /**
         * @api {Post} /GiaoVien/TaoMoi
         * @apigroup GIAOVIEN
         * @apiPermission none
         * @apiVersion 1.0.0
         * 
         * @apiParam {string} MaGV Mã của giáo viên mới
         * @apiParam {string} HoTen Họ tên của giáo viên mới
         * @apiParam {string} [NTNS] Ngày tháng năm sinh của giáo viên mới
         * @apiParam {string} [TrinhDo] Trình độ học vấn của giáo viên mới
         * 
         * @apiParamExample {json} Request-Example: 
		 * {
         *      MaGV: "GV002",
         *      HoTen: "Nguyễn Văn B",
         *      NTNS: "1988",
         *      TrinhDo: "Tiến Sĩ"
		 * }
         * 
         * @apiSuccess {long} Id Id của giáo viên vửa tạo
         * @apiSuccess {string} MaGV Mã của giáo viên vửa tạo
         * @apiSuccess {string} HoTen Họ tên của giáo viên vửa tạo
         * @apiSuccess {string} NTNS Ngày tháng năm sinh của giáo viên vửa tạo
         * @apiSuccess {string} TrinhDo Trình độ học vấn của giáo viên vửa tạo
         * 
         * @apiSuccessExample {json} Response: 
         * {
         *      Id:2,
         *      MaGV: "GV002",
         *      HoTen: "Nguyễn Văn B",
         *      NTNS: "1988",
         *      TrinhDo: "Tiến Sĩ"
         * }
         * 
         * @apiError (Error 404) {string} Errors Mảng các lỗi
         * @apiErrorExample {json} Error-Response:
         *     HTTP/1.1 400 Bad Request
         *     {
         *       "error": "Mã giáo viên không được để trống",
         *       "error": "Họ tên giáo viên không được để trống",
         *     }

         */
        [HttpPost]
        public IHttpActionResult TaoMoi(TaoGVModel model)
        {
            IHttpActionResult httpActionResult;
            if (string.IsNullOrEmpty(model.MaGV))
            {
                err.Add("Mã giáo viên không được để trống");
            }

            if (string.IsNullOrEmpty(model.HoTen))
            {
                err.Add("Họ tên giáo viên không được để trống");
            }

            if (err.errors.Count == 0)
            {
                GiaoVien giaoVien = new GiaoVien();
                giaoVien.MAGV = model.MaGV;
                giaoVien.HoTen = model.HoTen;
                giaoVien.NTNS = model.NTNS;
                giaoVien.TrinhDo = model.TrinhDo;

                giaoVien = db.GiaoViens.Add(giaoVien);

                db.SaveChanges();
                GiaoVienModel vienModel = new GiaoVienModel(giaoVien);
                httpActionResult = Ok(vienModel);
            }
            else
            {
                httpActionResult = new ErrorActionResult(Request,System.Net.HttpStatusCode.BadRequest,err);
            }

            return httpActionResult;
        }

        /**
         * @api {Put} /GiaoVien/Sua
         * @apigroup GIAOVIEN
         * @apiPermission none
         * @apiVersion 1.0.0
         * 
         * @apiParam {string} MaGV Mã của giáo viên cần sửa
         * @apiParam {string} HoTen Họ tên của giáo viên cần sửa
         * @apiParam {string} [NTNS] Ngày tháng năm sinh của giáo viên cần sửa
         * @apiParam {string} [TrinhDo] Trình độ học vấn của giáo viên cần sửa
         * 
         * @apiParamExample {json} Request-Example: 
		 * {
         *      MaGV: "GV002",
         *      HoTen: "Nguyễn Văn B",
         *      NTNS: "1988",
         *      TrinhDo: "Tiến Sĩ"
		 * }
         * 
         * @apiSuccess {long} Id Id của giáo viên vửa sửa
         * @apiSuccess {string} MaGV Mã của giáo viên vửa sửa
         * @apiSuccess {string} HoTen Họ tên của giáo viên vửa sửa
         * @apiSuccess {string} NTNS Ngày tháng năm sinh của giáo viên vửa sửa
         * @apiSuccess {string} TrinhDo Trình độ học vấn của giáo viên vửa sửa
         * 
         * @apiSuccessExample {json} Response: 
         * {
         *      Id:2,
         *      MaGV: "GV002",
         *      HoTen: "Nguyễn Văn B",
         *      NTNS: "1988",
         *      TrinhDo: "Tiến Sĩ"
         * }
         * 
         * @apiError (Error 404) {string} Errors Mảng các lỗi
         * @apiErrorExample {json} Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "Không tìm thấy giáo viên"
         *     }

         */
        [HttpPut]
        public IHttpActionResult Sua(SuaGVModel model)
        {
            IHttpActionResult httpActionResult;
            GiaoVien giaoVien = db.GiaoViens.FirstOrDefault(x => x.Id == model.Id);
            if (giaoVien == null)
            {
                err.Add("Không tìm thấy giáo viên");
                httpActionResult = new ErrorActionResult(Request, System.Net.HttpStatusCode.NotFound, err);
            }
            else
            {
                giaoVien.MAGV = model.MaGV ?? model.MaGV;
                giaoVien.HoTen = model.HoTen ?? model.HoTen;
                giaoVien.NTNS = model.NTNS ?? model.NTNS;
                giaoVien.TrinhDo = model.TrinhDo ?? model.TrinhDo;

                db.Entry(giaoVien).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                httpActionResult = Ok(new GiaoVienModel(giaoVien));
            }
            return httpActionResult;
        }
    }
}