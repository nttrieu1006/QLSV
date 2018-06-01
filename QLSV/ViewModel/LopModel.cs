using Model;

namespace QLSV.ViewModel
{
    public class LopModel
    {
        public string MaLop { get; set; }
        public string TenLop { get; set; }
        public int SiSo { get; set; }
        public long GVChuNhiem { get; set; }
        public long Id { get; set; }

        public LopModel()
        {
        }

        public LopModel(Lop Lop)
        {
            Id = Lop.Id;
            MaLop = Lop.MaLop;
            TenLop = Lop.TenLop;
            GVChuNhiem = Lop.GVChuNhiem.Id;
            SiSo = Lop.SiSo;
        }
    }

    public class CreateLopModel
    {
        public string MaLop { get; set; }
        public string TenLop { get; set; }
        public long GVChuNhiem { get; set; }
        public int SiSo { get; set; }
    }

    public class UpdateLopModel : CreateLopModel
    {
        public long Id { get; set; }
    }
}