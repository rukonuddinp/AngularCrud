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
    public class Shop_InformationController : ControllerBase
    {
        private readonly StatinaryProjectContext _context;

        public Shop_InformationController(StatinaryProjectContext context)
        {
            _context = context;
        }

        // GET: api/Shop_Information
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Shop_Information>>> GetShop_Information()
        {
            return await _context.Shop_Information.ToListAsync();
        }

        // GET: api/Shop_Information/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Shop_Information>> GetShop_Information(int id)
        {
            var shop_Information = await _context.Shop_Information.FindAsync(id);

            if (shop_Information == null)
            {
                return NotFound();
            }

            return shop_Information;
        }

        // PUT: api/Shop_Information/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutShop_Information(int id, Shop_Information shop_Information)
        {
            if (id != shop_Information.Shop_Id)
            {
                return BadRequest();
            }

            _context.Entry(shop_Information).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Shop_InformationExists(id))
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

        // POST: api/Shop_Information
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Shop_Information>> PostShop_Information(Shop_Information shop_Information)
        {
            _context.Shop_Information.Add(shop_Information);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetShop_Information", new { id = shop_Information.Shop_Id }, shop_Information);
        }

        // DELETE: api/Shop_Information/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteShop_Information(int id)
        {
            var shop_Information = await _context.Shop_Information.FindAsync(id);
            if (shop_Information == null)
            {
                return NotFound();
            }

            _context.Shop_Information.Remove(shop_Information);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Shop_InformationExists(int id)
        {
            return _context.Shop_Information.Any(e => e.Shop_Id == id);
        }
    }
}
