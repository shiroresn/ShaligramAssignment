using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Test.Models;

namespace Test.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InterestController : ControllerBase
    {
        private readonly SGTestContext _context;
        public InterestController(SGTestContext context)
        {
            _context = context;
        }
        // GET: api/<DepartmentController>
        [HttpGet]
        public IEnumerable<TblAreaOfInterest> Get()
        {
            return _context.TblAreaOfInterest.ToList();
        }
    }
}
