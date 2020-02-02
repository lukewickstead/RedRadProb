namespace RedRabProb.Web.Test.ViewModelTests
{
    using System.Collections.Generic;
    using System.Linq;
    using ABRSM.PopMusic.Tests.Common.Validation;
    using FluentAssertions;
    using RedRabProb.Web.ViewModels;
    using Xunit;

    public class WhenValidatingProbabilityCalculationRequestViewModel
    {
        [Fact]
        public void WithAllFieldsBeingTheirDefaultStateShouldBeInvalid()
        {
            // Assign
            var model = new ProbabilityCalculationRequestViewModel();
            var expectedResult = new List<string>
            {
                "The Type field is required.",
                "The Probabilities field is required.",
            };

            // Act
            var results = ModelValidator.Validate(model).ToList();

            // Assert
            results.Should().BeEquivalentTo(expectedResult);
        }

        [Fact]
        public void WithAllFieldsBeingSetTheMinimumInvalidValuesShouldBeInvalid()
        {
            // Assign
            var model = new ProbabilityCalculationRequestViewModel
            {
                Type = ProbabilityCalculationType.Unknown,
                Probabilities = new List<ProbabilityViewModel>(),
            };

            var expectedResult = new List<string>
            {
                "The Type field is required.",
                "At least two probability is required.",
            };

            // Act
            var results = ModelValidator.Validate(model).ToList();

            // Assert
            results.Should().BeEquivalentTo(expectedResult);
        }

        [Fact]
        public void WithInvalidMinimumValuesShouldBeInvalid()
        {
            // Assign
            var model = new ProbabilityCalculationRequestViewModel
            {
                Type = ProbabilityCalculationType.Unknown,
                Probabilities = new List<ProbabilityViewModel> { new ProbabilityViewModel { Rate = -0.1 } },
            };

            var expectedResult = new List<string>
            {
                "The Type field is required.",
                "At least two probability is required.",
            };

            // Act
            var results = ModelValidator.Validate(model).ToList();

            // Assert
            results.Should().BeEquivalentTo(expectedResult);
        }

        [Fact]
        public void WithValidMinimumValuesShouldBeValid()
        {
            // Assign
            var model = new ProbabilityCalculationRequestViewModel
            {
                Type = ProbabilityCalculationType.And,
                Probabilities = new List<ProbabilityViewModel>
                {
                    new ProbabilityViewModel { Rate = 0 },
                    new ProbabilityViewModel { Rate = 0 },
                },
            };

            // Act
            var results = ModelValidator.Validate(model).ToList();

            // Assert
            results.Should().BeEmpty();
        }

        [Fact]
        public void WithValidMaximumValuesShouldBeValid()
        {
            // Assign
            var model = new ProbabilityCalculationRequestViewModel
            {
                Type = ProbabilityCalculationType.And,
                Probabilities = new List<ProbabilityViewModel>
                {
                    new ProbabilityViewModel { Rate = 1 },
                    new ProbabilityViewModel { Rate = 1 },
                },
            };

            // Act
            var results = ModelValidator.Validate(model).ToList();

            // Assert
            results.Should().BeEmpty();
        }
    }
}
