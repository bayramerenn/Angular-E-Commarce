using Entites.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entites.Dtos
{
    public class ProductsDto:BaseEntity
    {
        public string Name { get; set; }
        public string? Description { get; set; }
        public decimal? Price { get; set; }
        public string? PictureUrl { get; set; }

        public string? ProductBrand { get; set; }
        public string? ProductType { get; set; }
    }
}
