export interface LogWriterBase {
    write (severity: LogSeverity, message: String, ...params: any[])
}

export interface Log {
    severity: LogSeverity
    message: string
    params?: any[]
}

export type LogSeverity = 'FATAL' | 'ERROR' | 'WARN' | 'INFO' | 'DEBUG' | 'TRACE'