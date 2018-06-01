using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    [Table("SinhVien")]
    public class SinhVien : Entity<long>, IUser
    {
        [MaxLength(256)]
        public string MaSV { get; set; }

        [MaxLength(256)]
        public string HoTen { get; set; }

        [MaxLength(256)]
        public string NTNS { get; set; }
        public virtual Lop Lop { get; set; }
    }
}
