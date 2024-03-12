using Microsoft.EntityFrameworkCore;
using Domain.Models;
using System.Diagnostics;

namespace DAL.Database
{

    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            DbInitializer.Initialize(this, true);
        }

        public DbSet<LinkTreeDetail> LinkTreeDetail { get; set; }
        public DbSet<RedirectUrl> RedirectUrl { get; set; }
        public DbSet<User> User { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<User>().HasOne(l => l.LinkTreeDetail).WithOne(u => u.User)
                .HasForeignKey<LinkTreeDetail>(e => e.UserID).IsRequired();

            modelBuilder.Entity<LinkTreeDetail>()
                .HasMany(e => e.Urls2);
            //.WithOne(e => e.LinkTreeDetail)
            //.HasForeignKey(e => e.UrlID)
            //.IsRequired();

            base.OnModelCreating(modelBuilder);


        }



        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlite(("Data Source=LinkTreeV2.db"), x => x.MigrationsAssembly("Api"));



        }

    }
}