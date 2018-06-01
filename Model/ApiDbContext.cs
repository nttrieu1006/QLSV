using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    public class ApiDbContext : DbContext
    {
        public ApiDbContext() : base("ApiConnection")
        {
        }

        static ApiDbContext()
        {
            Database.SetInitializer<ApiDbContext>(new IdentityDbInit());
        }

        public static ApiDbContext Create()
        {
            return new ApiDbContext();
        }

        public DbSet<Lop> Lops { get; set; }
        public DbSet<GiaoVien> GiaoViens { get; set; }
        public DbSet<SinhVien> SinhViens { get; set; }

        public override int SaveChanges()
        {
            //

            return base.SaveChanges();
        }
    }

    internal class IdentityDbInit : DropCreateDatabaseIfModelChanges<ApiDbContext>
    {
        public void Seed(ApiDbContext context)
        {
            PerformInit();
            base.Seed(context);
        }

        public void PerformInit()
        {
        }
    }
}
