namespace RedRabProb.Web.Test.ControllerTests.ProbabilityCalculationControllerTests
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using FluentAssertions;
    using Microsoft.AspNetCore.Mvc;
    using RedRabProb.Web.ViewModels;
    using Xunit;

    public class WhenCallingProbabilityCalculationController
    {
        private readonly DateTime now = new DateTime(2020, 2, 2, 1, 2, 3);
        private readonly ProbabilityCalculationControllerSutBuilder builder;

        public WhenCallingProbabilityCalculationController()
        {
            this.builder = new ProbabilityCalculationControllerSutBuilder();
        }

        [Theory]
        [ClassData(typeof(ProbabilityCalculationAndTestDataProvider))]
        [ClassData(typeof(ProbabilityCalculationEitherTestDataProvider))]
        public async Task AndTheRequestsIsValidShouldReturnTheCorrectResult(
            ProbabilityCalculationRequestViewModel stubbedRequest,
            ProbabilityViewModel expectedResult)
        {
            // Assign
            var sut = this.builder
                .WithStubbedNow(this.now)
                .Build();

            // Act
            var result = await sut.Post(stubbedRequest);

            // Assert
            var actionResult = Assert.IsAssignableFrom<ActionResult<ProbabilityViewModel>>(result);
            var viewResult = Assert.IsAssignableFrom<OkObjectResult>(actionResult.Result);
            var viewModel = Assert.IsAssignableFrom<ProbabilityViewModel>(viewResult.Value);

            viewModel.Should().BeEquivalentTo(expectedResult);
            this.builder.VerifyLogWasCalledCorrectly(stubbedRequest, expectedResult);
        }
    }
}
