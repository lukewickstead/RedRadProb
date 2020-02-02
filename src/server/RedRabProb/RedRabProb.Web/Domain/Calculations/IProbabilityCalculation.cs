namespace RedRabProb.Web.Domain.Calculations
{
    using System.Collections.Generic;

    public interface IProbabilityCalculation
    {
        double Calculate(IEnumerable<double> probabilities);
    }
}