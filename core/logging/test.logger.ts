import { ILogger } from "./ilogger";
import { createLogger, format, transports } from "winston";

export class TestLogger implements ILogger {
  private logger: ILogger = createLogger({
    levels: { error: 1, warn: 2, debug: 3, info: 4 },
    format: format.combine(
      format.timestamp(),
      format.json()
    ),
    transports: [new transports.Console()],
    exceptionHandlers: [new transports.Console()],
    // rejectionHandlers: [new transports.Console()],
  });

  info(message: string): void {
    this.logger.info(message);
  }

  debug(message: string): void {
    this.logger.debug(message);
  }

  warn(message: string): void {
    this.logger.warn(message);
  }

  error(message: string): void {
    this.logger.error(message);
  }
}
