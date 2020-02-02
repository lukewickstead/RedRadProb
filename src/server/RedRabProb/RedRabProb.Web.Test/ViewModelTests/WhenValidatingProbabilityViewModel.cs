namespace RedRabProb.Web.Test.ViewModelTests
{
    using System.Collections.Generic;
    using System.Linq;
    using ABRSM.PopMusic.Tests.Common.Validation;
    using FluentAssertions;
    using RedRabProb.Web.ViewModels;
    using Xunit;

    public class WhenValidatingProbabilityViewModel
    {
        [Fact]
        public void WithAllFieldsBeingTheirDefaultStateShouldValid()
        {
            // Assign
            var model = new ProbabilityViewModel();

            // Act
            var results = ModelValidator.Validate(model).ToList();

            // Assert
            results.Should().BeEmpty();
        }

        [Fact]
        public void WithAllFieldsBeingSetTheMinimumInvalidValuesShouldBeInvalid()
        {
            // Assign
            var model = new ProbabilityViewModel
            {
                Rate = -0.0001,
            };

            var expectedResult = new List<string>
            {
                "Probability must be between 0 and 1",
            };

            // Act
            var results = ModelValidator.Validate(model).ToList();

            // Assert
            results.Should().BeEquivalentTo(expectedResult);
        }

        [Fact]
        public void WithAllFieldsBeingSetToTheMaximumInvalidValuesShouldBeInvalid()
        {
            // Assign
            var model = new ProbabilityViewModel
            {
                Rate = 1.0001,
            };

            var expectedResult = new List<string>
            {
                "Probability must be between 0 and 1",
            };

            // Act
            var results = ModelValidator.Validate(model).ToList();

            // Assert
            results.Should().BeEquivalentTo(expectedResult);
        }

        [Fact]
        public void WithAllFieldsBeingSetToTheMinimumVvalidValuesShouldBeValid()
        {
            // Assign
            var model = new ProbabilityViewModel
            {
                Rate = 0,
            };

            // Act
            var results = ModelValidator.Validate(model).ToList();

            // Assert
            results.Should().BeEmpty();
        }

        [Fact]
        public void WithAllFieldsBeingSetToTheMaximumValidValuesShouldBeValid()
        {
            // Assign
            var model = new ProbabilityViewModel
            {
                Rate = 1,
            };

            // Act
            var results = ModelValidator.Validate(model).ToList();

            // Assert
            results.Should().BeEmpty();
        }
    }
}
