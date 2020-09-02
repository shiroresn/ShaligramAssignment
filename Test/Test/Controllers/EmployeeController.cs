using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Test.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Test.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly SGTestContext _context;
        public EmployeeController(SGTestContext context)
        {
            _context = context;
        }
        // GET: api/<EmployeeController>
        [HttpGet]
        public IEnumerable<TblEmployee> Get()
        {
            return _context.TblEmployee.ToList();
        }

        // GET api/<EmployeeController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TblEmployee>> Get(int id)
        {
            var response = await _context.TblEmployee.FindAsync(id);

            if (response == null)
            {
                return NotFound();
            }

            return response;
        }
        

        // POST api/<EmployeeController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] TblEmployee value)
        {
            this._context.TblEmployee.Add(value);
            await _context.SaveChangesAsync();

            return Ok(new { status = true, message = "Employee Added Successfully" });
        }

        // PUT api/<EmployeeController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] TblEmployee value)
        {
            if (id != value.Id)
            {
                return BadRequest();
            }


            _context.Entry(value).State = Microsoft.EntityFrameworkCore.EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Microsoft.EntityFrameworkCore.DbUpdateConcurrencyException)
            {
                if (!IsExists(id))
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

        private bool IsExists(int id)
        {
            return _context.TblEmployee.Any(e => e.Id == id);
        }


        // DELETE api/<EmployeeController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TblEmployee>> Delete(int id)
        {
            var report = await _context.TblEmployee.FindAsync(id);
            if (report == null)
            {
                return NotFound();
            }

            _context.TblEmployee.Remove(report);
            await _context.SaveChangesAsync();

            return report;
        }

    }
}
