using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace StatinaryProject.Model
{
    public class Shop_Information
    {
        [Key]
        public int Shop_Id { get; set; }
     
        public string Shop_Name { get; set; }
        public string Address { get; set; }
      
        public string MobileNo { get; set; }
        public virtual ICollection<Product_Information>? Product_Information { get; set; }

    }


   
}
