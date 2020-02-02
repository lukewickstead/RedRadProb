namespace RedRabProb.Web.Domain
{
    using System.Threading.Tasks;
    using RedRabProb.Web.ViewModels;

    public interface IProbabilityCalculationService
    {
        Task<double> CalculateProbabilityAsync(ProbabilityCalculationRequestViewModel request);
    }
}