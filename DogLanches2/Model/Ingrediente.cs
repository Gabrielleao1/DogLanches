using System.ComponentModel.DataAnnotations;

namespace DogLanches.Model
{
    public class Ingrediente
    {
        [Key]
        public int id { get; set; }
        [Required]
        public string name { get; set; }
        [Required]
        public double price { get; set; }
    }
}
