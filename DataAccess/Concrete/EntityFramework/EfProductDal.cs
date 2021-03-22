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
using LinqKit;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfProductDal : EfEntityRepository<Product, StoreContext>, IProductDal
    {
        public async Task<IList<ProductsDto>> GetProductsByIdBrandAndTypesAsync(ProductParamsDto productParamsDto,string filters)
        {
            

            using (var context = new StoreContext())
            {


                //string query = "WHERE 1 = 1 ";

                //Type type = productParamsDto.GetType();

                //foreach (var item in type.GetProperties())
                //{
                //    var value = item.GetValue(productParamsDto, null);

                //    if (value != null && item.Name != "Sort")
                //    {
                //        query += $"AND {item.Name}={item.GetValue(productParamsDto)}";
                //    }
                //    if(item.Name == "Sort")
                //    {
                //        var ordersType = item.GetValue(productParamsDto).ToString();
                //        switch (ordersType)
                //        {
                //            case "priceAsc":
                //                query += $"ORDER BY Products.Price ASC";
                //                break;
                //            case "priceDesc":
                //                query += $"ORDER BY Products.Price DESC";
                //                break;
                //            default:
                //                query += $"ORDER BY Products.Name ASC";
                //                break;
                //        }
                        
                //    }
                    
                //}

                var result = context.ProductsDtos.FromSqlRaw<ProductsDto>(
                    $"SELECT Products.Id,Products.Name,Description,Price,PictureUrl,ProductBrand = ProductBrands.Name,ProductType = ProductTypes.Name FROM dbo.Products WITH(NOLOCK) JOIN dbo.ProductBrands WITH(NOLOCK) ON ProductBrands.Id = Products.ProductBrandId JOIN dbo.ProductTypes WITH(NOLOCK) ON ProductTypes.Id = Products.ProductTypeId {filters}");
                return await result.ToListAsync();

            }


        }

        
    }
}
