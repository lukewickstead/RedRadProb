namespace RedRabProb.Logging
{
    using System.Collections.Generic;
    using System.IO;
    using System.Threading.Tasks;

    public class LogWriter : ILogWriter
    {
        private readonly string logFilePath;

        public LogWriter(string logFilePath)
        {
            this.logFilePath = logFilePath;
        }

        public async Task AppendLinesToLogFileAsync(string logEntry)
        {
            await File.AppendAllLinesAsync(this.logFilePath, new List<string> { logEntry });
        }
    }
}
