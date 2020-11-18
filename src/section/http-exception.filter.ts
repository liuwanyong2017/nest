import {ArgumentsHost, Catch, ExceptionFilter, HttpException} from "@nestjs/common";
import {Request, Response} from "express";


export class BaseException extends HttpException {
    errorCode: number;

    constructor(msg: string, status: number, errorCode: number) {
        super(msg, status);
        this.errorCode = errorCode;
    }
}

//自定义异常过滤器，捕获异常！同时自定义返回数据！
@Catch(BaseException)   //捕获什么实例暴露的异常
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: BaseException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();
        const {message, errorCode} = exception;
        response
            .status(status)
            .json({
                statusCode: status,
                timestamp: new Date().toISOString(),
                path: request.url,
                message, errorCode
            });
    }
}
