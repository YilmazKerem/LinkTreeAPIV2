using System.ComponentModel.DataAnnotations;

namespace Domain.Models
{
    public class UserRegisterDTO
    {
        [Key]
        public string UserName { get; set; }
        public string Name { get; set; }

        [EmailAddress]
        public string Email { get; set; }
        //[Required]
        public string? Password { get; set; }
        [Required, Compare("Password")]
        public string? CheckPassword { get; set; }
    }
}



