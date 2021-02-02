import { Log } from './log-models'

export type LogTopicFilter = (log: Log) => boolean
export type LogTopicSubscription = (log: Log) => boolean

export class LogTopic {
    publish (log: Log) {

    }

    subscribe (subscription: LogTopicSubscription) {

    }

    setFilter (filter: LogTopicFilter) {

    }
}