namespace RedRabProb.Web.Test.ControllerTests.ProbabilityCalculationControllerTests
{
    using System.Collections;
    using System.Collections.Generic;
    using RedRabProb.Web.ViewModels;

    public class ProbabilityCalculationEitherTestDataProvider : IEnumerable<object[]>
    {
        public IEnumerator<object[]> GetEnumerator()
        {
            // AND
            yield return new object[]
            {
                new ProbabilityCalculationRequestViewModel
                {
                    Type = ProbabilityCalculationType.Either,
                    Probabilities = new List<ProbabilityViewModel>
                    {
                        new ProbabilityViewModel { Rate = 0 },
                        new ProbabilityViewModel { Rate = 0 },
                    },
                },
                new ProbabilityViewModel { Rate = 0 },
            };

            yield return new object[]
            {
                new ProbabilityCalculationRequestViewModel
                {
                    Type = ProbabilityCalculationType.Either,
                    Probabilities = new List<ProbabilityViewModel>
                    {
                        new ProbabilityViewModel { Rate = 0.25 },
                        new ProbabilityViewModel { Rate = 0.25 },
                    },
                },
                new ProbabilityViewModel { Rate = 0.4375 },
            };

            yield return new object[]
            {
                new ProbabilityCalculationRequestViewModel
                {
                    Type = ProbabilityCalculationType.Either,
                    Probabilities = new List<ProbabilityViewModel>
                    {
                        new ProbabilityViewModel { Rate = 0.5 },
                        new ProbabilityViewModel { Rate = 0.5 },
                    },
                },
                new ProbabilityViewModel { Rate = 0.75 },
            };

            yield return new object[]
            {
                new ProbabilityCalculationRequestViewModel
                {
                    Type = ProbabilityCalculationType.Either,
                    Probabilities = new List<ProbabilityViewModel>
                    {
                        new ProbabilityViewModel { Rate = 0.75 },
                        new ProbabilityViewModel { Rate = 0.75 },
                    },
                },
                new ProbabilityViewModel { Rate = 0.9375 },
            };

            yield return new object[]
            {
                new ProbabilityCalculationRequestViewModel
                {
                    Type = ProbabilityCalculationType.Either,
                    Probabilities = new List<ProbabilityViewModel>
                    {
                        new ProbabilityViewModel { Rate = 1 },
                        new ProbabilityViewModel { Rate = 1 },
                    },
                },
                new ProbabilityViewModel { Rate = 1 },
            };
        }

        IEnumerator IEnumerable.GetEnumerator() => this.GetEnumerator();
    }
}
