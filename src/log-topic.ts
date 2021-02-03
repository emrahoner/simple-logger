import { Log } from './log-models'

export type LogTopicFilter = (log: Log) => boolean
export type LogTopicSubscription = (log: Log) => void

export class LogTopic {
    private subscriptions: LogTopicSubscription[] = []
    private filter: LogTopicFilter

    publish (log: Log) {
        if (!this.filter || this.filter(log)) {
            this.subscriptions.forEach(subscription => {
                subscription(log)
            })
        }
    }

    subscribe (subscription: LogTopicSubscription) {
        this.subscriptions.push(subscription)
    }

    unsubscribe (subscription: LogTopicSubscription) {
        this.subscriptions.splice(this.subscriptions.findIndex(x => x === subscription), 1)
    }

    setFilter (filter: LogTopicFilter) {
        this.filter = filter
    }
}