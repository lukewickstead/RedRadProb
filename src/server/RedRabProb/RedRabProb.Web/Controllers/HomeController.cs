namespace RedRabProb.Web.Controllers
{
    using Microsoft.AspNetCore.Mvc;

    [Route("api/[controller]")]
    [ApiController]

    public class HomeController : ControllerBase
    {
        [HttpGet]
        public ActionResult<string> Get()
        {
            return this.Ok("Red Rad Prob ready to rock and roll.");
        }
    }
}
