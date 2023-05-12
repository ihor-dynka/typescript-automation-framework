import { ILogger } from "./ilogger";
import  { TestLogger } from "./test.logger";

let logger: ILogger;

export class LoggerFactory {
    public static getInstance(){
        if(!logger){
            logger = new TestLogger();
        }
        return logger;
    }
}