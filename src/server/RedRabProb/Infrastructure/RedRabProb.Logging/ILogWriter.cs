namespace RedRabProb.Logging
{
    using System.Threading.Tasks;

    public interface ILogWriter
    {
        Task AppendLinesToLogFileAsync(string logEntry);
    }
}