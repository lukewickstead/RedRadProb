namespace RedRabProb.Web.Domain.Calculations
{
    using System.Collections.Generic;

    public class ProbabilityCalculationEither : IProbabilityCalculation
    {
        private readonly ProbabilityCalculationAnd andCalculation;
        private readonly ProbabilityCalculationOr orCalculation;

        internal ProbabilityCalculationEither()
        {
            this.andCalculation = new ProbabilityCalculationAnd();
            this.orCalculation = new ProbabilityCalculationOr();
        }

        public double Calculate(IEnumerable<double> probabilities)
        {
            return this.orCalculation.Calculate(probabilities) - this.andCalculation.Calculate(probabilities);
        }
    }
}
