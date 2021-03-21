using Core.DataAccess;
using Entites.Concrete;
using Entites.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Abstract
{
    public interface IProductDal:IEntityRepository<Product>
    {
        Task<IList<ProductsDto>> GetProductsByIdBrandAndTypesAsync();
    }
}
