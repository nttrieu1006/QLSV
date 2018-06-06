using Model;
using QLSV.Infrastructure;
using QLSV.ViewModel;
using System.Linq;
using System.Web.Http;

namespace QLSV.Controllers
{
    public class LopController : ApiController
    {
        private ApiDbContext db;
        private ErrorModel err;

        public LopController()
        {
            db = new ApiDbContext();
            err = new ErrorModel();
        }

        /**
         * @api {Get} /Lop/Danhsach
         * @apigroup LOP
         * @apiPermission none
         * @apiVersion 1.0.0
         * 
         * @apiSuccess {long} Id Id của lớp
         * @apiSuccess {string} MaLop Mã của lớp
         * @apiSuccess {string} TenLop Tên của lớp
         * @apiSuccess {int} [SiSo] Sĩ số của lớp
         * @apiSuccess {long} GVChuNhiem Id Giáo viên chủ nhiệm của lớp
         * 
         * @apiSuccessExample {json} Response: 
         * {
         *      Id:1,
         *      MaLop: "Lop001",
         *      TenLop: "14ABC01",
         *      SiSo: 40,
         *      GVChuNhiem: 1
         * }
         */
        [HttpGet]
        public IHttpActionResult DanhSach()
        {
            var list = db.Lops.Select(x => new LopModel
            {
                MaLop = x.MaLop,
                TenLop = x.TenLop,
                Id = x.Id,
                SiSo = x.SiSo,
                GVChuNhiem = x.GVChuNhiem.Id
            });
            return Ok(list);
        }

        /**
         * @api {Get} /Lop/LopTheoId/:id
         * @apigroup LOP
         * @apiPermission none
         * @apiVersion 1.0.0
         * 
         * @apiSuccess {long} Id Id của lớp
         * @apiSuccess {string} MaLop Mã của lớp
         * @apiSuccess {string} TenLop Tên của lớp
         * @apiSuccess {int} [SiSo] Sĩ số của lớp
         * @apiSuccess {long} GVChuNhiem Id Giáo viên chủ nhiệm của lớp
         * 
         * @apiSuccessExample {json} Response: 
         * {
         *      Id:1,
         *      MaLop: "Lop001",
         *      TenLop: "14ABC01",
         *      SiSo: 40,
         *      GVChuNhiem: 1
         * }
         * 
         * @apiError (Error 404) {string} Errors Mảng các lỗi
         * @apiErrorExample {json} Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "Không tìm thấy lớp"
         *     }
         *
         */
        [HttpGet]
        public IHttpActionResult LopTheoId(long id)
        {
            IHttpActionResult httpActionResult;
            Lop lop = db.Lops.FirstOrDefault(x => x.Id == id);
            if (lop == null)
            {
                err.Add("Không tìm thấy lớp");
                httpActionResult = new ErrorActionResult(Request, System.Net.HttpStatusCode.NotFound, err);
            }
            else
            {
                httpActionResult = Ok(new LopModel(lop));
            }
            return httpActionResult;
        }

        /**
         * @api {Post} /LOP/TaoMoi
         * @apigroup LOP
         * @apiPermission none
         * @apiVersion 1.0.0
         * 
         * @apiParam {string} MaLop Mã của lớp mới
         * @apiParam {string} TenLop Tên của lớp mới
         * @apiParam {int} [SiSo] Sĩ số của lớp mới
         * @apiParam {long} GVChuNhiem Id Giáo viên chủ nhiệm của lớp mới
         * 
         * @apiParamExample {json} Request-Example: 
		 * {
         *      MaLop: "Lop002",
         *      TenLop: "15ABC02",
         *      SiSo: 44,
         *      GVChuNhiem: 2
		 * }
         * 
         * @apiSuccess {long} Id Id của lớp vừa tạo
         * @apiSuccess {string} MaLop Mã của lớp vừa tạo
         * @apiSuccess {string} TenLop Tên của lớp vừa tạo
         * @apiSuccess {int} [SiSo] Sĩ số của lớp vừa tạo
         * @apiSuccess {long} GVChuNhiem Id Giáo viên chủ nhiệm của lớp vừa tạo
         * 
         * @apiSuccessExample {json} Response: 
         * {
         *      Id:2,
         *      MaLop: "Lop002",
         *      TenLop: "15ABC02",
         *      SiSo: 44,
         *      GVChuNhiem: 2
         * }
         * 
         * @apiError (Error 404) {string} Errors Mảng các lỗi
         * @apiErrorExample {json} Error-Response:
         *     HTTP/1.1 400 Bad Request
         *     {
         *       "error": "Mã lớp là trường bắt buộc",
         *       "error": "Tên lớp là trường bắt buộc",
         *       "error" : "Không tìm thấy giáo viên"
         *     }
         *
         */
        [HttpPost]
        public IHttpActionResult TaoMoi(TaoLopModel model)
        {
            IHttpActionResult httpActionResult;
            if (string.IsNullOrEmpty(model.MaLop))
            {
                err.Add("Mã lớp là trường bắt buộc");
            }

            if (string.IsNullOrEmpty(model.TenLop))
            {
                err.Add("Tên lớp là trường bắt buộc");
            }
            var GVCN = db.GiaoViens.FirstOrDefault(x => x.Id == model.GVChuNhiem);

            if (GVCN == null)
            {
                err.Add("Không tìm thấy giáo viên");
            }
            if (err.errors.Count == 0)
            {
                Lop lop = new Lop();
                lop.MaLop = model.MaLop;
                lop.TenLop = model.TenLop;
                lop.SiSo = model.SiSo;
                lop.GVChuNhiem = GVCN;
                lop = db.Lops.Add(lop);
                db.SaveChanges();
                LopModel viewmodel = new LopModel(lop);
                httpActionResult = Ok(viewmodel);
            }
            else
            {
                httpActionResult = new ErrorActionResult(Request, System.Net.HttpStatusCode.BadRequest, err);
            }

            return httpActionResult;
        }

        /**
         * @api {Put} /Lop/Sua
         * @apigroup LOP
         * @apiPermission none
         * @apiVersion 1.0.0
         * 
         * @apiParam {long} Id Id của lớp cần sửa
         * @apiParam {string} MaLop Mã của lớp cần sửa
         * @apiParam {string} TenLop Tên của lớp cần sửa
         * @apiParam {int} [SiSo] Sĩ số của lớp cần sửa
         * @apiParam {long} GVChuNhiem Id Giáo viên chủ nhiệm của lớp cần sửa
         * 
         * @apiParamExample {json} Request-Example: 
		 * {
         *      Id:2,
         *      MaLop: "Lop002",
         *      TenLop: "15ABC02",
         *      SiSo: 44,
         *      GVChuNhiem: 2
		 * }
         * 
         * @apiSuccess {long} Id Id của lớp vừa sửa
         * @apiSuccess {string} MaLop Mã của lớp vừa sửa
         * @apiSuccess {string} TenLop Tên của lớp vừa sửa
         * @apiSuccess {int} [SiSo] Sĩ số của lớp vừa sửa
         * @apiSuccess {long} GVChuNhiem Id Giáo viên chủ nhiệm của lớp vừa sửa
         * 
         * @apiSuccessExample {json} Response: 
         * {
         *      Id:2,
         *      MaLop: "Lop002",
         *      TenLop: "15ABC02",
         *      SiSo: 44,
         *      GVChuNhiem: 2
         * }
         * 
         * @apiError (Error 404) {string} Errors Mảng các lỗi
         * @apiErrorExample {json} Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "Không tìm thấy giáo viên",
         *       "error": "Không tìm thấy lớp"
         *     }
         *
         */
        [HttpPut]
        public IHttpActionResult Sua(SuaLopModel model)
        {
            IHttpActionResult httpActionResult;
            Lop lop = db.Lops.FirstOrDefault(x => x.Id == model.Id);
            if (lop == null)
            {
                err.Add("Không tìm thấy lớp");
            }
            var GVCN = db.GiaoViens.FirstOrDefault(x => x.Id == model.GVChuNhiem);

            if (GVCN == null)
            {
                err.Add("Không tìm thấy giáo viên");
            }
            if (err.errors.Count == 0)
            {
                lop.MaLop = model.MaLop ?? model.MaLop;
                lop.TenLop = model.TenLop ?? model.TenLop;
                lop.GVChuNhiem = GVCN ?? GVCN;
                lop.SiSo = model.SiSo;
                db.Entry(lop).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                httpActionResult = Ok(new LopModel(lop));
            }
            else
            {
                httpActionResult = new ErrorActionResult(Request, System.Net.HttpStatusCode.BadRequest, err);
            }
            return httpActionResult;
        }
    }
}