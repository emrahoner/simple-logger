import { LogTopic } from "./log-topic"
import Logger from "./logger"

describe ('Logger', () => {
    let logger: Logger
    let logTopic: LogTopic
    let spyPublishFunc
    beforeEach(() => {
        logTopic = new LogTopic()
        spyPublishFunc = jest.spyOn(logTopic, 'publish')
        logger = new Logger(logTopic)
    })

    it ('publishes fatal log when fatal function is called', () => {
        // Act
        logger.fatal('Log message, {Timeout}, {Text}', 9, 'text')

        // Assert
        expect(spyPublishFunc).toBeCalledWith({ severity: 'FATAL', message: 'Log message, {Timeout}, {Text}', params: [9, 'text'] })
    })

    it ('publishes error log when error function is called', () => {
        // Act
        logger.error('Log message')

        // Assert
        expect(spyPublishFunc).toBeCalledWith({ severity: 'ERROR', message: 'Log message', params: [] })
    })

    it ('publishes warn log when warn function is called', () => {
        // Act
        logger.warn('Log message')

        // Assert
        expect(spyPublishFunc).toBeCalledWith({ severity: 'WARN', message: 'Log message', params: [] })
    })

    it ('publishes info log when info function is called', () => {
        // Act
        logger.info('Log message')

        // Assert
        expect(spyPublishFunc).toBeCalledWith({ severity: 'INFO', message: 'Log message', params: [] })
    })

    it ('publishes debug log when debug function is called', () => {
        // Act
        logger.debug('Log message')

        // Assert
        expect(spyPublishFunc).toBeCalledWith({ severity: 'DEBUG', message: 'Log message', params: [] })
    })

    it ('publishes trace log when trace function is called', () => {
        // Act
        logger.trace('Log message')

        // Assert
        expect(spyPublishFunc).toBeCalledWith({ severity: 'TRACE', message: 'Log message', params: [] })
    })
})
