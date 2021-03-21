using System;
using System.Collections.Generic;
using System.Text;

namespace Entites.Dtos
{
    public class ProductPaginationDto
    {
        public int PageIndex { get; set; }
        public int PageSize { get; set; }
        public int Count { get; set; }
        public List<ProductsDto> Data { get; set; }
    }
}
