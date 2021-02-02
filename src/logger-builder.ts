import { LogSeverity, LogWriterBase } from "./log-models";
import Logger from "./logger";

class LoggerBuilder {
    severity (severity: LogSeverity) {

    }

    write (writer: LogWriterBase) {

    }

    create (): Logger {
        throw 'Not Implemented'
    }
}

export default LoggerBuilder