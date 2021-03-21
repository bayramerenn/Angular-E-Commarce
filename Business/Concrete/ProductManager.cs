using Business.Abstract;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entites.Concrete;
using Entites.Dtos;
using Microsoft.Extensions.Configuration;
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
        private IConfiguration Configuration { get; }
        private string _apiUrl;
        public ProductManager(IProductDal productDal, IConfiguration configuration)
        {
            _productDal = productDal;
            Configuration = configuration;
            
        }

        public async Task<IDataResult<List<Product>>> GetAllProductsAsync()
        {
            var data = await _productDal.GetAllAsync();
            return new SuccessDataResult<List<Product>>(data.ToList());
        }

        public async Task<IDataResult<ProductPaginationDto>> GetProductsByIdBrandAndTypesAsync()
        {

            _apiUrl = Configuration["ApiUrl"];
            var data = await _productDal.GetProductsByIdBrandAndTypesAsync();
            foreach (var item in data)
            {
                item.PictureUrl =  item.PictureUrl.Insert(0, _apiUrl);
            }
            var productPaginationDto = new ProductPaginationDto
            {
                Count = data.Count,
                PageIndex = 1,
                PageSize = 6,
                Data = data.ToList(),
            };
            return new SuccessDataResult<ProductPaginationDto>(productPaginationDto);
        }
    }
}
