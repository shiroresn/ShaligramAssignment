using System;
using System.Collections.Generic;

namespace Test.Models
{
    public partial class TblEmployee
    {
        public int Id { get; set; }
        public string EmployeeName { get; set; }
        public string Email { get; set; }
        public string ContactNumber { get; set; }
        public string Gender { get; set; }
        public int DepartmentId { get; set; }
        public string UploadedPhoto { get; set; }
        public string AreaOfInterest { get; set; }
        public bool? IsActive { get; set; }
    }
}
