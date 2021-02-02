import { LogTopic } from "./log-topic";

class Logger {
    private topic: LogTopic

    constructor (topic: LogTopic) {
        this.topic = topic
    }

    fatal (message: string, ...params: any[]) {

    }

    error (message: string, ...params: any[]) {

    }

    warn (message: string, ...params: any[]) {

    }

    info (message: string, ...params: any[]) {

    }

    debug (message: string, ...params: any[]) {

    }

    trace (message: string, ...params: any[]) {

    }
}

export default Logger