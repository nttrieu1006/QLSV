using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    [Table("GiaoVien")]
    public class GiaoVien : Entity<long>, IUser
    {
        [MaxLength(256)]
        public string MAGV { get; set; }

        [MaxLength(256)]
        public string HoTen { get; set; }

        [MaxLength(256)]
        public string NTNS { get; set; }

        [MaxLength(256)]
        public string TrinhDo { get; set; }

        public virtual ICollection<Lop> QuanLyLop { set; get; }
        public virtual ICollection<Lop> DSLop { set; get; }

    }
}
