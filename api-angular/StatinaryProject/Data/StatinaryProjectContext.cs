using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using StatinaryProject.Model;

namespace StatinaryProject.Data
{
    public class StatinaryProjectContext : DbContext
    {
        public StatinaryProjectContext (DbContextOptions<StatinaryProjectContext> options)
            : base(options)
        {
        }



        public DbSet<StatinaryProject.Model.Shop_Information> Shop_Information { get; set; }

        public DbSet<StatinaryProject.Model.Product_Information> Product_Information { get; set; }

    }
}
