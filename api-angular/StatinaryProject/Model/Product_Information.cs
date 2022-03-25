using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace StatinaryProject.Model
{
    public class Product_Information
    {
        [Key]
        public int Product_Id { get; set; }

      
        public string Product_Name { get; set; }

        public string Quantity { get; set; }

       
        public int Price { get; set; }

        public bool IsAvailable { get; set; }

        public DateTime OrderDate { get; set; }

        public string Image { get; set; }

        [NotMapped]
        public string? Shop_Name { get; set; }

        public int Shop_Id { get; set; }
        [ForeignKey("Shop_Id")]

        public virtual Shop_Information? Shop_Information { get; set; }

    }
}
