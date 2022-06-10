using DogLanches.Model;
using DogLanches.Model.Configuracao;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using AppContext = DogLanches.Model.Configuracao.AppContext;


namespace DogLanches.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    
    public class IngredientesController : ControllerBase
    {
        private readonly AppContext _context;

        public IngredientesController(AppContext context)
        {
            _context = context;
        }
        [HttpGet]
        public List<Ingrediente> GetIngredientes()
        {
            return _context.Ingredientes.ToList();
        }
        [HttpGet("{id}")]
        public Ingrediente GetIngredienteById(int id)
        {
            return _context.Ingredientes.SingleOrDefault(e => e.id == id);
        }
        [HttpDelete("{id}")]
        public IActionResult DeleteIngrediente(int id)
        {
            Ingrediente ingrediente = _context.Ingredientes.SingleOrDefault(e => e.id == id);
            if (ingrediente == null)
            {
                return NotFound("Não foi possível deletar o item.");
            }
            _context.Ingredientes.Remove(ingrediente);
            _context.SaveChanges();
            return NoContent();
        }
        [DisableCors]
        [HttpPost]
        public IActionResult AddIngrediente([FromBody] Ingrediente ingrediente)
        {
            _context.Ingredientes.Add(ingrediente);
            _context.SaveChanges();
            return Created("api/ingredientes/" + ingrediente.id, ingrediente);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateIngrediente(int id, Ingrediente ingrediente)
        {
            Ingrediente ig = _context.Ingredientes.SingleOrDefault(e => e.id == id);
            if (ig == null)
            {
                return NotFound("Não foi possível alterar o item.");
            }

            if (ig.name != null)
            {
                ig.name = ingrediente.name;
            }

            if (ig.price != null)
            {
                ig.price = ingrediente.price;
            }

            _context.Update(ig);
            _context.SaveChanges();
            return Ok("Ingrediente atualizado com sucesso!");
        }
    }
}
