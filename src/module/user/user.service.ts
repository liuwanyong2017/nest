import {HttpService, Injectable} from "@nestjs/common";
import {config} from "../../../config/config";
import {format} from "util";



@Injectable()
export class UserService {
    constructor(private readonly httpService: HttpService) {
    }

    async codeToToken(code: string) {
        const {appId,appSecret,appUrl} = config.wx;
        const url = format(appUrl,appId,appSecret,code);
        console.log(url);
        const res = await this.httpService.get(url).toPromise();
        console.log(res.data);
        return res.data;
    }
}
