using System.ComponentModel.DataAnnotations;

namespace Domain.Models
{
    public class UserLogin
    {

        [EmailAddress]
        public string? Email { get; set; }
        public string? UserName { get; set; }
        //[Required]
        public string? Password { get; set; }
    }
}



