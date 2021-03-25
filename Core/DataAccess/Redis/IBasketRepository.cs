using Core.Entities.Entity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core.DataAccess.Redis
{
    public interface IBasketRepository
    {
        Task<bool> DeleteBasketAsync(string basketId);
        Task<CustomerBasket> GetBasketAsync(string basketId);
        Task<CustomerBasket> UpdateBasketAsync(CustomerBasket basket);
    }
}
