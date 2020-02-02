namespace RedRabProb.Web.Domain.Calculations
{
    using System.Collections.Generic;
    using System.Linq;

    public class ProbabilityCalculationAnd : IProbabilityCalculation
    {
        internal ProbabilityCalculationAnd()
        {
        }

        public double Calculate(IEnumerable<double> probabilities)
        {
            return probabilities.Aggregate(func: (result, item) => result * item);
        }
    }
}
