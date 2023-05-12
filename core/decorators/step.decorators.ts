import { ILogger } from "../logging/ilogger";
import { LoggerFactory } from "../logging/logger.factory";
import { StringUtils } from "../utils/string.utils";

const logger: ILogger = LoggerFactory.getInstance();

type MethodTestDecorator = (
  target: object,
  property: string,
  descriptor: PropertyDescriptor
) => PropertyDescriptor;

export function step<T>(
  message?: string | ((arg: T) => string)
): MethodTestDecorator {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const original: any = descriptor.value;

    descriptor.value = async function (...args: any) {
      let stepMessage: any =
        message === undefined
          ? `${StringUtils.toReadableText(
              target.constructor.name
            ).toUpperCase()} => ${StringUtils.toReadableText(propertyKey)}`
          : `${StringUtils.toReadableText(
              target.constructor.name
            ).toUpperCase()} => ${message}`;

      stepMessage =
        args.length !== 0 ? `${stepMessage} => ${args}` : stepMessage;

      logger.info(stepMessage);

      return original.apply(this, args);
    };
    return descriptor;
  };
}
