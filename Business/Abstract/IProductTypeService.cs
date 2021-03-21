using Core.Utilities.Results;
using Entites.Concrete;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface IProductTypeService
    {
        Task<IDataResult<List<ProductType>>> GetProductTypesAsync();
    }
}
