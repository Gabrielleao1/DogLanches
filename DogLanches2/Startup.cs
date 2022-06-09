using DogLanches.Model.Configuracao;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore.InMemory;
using Microsoft.EntityFrameworkCore;
using DogLanches.Model;
using AppContext = DogLanches.Model.Configuracao.AppContext;

namespace DogLanches
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<AppContext>(optionsAction: option =>
            option.UseInMemoryDatabase(databaseName: Configuration.GetConnectionString("MyDb")));
            services.AddControllersWithViews();

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });

            services.AddCors();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseRouting();

            app.UseStaticFiles();
            app.UseCors(option => option.AllowAnyOrigin()); ;
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });

            var scope = app.ApplicationServices.CreateScope();
            var context = scope.ServiceProvider.GetService<AppContext>();
            SeedDataIngredientes(context);
            SeedDataBurguers(context);
        }
        public static void SeedDataIngredientes(AppContext context)
        {
            Ingrediente ingre1 = new Ingrediente()
            {
                id = 1,
                name = "Ovo",
                price = 0.80
            };
            Ingrediente ingre2 = new Ingrediente()
            {
                id = 2,
                name = "Tomate",
                price = 0.80
            };
            Ingrediente ingre3 = new Ingrediente()
            {
                id = 3,
                name = "Alface",
                price = 0.80
            };
            context.Ingredientes.Add(ingre1);
            context.Ingredientes.Add(ingre2);
            context.Ingredientes.Add(ingre3);
            context.SaveChanges();
        }

        public static void SeedDataBurguers(AppContext context)
        {
            Burguer burguer1 = new Burguer()
            {
                id = 1,
                name = "X-Bacon",
                imgUrl = "../../assets/images/lanche1.png",
                ingrediente = "Bacon"
            };
            Burguer burguer2 = new Burguer()
            {
                id = 2,
                name = "X-Salada",
                imgUrl = "../../assets/images/lanche2.png",
                ingrediente = "Alface"
            };
            Burguer burguer3 = new Burguer()
            {
                id = 3,
                name = "X-Ovo",
                imgUrl = "../../assets/images/lanche1.png",
                ingrediente = "ovo"
            };
            context.Burguers.Add(burguer1);
            context.Burguers.Add(burguer2);
            context.Burguers.Add(burguer3);
            context.SaveChanges();
        }
    }
}
