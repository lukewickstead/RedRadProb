namespace RedRabProb.Web.Controllers
{
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using RedRabProb.Web.Domain;
    using RedRabProb.Web.ViewModels;

    [Route("api/[controller]")]
    [ApiController]
    public class ProbabilityCalculationController : ControllerBase
    {
        private readonly IProbabilityCalculationService probabilityCalculationService;

        public ProbabilityCalculationController(IProbabilityCalculationService probabilityCalculationService)
        {
            this.probabilityCalculationService = probabilityCalculationService;
        }

        [HttpPost]
        public async Task<ActionResult<ProbabilityViewModel>> Post(ProbabilityCalculationRequestViewModel request)
        {
            try
            {
                var result = await this.probabilityCalculationService.CalculateProbabilityAsync(request);
                return this.Ok(new ProbabilityViewModel { Rate = result });
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
    }
}