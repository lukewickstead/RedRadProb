namespace RedRabProb.Web.Domain.Calculations
{
    using System.Collections.Generic;
    using System.Linq;

    public class ProbabilityCalculationOr : IProbabilityCalculation
    {
        internal ProbabilityCalculationOr()
        {
        }

        public double Calculate(IEnumerable<double> probabilities)
        {
            return probabilities.Sum(x => x);
        }
    }
}
