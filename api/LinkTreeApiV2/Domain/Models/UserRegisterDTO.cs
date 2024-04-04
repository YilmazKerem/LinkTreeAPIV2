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
        [StringLength(18, MinimumLength = 7, ErrorMessage = "The field must be a string with a minimumLength of 7 and a maxmumLength of 18")]
        public string? Password { get; set; }
        [Required, Compare("Password")]
        public string? CheckPassword { get; set; }
    }
}



