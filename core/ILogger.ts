interface ILogger {
	message(msg : string, level : LogLevel): void;
	setNext(nextLogger : ILogger): ILogger;
	consoleLogger(levels : Set<LogLevel>): ILogger;
	fileLogger(levels : Set<LogLevel>): ILogger;
}