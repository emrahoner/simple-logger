export interface LogWriterBase {
    write (severity: LogSeverity, message: String, ...params: any[])
}

export interface Log {
    severity: LogSeverity
    message: string
    parameters?: any[]
}

export type LogSeverity = 'FATAL' | 'ERROR' | 'WARN' | 'INFO' | 'DEBUG' | 'TRACE'