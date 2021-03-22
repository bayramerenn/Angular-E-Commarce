using System;
using System.Collections.Generic;
using System.Text;

namespace Entites.Dtos
{
    public class ProductParamsDto
    {
        public int? ProductBrandId { get; set; }
        public int? ProductTypeId { get; set; }
        public int PageIndex { get; set; } = 1;
        public int PageSize { get => _pageSize; set => _pageSize = value; }

        private int _pageSize = 6;
        public string Search { get; set; }
        public string? Sort { get; set; }
    }
}
