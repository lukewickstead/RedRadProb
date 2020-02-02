namespace RedRabProb.Web.Test.ControllerTests.ProbabilityCalculationControllerTests
{
    using System;
    using System.Linq;
    using Moq;
    using RedRabProb.Logging;
    using RedRabProb.Web.Controllers;
    using RedRabProb.Web.Domain;
    using RedRabProb.Web.ViewModels;

    internal class ProbabilityCalculationControllerSutBuilder
    {
        private readonly Mock<IDateTimeProvider> mockDateTimeProvider;
        private readonly Mock<ILogWriter> mockLogWriter;
        private DateTime stubbedNow;

        public ProbabilityCalculationControllerSutBuilder()
        {
            this.mockLogWriter = new Mock<ILogWriter>();
            this.mockDateTimeProvider = new Mock<IDateTimeProvider>();
        }

        internal ProbabilityCalculationController Build()
        {
            return new ProbabilityCalculationController(new ProbabilityCalculationService(this.mockLogWriter.Object, this.mockDateTimeProvider.Object));
        }

        internal ProbabilityCalculationControllerSutBuilder WithStubbedNow(DateTime now)
        {
            this.stubbedNow = now;
            this.mockDateTimeProvider.Setup(x => x.GetUtcNow()).Returns(now);
            return this;
        }

        internal ProbabilityCalculationControllerSutBuilder VerifyLogWasCalledCorrectly(
            ProbabilityCalculationRequestViewModel request,
            ProbabilityViewModel result)
        {
            this.mockLogWriter.Verify(x => x.AppendLinesToLogFileAsync(It.IsAny<string>()), Times.Once);

            var probabilities = string.Join(",", request.Probabilities.Select(x => x.Rate));
            var expectedLogMsg = $"{this.stubbedNow}: Probability of {request.Type} with {probabilities} returned a result of {result.Rate}";
            this.mockLogWriter.Verify(x => x.AppendLinesToLogFileAsync(expectedLogMsg), Times.Once);
            return this;
        }
    }
}
