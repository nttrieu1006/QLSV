using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    [Table("Lop")]
    public class Lop : Entity<long>
    {
        [MaxLength(256)]
        public string MaLop { get; set; }

        [MaxLength(256)]
        public string TenLop { get; set; }
        public int SiSo { get; set; }

        public virtual ICollection<GiaoVien> DSGV { set; get; }
        [InverseProperty("QuanLyLop")]
        public virtual GiaoVien GVChuNhiem { set; get; }
        public virtual ICollection<SinhVien> SinhViens { set; get; }
    }
}
