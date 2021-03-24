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
            _apiUrl = Configuration["ApiUrl"];
        }

        public async Task<IDataResult<List<Product>>> GetAllProductsAsync()
        {
            var data = await _productDal.GetAllAsync();
            return new SuccessDataResult<List<Product>>(data.ToList());
        }

        public async Task<IDataResult<ProductPaginationDto>> GetProductsByIdBrandAndTypesAsync(ProductParamsDto productParamsDto)
        {


            string filters = "WHERE 1 = 1 ";

            Type type = productParamsDto.GetType();

            foreach (var item in type.GetProperties())
            {
                var value = item.GetValue(productParamsDto, null);

                if (value != null && (item.Name == "ProductBrandId" || item.Name == "ProductTypeId"))
                {
                    filters += $"AND {item.Name}={item.GetValue(productParamsDto)}";
                }
            }

            if (productParamsDto.Search != null)
            {
                filters += $"AND Products.Name LIKE '{productParamsDto.Search}%' ";
            }

            if (productParamsDto.Sort != null)
            {
                switch (productParamsDto.Sort)
                {
                    case "priceAsc":
                        filters += $"ORDER BY Products.Price ASC";
                        break;
                    case "priceDesc":
                        filters += $"ORDER BY Products.Price DESC";
                        break;
                    default:
                        filters += $"ORDER BY Products.Name ASC";
                        break;
                }
            }


            var result = await _productDal.GetProductsByIdBrandAndTypesAsync(productParamsDto, filters);
            var data = result.Skip(productParamsDto.PageSize * (productParamsDto.PageIndex - 1)).Take(productParamsDto.PageSize).ToList();

            foreach (var item in data)
            {
                item.PictureUrl =  item.PictureUrl.Insert(0, _apiUrl);
            }
            var productPaginationDto = new ProductPaginationDto
            {
                Count = result.Count,
                Data = data.ToList(),
                PageIndex = productParamsDto.PageIndex,
                PageSize = productParamsDto.PageSize
            };

            return new SuccessDataResult<ProductPaginationDto>(productPaginationDto);
        }

        public async Task<IDataResult<Product>> GetProductByIdAsync(int id)
        {
            var result =await _productDal.GetByIdAsync(id);
            result.PictureUrl = result.PictureUrl.Insert(0, _apiUrl);

            return new SuccessDataResult<Product>(result);
        }
    }
}
