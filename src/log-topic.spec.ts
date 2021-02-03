import { Log } from './log-models';
import { LogTopic } from './log-topic';

describe ('LogTopic', () => {
    it ('calls the subscription when a log published', () => {
        // Mocks
        let mockSubscriptionFunc = jest.fn()

        // Init
        let topic = new LogTopic()
        topic.subscribe(mockSubscriptionFunc)

        // Act
        topic.publish({ severity: 'FATAL', message: 'RIP' })

        // Assert
        expect(mockSubscriptionFunc).toBeCalledTimes(1)
    })

    it ('calls multiple subscriptions when a log published', () => {
        // Mocks
        let mockSubscriptionFunc1 = jest.fn()
        let mockSubscriptionFunc2 = jest.fn()
        let mockSubscriptionFunc3 = jest.fn()

        // Init
        let topic = new LogTopic()
        topic.subscribe(mockSubscriptionFunc1)
        topic.subscribe(mockSubscriptionFunc2)
        topic.subscribe(mockSubscriptionFunc3)

        // Act
        topic.publish({ severity: 'FATAL', message: 'RIP' })

        // Assert
        expect(mockSubscriptionFunc1).toBeCalledTimes(1)
        expect(mockSubscriptionFunc2).toBeCalledTimes(1)
        expect(mockSubscriptionFunc3).toBeCalledTimes(1)
    })

    it ('calls the subscription with publishes message', () => {
        // Mocks
        let mockSubscriptionFunc = jest.fn()

        // Init
        let topic = new LogTopic()
        topic.subscribe(mockSubscriptionFunc)

        // Act
        topic.publish({ severity: 'FATAL', message: 'RIP' })

        // Assert
        expect(mockSubscriptionFunc).toBeCalledWith({ severity: 'FATAL', message: 'RIP' })
    })

    it ('filters messages', () => {
        // Mocks
        let mockSubscriptionFunc = jest.fn()

        // Init
        let topic = new LogTopic()
        topic.setFilter(log => log.severity === 'FATAL')
        topic.subscribe(mockSubscriptionFunc)

        // Act
        topic.publish({ severity: 'FATAL', message: 'RIP' })
        topic.publish({ severity: 'INFO', message: 'Fly Forever' })

        // Assert
        expect(mockSubscriptionFunc).toBeCalledTimes(1)
        expect(mockSubscriptionFunc).toBeCalledWith({ severity: 'FATAL', message: 'RIP' })
        expect(mockSubscriptionFunc).not.toBeCalledWith({ severity: 'INFO', message: 'Fly Forever' })
    })
})