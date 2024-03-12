using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;


namespace Domain.Models
{
    public class LinkTreeDetail
    {
        [Key]
        public int LinkTreeID { get; set; }
        //URLS
        public List<RedirectUrl>? Urls2 { get; set; } = new List<RedirectUrl>();

        //USERS
        [JsonIgnore]
        public User? User { get; set; }
        public int UserID { get; set; }

        //EXTRAS
        public string? BackgroundColor { get; set; }
        public string? HoverColor { get; set; }
        public string? Description { get; set; }



    }
}
