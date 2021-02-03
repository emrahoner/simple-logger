import { LogTopic } from "./log-topic";

class Logger {
    private topic: LogTopic

    constructor (topic: LogTopic) {
        this.topic = topic
    }

    fatal (message: string, ...params: any[]) {
        this.topic.publish({ severity: 'FATAL', message, params })
    }

    error (message: string, ...params: any[]) {
        this.topic.publish({ severity: 'ERROR', message, params })
    }

    warn (message: string, ...params: any[]) {
        this.topic.publish({ severity: 'WARN', message, params })
    }

    info (message: string, ...params: any[]) {
        this.topic.publish({ severity: 'INFO', message, params })
    }

    debug (message: string, ...params: any[]) {
        this.topic.publish({ severity: 'DEBUG', message, params })
    }

    trace (message: string, ...params: any[]) {
        this.topic.publish({ severity: 'TRACE', message, params })
    }
}

export default Logger