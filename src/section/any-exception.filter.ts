import {ArgumentsHost, Catch, ExceptionFilter, HttpStatus} from "@nestjs/common";

@Catch()
export class AnyExceptionFilter implements ExceptionFilter {
    catch(exception, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status =
            exception.status ||
            HttpStatus.INTERNAL_SERVER_ERROR;

        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            message: exception.message || "server error!"
        });
    }
}
