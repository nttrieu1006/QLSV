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
    public class SinhVienController : ApiController
    {
        private ApiDbContext db;
        private ErrorModel err;

        public SinhVienController()
        {
            db = new ApiDbContext();
            err = new ErrorModel();
        }

        [HttpGet]
        public IHttpActionResult GetAll()
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

        [HttpGet]
        public IHttpActionResult GetById(long id)
        {
            IHttpActionResult httpActionResult;
            SinhVien sv = db.SinhViens.FirstOrDefault(x => x.Id == id);
            if (sv == null)
            {
                err.Add("Không tìm thấy sinh viên");
                httpActionResult = Ok(err);
            }
            else
            {
                httpActionResult = Ok(new SinhVienModel(sv));
            }
            return httpActionResult;
        }
        [HttpPost]
        public IHttpActionResult Create(CreateHSModel model)
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
                httpActionResult = Ok(err);
            }
            return httpActionResult;
        }

        [HttpPut]
        public IHttpActionResult Update(UpdateHSModel model)
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
            if(err.errors.Count == 0)
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
                httpActionResult = Ok(err);
            }
            return httpActionResult;
        }
    }
}
