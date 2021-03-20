using Business.Abstract;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entites.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class ProductManager : IProductService
    {
        private readonly IProductDal _productDal;

        public ProductManager(IProductDal productDal)
        {
            _productDal = productDal;
        }

        public async Task<IDataResult<List<Product>>> GetAllProductsAsync()
        {
            var data = await _productDal.GetAllAsync();
            return new SuccessDataResult<List<Product>>(data.ToList());
        }
    }
}
