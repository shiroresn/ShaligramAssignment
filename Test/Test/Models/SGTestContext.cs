using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Test.Models
{
    public partial class SGTestContext : DbContext
    {   /*
        public SGTestContext()
        {
        }
        */

        public SGTestContext(DbContextOptions<SGTestContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TblAreaOfInterest> TblAreaOfInterest { get; set; }
        public virtual DbSet<TblDepartment> TblDepartment { get; set; }
        public virtual DbSet<TblEmployee> TblEmployee { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=localhost\\SQLEXPRESS02;Database=SGTest;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TblAreaOfInterest>(entity =>
            {
                entity.ToTable("tblAreaOfInterest");

                entity.HasIndex(e => e.Name)
                    .HasName("UQ__tblAreaO__737584F613657527")
                    .IsUnique();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TblDepartment>(entity =>
            {
                entity.ToTable("tblDepartment");

                entity.HasIndex(e => e.DepartmentName)
                    .HasName("UQ__tblDepar__D949CC3430B82EF6")
                    .IsUnique();

                entity.Property(e => e.DepartmentName)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TblEmployee>(entity =>
            {
                entity.ToTable("tblEmployee");

                entity.HasIndex(e => e.ContactNumber)
                    .HasName("UQ__tblEmplo__570665C646CDECD4")
                    .IsUnique();

                entity.HasIndex(e => e.Email)
                    .HasName("UQ__tblEmplo__A9D10534FB2453F8")
                    .IsUnique();

                entity.Property(e => e.AreaOfInterest).IsUnicode(false);

                entity.Property(e => e.ContactNumber)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.EmployeeName)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Gender)
                    .IsRequired()
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.Property(e => e.UploadedPhoto)
                    .IsRequired()
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
