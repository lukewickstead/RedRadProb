namespace RedRabProb.Web.ViewModels
{
    using System.ComponentModel.DataAnnotations;

    public class ProbabilityViewModel
    {
        [Range(0.0, 1.0, ErrorMessage = "Probability must be between 0 and 1")]
        public double Rate { get; set; }
    }
}
