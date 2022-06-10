using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DogLanches.Model;
using System.Collections.Generic;
using DogLanches.Model.Configuracao;
using System.Linq;
using AppContext = DogLanches.Model.Configuracao.AppContext;
using Microsoft.AspNetCore.Cors;

namespace DogLanches.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BurguersController : ControllerBase
    {

        private readonly AppContext _context;

        public BurguersController(AppContext context)
        {
            _context = context;
        }

        [HttpGet]
        public List<Burguer> GetBurguers()
        {
            return _context.Burguers.ToList();
        }

        [HttpGet("{id}")]
        public Burguer GetBurguerById(int id)
        {
            return _context.Burguers.SingleOrDefault(e => e.id == id);
        }
        [DisableCors]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Burguer burguer = _context.Burguers.SingleOrDefault(e => e.id == id);
            if (burguer == null)
            {
                return NotFound("Não foi possível deletar o item.");
            }
            _context.Burguers.Remove(burguer);
            _context.SaveChanges();
            return NoContent();
        }

        [HttpPost]
        public IActionResult AddBurguer([FromBody] Burguer burguer)
        {
            _context.Burguers.Add(burguer);
            _context.SaveChanges();
            return Created("api/burguers/" + burguer.id, burguer);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Burguer burguer)
        {
            Burguer bg = _context.Burguers.SingleOrDefault(e => e.id == id);
            if (bg == null)
            {
                return NotFound("Não foi possível alterar o item.");
            }

            if (bg.name != null)
            {
                bg.name = burguer.name;
            }

            if (bg.imgUrl != null)
            {
                bg.imgUrl = burguer.imgUrl;
            }

            if (bg.ingrediente != null)
            {
                bg.ingrediente = burguer.ingrediente;
            }

            _context.Update(bg);
            _context.SaveChanges();
            return Ok("Hamburguer atualizado com sucesso!");
        }
    }
}
