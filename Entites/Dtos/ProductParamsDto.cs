using System;
using System.Collections.Generic;
using System.Text;

namespace Entites.Dtos
{
    public class ProductParamsDto
    {
        public int? ProductBrandId { get; set; }
        public int? ProductTypeId { get; set; }
        public string? Sort { get; set; }
    }
}
