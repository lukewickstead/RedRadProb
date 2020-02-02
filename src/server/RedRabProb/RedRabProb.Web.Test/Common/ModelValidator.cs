namespace ABRSM.PopMusic.Tests.Common.Validation
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.Linq;

    public static class ModelValidator
    {
        public static IEnumerable<string> Validate<T>(T model)
        {
            var vc = new ValidationContext(model);
            var results = new List<ValidationResult>();

            Validator.TryValidateObject(model, vc, results, true);
            return results.Select(x => x.ErrorMessage);
        }
    }
}