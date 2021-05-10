import {HttpException, HttpService, Injectable, NestMiddleware} from "@nestjs/common";
import {NextFunction} from "express";
import {config} from "../../config/config";
import {format} from "util";

@Injectable()
export class WxCodeMiddleware implements NestMiddleware {
    constructor(private readonly httpService: HttpService) {
    }

    async use(req: any, res: Response, next: NextFunction) {
        //这里的account 字段是跟前端约定好的，携带小程序的code ,account字段，body上面
        const {account} = req.body;
        const {appId, appSecret, appUrl} = config.wx;
        const url = format(appUrl, appId, appSecret, account);
        const {data, status, statusText} = await this.httpService.get(url).toPromise();

        if (status !== 200) {
            throw new HttpException({
                status, error: "失败了！" + statusText
            }, status);
        }
        if (!data.openid) {
            //如果微信后台报错，返回错误！
            throw new HttpException(data, 200);
        }
        req.openid = data.openid;

        next();
    }
}