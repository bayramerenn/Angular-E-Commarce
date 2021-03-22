using Business.Abstract;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entites.Concrete;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class ProductTypeManager : IProductTypeService
    {
        private readonly IProductTypeDal _productTypeDal;

        public ProductTypeManager(IProductTypeDal productTypeDal)
        {
            _productTypeDal = productTypeDal;
        }

        public async Task<IDataResult<List<ProductType>>> GetProductTypesAsync()
        {
            var result = await _productTypeDal.GetAllAsync();

            return new SuccessDataResult<List<ProductType>>(result.ToList());
        }

    }
}
