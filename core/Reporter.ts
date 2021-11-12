interface Reporter {
	addMessage(message : string): void;
	attachText(text : string, message : string): void;
	attachFile(path : string, message : string): void;
	attachScreenshot(screenshot : Uint8Array[]): void;
	addWarning(message : string, logger : ILogger): void;
	addError(message : string, logger : ILogger): void;
	addDebug(message : string, logger : ILogger): void;
	addTrace(message : string, logger : ILogger): void;
}