using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace StudentInformation
{
    public class Student
    {
        [Key]
        public int StudentId { get; set; }

        public string StudentName { get; set; }

        public string StudentMobile { get; set; }

        public string StudentEmail { get; set; }

        public bool FeeStatus { get; set; }

        public string CourseName { get; set; }
    }
}
