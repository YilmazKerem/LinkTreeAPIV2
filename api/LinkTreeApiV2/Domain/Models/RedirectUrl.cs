using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;


namespace Domain.Models
{
    public class RedirectUrl
    {
        [Key]
        public int UrlID { get; set; }
        [Required]
        public string Url { get; set; }
        public string? Image_url { get; set; }
        public string? Urldescription { get; set; }
        public int Order { get; set; }

        //KEYS

        public int LinkTreeDetailID { get; set; }
        [JsonIgnore]

        public LinkTreeDetail? LinkTreeDetail { get; set; }
    }
}
