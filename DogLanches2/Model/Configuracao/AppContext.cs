using Microsoft.EntityFrameworkCore;

namespace DogLanches.Model.Configuracao
{
    public class AppContext : DbContext
    {
        public AppContext(DbContextOptions options):base(options)
        {

        }

        public DbSet<Burguer> Burguers { get; set; }

        public DbSet<Ingrediente> Ingredientes { get; set; }
    }
}
