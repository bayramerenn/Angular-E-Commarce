using Entites.Concrete;
using Entites.Dtos;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.Concrete.EntityFramework.Context
{
    public class StoreContext:DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=ECommarce;Integrated Security=True");
        }

        public DbSet<Product> Products{ get; set; }
        public DbSet<Brand> ProductBrands{ get; set; }
        public DbSet<ProductType> ProductTypes{ get; set; }
        public DbSet<ProductsDto> ProductsDtos{ get; set; }
    }
}
