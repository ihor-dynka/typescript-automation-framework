import { Logger } from "tslog";
import { ILogger } from "./ilogger";

export class TestLogger implements ILogger {

    private logger: Logger = new Logger();

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

// export default new TestLogger();