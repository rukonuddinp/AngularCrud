using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StatinaryProject.Data;
using StatinaryProject.Model;

namespace StatinaryProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Product_InformationController : ControllerBase
    {
        private readonly StatinaryProjectContext _context;

        public Product_InformationController(StatinaryProjectContext context)
        {
            _context = context;
        }

        // GET: api/Product_Information
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product_Information>>> GetProduct_Information()
        {
            return await _context.Product_Information.ToListAsync();
        }

        // GET: api/Product_Information/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Product_Information>> GetProduct_Information(int id)
        {
            var product_Information = await _context.Product_Information.FindAsync(id);

            if (product_Information == null)
            {
                return NotFound();
            }

            return product_Information;
        }

        // PUT: api/Product_Information/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct_Information(int id, Product_Information product_Information)
        {
            if (id != product_Information.Product_Id)
            {
                return BadRequest();
            }

            _context.Entry(product_Information).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Product_InformationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Product_Information
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Product_Information>> PostProduct_Information(Product_Information product_Information)
        {
            _context.Product_Information.Add(product_Information);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProduct_Information", new { id = product_Information.Product_Id }, product_Information);
        }

        // DELETE: api/Product_Information/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct_Information(int id)
        {
            var product_Information = await _context.Product_Information.FindAsync(id);
            if (product_Information == null)
            {
                return NotFound();
            }

            _context.Product_Information.Remove(product_Information);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Product_InformationExists(int id)
        {
            return _context.Product_Information.Any(e => e.Product_Id == id);
        }
    }
}
