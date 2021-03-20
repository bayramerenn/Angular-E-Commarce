using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entites.Concrete
{
    public class BaseEntity : IEntity
    {
        public int Id { get; set; }
    }
}
