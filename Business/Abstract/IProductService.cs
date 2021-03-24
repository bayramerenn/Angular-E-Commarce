using Core.Utilities.Results;
using Entites.Concrete;
using Entites.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface IProductService
    {
        Task<IDataResult<List<Product>>> GetAllProductsAsync();
        Task<IDataResult<Product>> GetProductByIdAsync(int id);
        Task<IDataResult<ProductPaginationDto>> GetProductsByIdBrandAndTypesAsync(ProductParamsDto productParamsDto);
    }
}
