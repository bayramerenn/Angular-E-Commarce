using Core.DataAccess.Redis;
using Core.Entities.Entity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BasketController : ControllerBase
    {
        private IBasketRepository _basketRepository;

        public BasketController(IBasketRepository basketRepository)
        {
            _basketRepository = basketRepository;
        }

        [HttpGet]
        public async Task<ActionResult<CustomerBasket>> GetBasketById(string id)
        {
            var basket = await _basketRepository.GetBasketAsync(id);
            return Ok(basket ?? new CustomerBasket(id));
        }

        [HttpPost]
        public async Task<ActionResult<CustomerBasket>> UpdateBasket(CustomerBasket customerBasket)
        {
            var updateBasket = await _basketRepository.UpdateBasketAsync(customerBasket);
            return Ok(updateBasket);
        }

        [HttpDelete]
        public async Task DeleteBasket(string id)
        {
             await _basketRepository.DeleteBasketAsync(id);
            
        }
    }
}
