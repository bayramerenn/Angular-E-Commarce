using Business.Abstract;
using Entites.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductService _productService;
        private readonly IBrandService _brandService;
        private readonly IProductTypeService _productTypeService;

        public ProductsController(IProductService productService, IBrandService brandService, IProductTypeService productTypeService)
        {
            _productService = productService;
            _brandService = brandService;
            _productTypeService = productTypeService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] ProductParamsDto productParamsDto)
        {
            var result = await _productService.GetProductsByIdBrandAndTypesAsync(productParamsDto);
            if (result.Success)
            {
                return Ok(result.Data);
            }

            return BadRequest(result.Message);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductById(int id)
        {
            var result = await _productService.GetProductByIdAsync(id);
            if (result.Success)
            {
                return Ok(result.Data);
            }

            return BadRequest(result.Message);
        }

        [HttpGet("brands")]
        public async Task<IActionResult> GetBrands()
        {
            var result = await _brandService.GetBrandsAsync();
            return Ok(result.Data);
        }

        [HttpGet("types")]
        public async Task<IActionResult> GetTypes()
        {
            var result = await _productTypeService.GetProductTypesAsync();
            return Ok(result.Data);
        }

    }
}
