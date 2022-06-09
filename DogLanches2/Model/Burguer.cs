using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DogLanches.Model
{
    public class Burguer
    {
        [Key]
        public int id { get; set; }
        [Required]
        public string name { get; set; }
        [Required]
        public string imgUrl { get; set; }
        [Required]
        public string ingrediente { get; set; }
    }
}
