import {HttpException, HttpService, Injectable} from "@nestjs/common";
import {config} from "../../../config/config";
import {format} from "util";
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "./user.entity";
import {Repository} from "typeorm";


@Injectable()
export class UserService {
    constructor(
        private readonly httpService: HttpService,
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>
    ) {
    }

    async codeToToken(code: string) {
        const {appId, appSecret, appUrl} = config.wx;
        const url = format(appUrl, appId, appSecret, code);
        const {data, status, statusText} = await this.httpService.get(url).toPromise();

        if (status !== 200) {
            throw new HttpException({
                status, error: "失败了！" + statusText
            }, status);
        }
        if (data.openid) {
            let user = await this.verifyOpenid(data.openid);
            console.log(user, 1);
            if (!user) {
                user = await this.openidCreated(data.openid);
                console.log(user, 2);
            }
        }
        return data;
    }

    async verifyOpenid(openid) {
        const user = await this.usersRepository.findOne({
            where: {openid}
        });
        return user;
    }

    async openidCreated(openid) {
        const user = await this.usersRepository.save({openid});
        return user;
    }
}
