using System.ComponentModel.DataAnnotations;


namespace Domain.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        public LinkTreeDetail? LinkTreeDetail { get; set; }
        public string? Name { get; set; }
        public string UserName { get; set; } = string.Empty;
        [EmailAddress]
        public string? Email { get; set; }
        public string? Profile_Picture { get; set; }
        //[Required]
        public string? PasswordHash { get; set; }
    }
}



