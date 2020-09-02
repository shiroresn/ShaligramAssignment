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
    public class DepartmentController : ControllerBase
    {
        private readonly SGTestContext _context;
        public DepartmentController(SGTestContext context)
        {
            _context = context;
        }
        // GET: api/<DepartmentController>
        [HttpGet]
        public IEnumerable<TblDepartment> Get()
        {
            return _context.TblDepartment.ToList();
        }

    }
}
