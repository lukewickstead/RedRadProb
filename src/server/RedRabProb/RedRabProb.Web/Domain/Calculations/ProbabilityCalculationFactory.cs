namespace RedRabProb.Web.Domain.Calculations
{
    using System;
    using RedRabProb.Web.ViewModels;

    public static class ProbabilityCalculationFactory
    {
        public static IProbabilityCalculation CreateForStrategy(ProbabilityCalculationType type)
        {
            switch (type)
            {
                case ProbabilityCalculationType.And:
                    return new ProbabilityCalculationAnd();
                case ProbabilityCalculationType.Either:
                    return new ProbabilityCalculationEither();
                case ProbabilityCalculationType.Or:
                    return new ProbabilityCalculationOr();
                default:
                    throw new ArgumentException($"Unsupported probability calculation type: ${type}");
            }
        }
    }
}
