/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { getLoglevel } from '../helpers/logger.helper';
import { LogLevelType } from '../types/log-level-type.enum';

export class Logger {
  /**
   * The log level for the logger.
   */
  private _logLevel: LogLevelType;

  constructor(logLevel?: LogLevelType) {
    this._logLevel = logLevel ?? getLoglevel();
    console.log(
      `[${new Date().toISOString()}] [STD]`,
      'Logger initialized with log level:',
      LogLevelType[this._logLevel],
    );
  }

  /**
   * Logs a message to the console with a timestamp prefix.
   * @param message The message to log.
   */
  log(...messages: unknown[]): void {
    if (this._logLevel < LogLevelType.STD) return;
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [STD]`, ...messages);
  }

  /**
   * Logs an info message to the console with a timestamp prefix.
   * @param message The info message to log.
   */
  info(...messages: unknown[]): void {
    if (this._logLevel < LogLevelType.INFO) return;
    const timestamp = new Date().toISOString();
    console.info(`[${timestamp}] [INFO]`, ...messages);
  }

  /**
   * Logs a warning message to the console with a timestamp prefix.
   * @param message The warning message to log.
   */
  warn(...messages: unknown[]): void {
    if (this._logLevel < LogLevelType.WARN) return;
    const timestamp = new Date().toISOString();
    console.warn(`[${timestamp}] [WARN]`, ...messages);
  }

  /**
   * Logs an error message to the console with a timestamp prefix.
   * @param message The error message to log.
   */
  error(...messages: unknown[]): void {
    const timestamp = new Date().toISOString();
    console.error(
      `[${timestamp}] [ERROR]`,
      ...messages.map((m) => `${m}`.replaceAll('\n', '\\n')),
    );
  }

  /**
   * Logs a debug message to the console with a timestamp prefix.
   * @param message The debug message to log.
   */
  debug(...messages: unknown[]): void {
    if (this._logLevel < LogLevelType.DEBUG) return;
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [DEBUG]`, ...messages);
  }

  /**
   * Logs a trace message to the console with a timestamp prefix.
   * @param message The trace message to log.
   */
  trace(...messages: unknown[]): void {
    if (this._logLevel < LogLevelType.TRACE) return;
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [TRACE]`, ...messages);
  }

  /**
   * Logs a table to the console.
   * @param messages The messages to log as a table.
   * This method uses `console.table` to display the messages in a tabular format.
   */
  table(...messages: unknown[]): void {
    console.table(messages);
  }

  /**
   * Clears the console.
   * This method uses `console.clear` to clear the console output.
   */
  clear(): void {
    console.clear();
  }
}
