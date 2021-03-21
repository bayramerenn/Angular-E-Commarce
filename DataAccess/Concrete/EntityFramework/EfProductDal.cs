using Core.DataAccess.EntityFramework;
using DataAccess.Abstract;
using DataAccess.Concrete.EntityFramework.Context;
using Entites.Concrete;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using Entites.Dtos;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfProductDal : EfEntityRepository<Product, StoreContext>, IProductDal
    {
        public async Task<IList<ProductsDto>> GetProductsByIdBrandAndTypesAsync()
        {
            using (var context = new StoreContext())
            {
                var result = from products in context.Products
                             join brands in context.ProductBrands
                                on products.ProductBrandId equals brands.Id
                             join types in context.ProductTypes
                                 on products.ProductTypeId equals types.Id
                             select new ProductsDto
                             {
                                 Id = products.Id,
                                 Name = products.Name,
                                 Description = products.Description,
                                 Price = products.Price,
                                 PictureUrl = products.PictureUrl,
                                 ProductBrand = brands.Name,
                                 ProductType = types.Name
                             };
                return await result.ToListAsync();
            }

            
        }
    }
}
