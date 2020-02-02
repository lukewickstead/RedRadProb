﻿namespace RedRabProb.Web.Filter
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public class RequiredEnumAttribute : RequiredAttribute
    {
        public override bool IsValid(object value)
        {
            if (value == null ||
                value.ToString().Equals("Unknown", StringComparison.InvariantCultureIgnoreCase))
            {
                return false;
            }

            var type = value.GetType();
            return type.IsEnum && Enum.IsDefined(type, value);
        }
    }
}