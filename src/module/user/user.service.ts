import {HttpException, HttpService, Injectable} from "@nestjs/common";
import {config} from "../../../config/config";
import {format} from "util";
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "./user.entity";
import {Repository} from "typeorm";
import {AuthService} from "../auth/auth.service";


@Injectable()
export class UserService {
    constructor(
        private readonly httpService: HttpService,
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
        private authService: AuthService
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
        let user;
        if (data.openid) {
            user = await this.verifyOpenid(data.openid);
            if (!user) {
                user = await this.openidCreated(data.openid);
            }
        }
        const uid = user.id, role = user.role || "visitor";
        const token = this.authService.generateToken(uid, role);

        return token;
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
