namespace RedRabProb.Web.Domain
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using RedRabProb.Logging;
    using RedRabProb.Web.Domain.Calculations;
    using RedRabProb.Web.ViewModels;

    public class ProbabilityCalculationService : IProbabilityCalculationService
    {
        private readonly IDateTimeProvider dateTimeProvider;
        private readonly ILogWriter logWriter;

        public ProbabilityCalculationService(ILogWriter logWriter, IDateTimeProvider dateTimeProvider)
        {
            this.logWriter = logWriter;
            this.dateTimeProvider = dateTimeProvider;
        }

        public async Task<double> CalculateProbabilityAsync(ProbabilityCalculationRequestViewModel request)
        {
            var calculator = ProbabilityCalculationFactory.CreateForStrategy(request.Type);
            var probabilities = request.Probabilities.Select(x => x.Rate).ToList();
            var result = calculator.Calculate(probabilities);

            await this.LogCalculation(request, probabilities, result);
            return result;
        }

        private async Task LogCalculation(ProbabilityCalculationRequestViewModel request, List<double> probabilities, double result)
        {
            var now = this.dateTimeProvider.GetUtcNow();
            var probabilitiesCsv = string.Join(",", probabilities);
            var logMsg = $"{now}: Probability of {request.Type} with {probabilitiesCsv} returned a result of {result}";
            await this.logWriter.AppendLinesToLogFileAsync(logMsg);
        }
    }
}
