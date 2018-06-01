using Model;

namespace QLSV.ViewModel
{
    public class SinhVienModel : IUser
    {
        public long Id { get; set; }
        public string MaHS { get; set; }
        public string HoTen { get; set; }
        public string NTNS { get; set; }
        public string Lop { get; set; }

        public SinhVienModel()
        {
        }

        public SinhVienModel(SinhVien sv)
        {
            this.Id = sv.Id;
            HoTen = sv.HoTen;
            MaHS = sv.MaHS;
            NTNS = sv.NTNS;
            Lop = sv.Lop.TenLop;
        }
    }

    public class CreateHSModel : IUser
    {
        public string MaHS { get; set; }
        public string HoTen { get; set; }
        public string NTNS { get; set; }
        public long Lop { get; set; }
    }

    public class UpdateHSModel : CreateHSModel
    {
        public long Id { get; set; }
    }
}