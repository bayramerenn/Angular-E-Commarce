using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Core.DataAccess
{
    public interface IEntityRepository<T>
    {
        Task<T> GetAsync(Expression<Func<T,bool>> filter);
        Task<T> GetByIdAsync(int id);
        Task<IList<T>> GetAllAsync(Expression<Func<T, bool>> filter = null);
        Task AddAsync(T entity);
        Task Deletesync(T entity);
        Task UpdateAsync(T entity);


    }
}
