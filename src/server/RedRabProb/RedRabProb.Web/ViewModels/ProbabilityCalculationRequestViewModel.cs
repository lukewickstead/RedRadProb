namespace RedRabProb.Web.ViewModels
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using RedRabProb.Web.Filter;

    public class ProbabilityCalculationRequestViewModel
    {
        [RequiredEnum]
        public ProbabilityCalculationType Type { get; set; }

        [Required]
        [MinLength(2, ErrorMessage = "At least two probability is required.")]
        public IList<ProbabilityViewModel> Probabilities { get; set; }
    }
}
