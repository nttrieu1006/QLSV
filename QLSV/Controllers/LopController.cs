using Model;
using QLSV.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
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

        [HttpGet]
        public IHttpActionResult GetAll()
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

        [HttpGet]
        public IHttpActionResult GetById(long id)
        {
            IHttpActionResult httpActionResult;
            Lop lop = db.Lops.FirstOrDefault(x => x.Id == id);
            if (lop == null)
            {
                err.Add("Không tìm thấy lớp");
                httpActionResult = Ok(err);
            }
            else
            {
                httpActionResult = Ok(new LopModel(lop));
            }
            return httpActionResult;
        }
        [HttpPost]
        public IHttpActionResult Create(CreateLopModel model)
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
                httpActionResult = Ok(err);
            }

            return httpActionResult;
        }
        [HttpPut]
        public IHttpActionResult Update(UpdateLopModel model)
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
                httpActionResult = Ok(err);
            }
            return httpActionResult;
        }
    }
}
