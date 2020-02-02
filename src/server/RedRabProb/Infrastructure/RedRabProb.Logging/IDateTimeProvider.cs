using System;

namespace RedRabProb.Logging
{
    public interface IDateTimeProvider
    {
        DateTime GetUtcNow();
    }
}