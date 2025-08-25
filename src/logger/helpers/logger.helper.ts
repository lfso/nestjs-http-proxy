import { LogLevelType } from '../types/log-level-type.enum';

/**
 * Retrieve log level from environment variable
 * @returns - The log level for the logger.
 */
export function getLoglevel(): LogLevelType {
  const logLevel = (process.env.LOG_LEVEL ?? 'STD').toUpperCase();

  const levelMap: Record<string, LogLevelType> = {
    ERROR: LogLevelType.ERROR,
    WARN: LogLevelType.WARN,
    STD: LogLevelType.STD,
    INFO: LogLevelType.INFO,
    DEBUG: LogLevelType.DEBUG,
    TRACE: LogLevelType.TRACE,
  };
  return levelMap[logLevel] ?? LogLevelType.STD;
}
