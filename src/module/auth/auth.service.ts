import {HttpException, HttpService, Injectable} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";

import {UserService} from "../user/user.service";
import {UserEntity} from "../user/user.entity";

const obj = {
    visitor: 8,
    buyer: 16,
    seller: 24,
    admin: 36
};

@Injectable()
export class AuthService {
    roles = obj;

    constructor(
        private readonly httpService: HttpService,
        private readonly jwtService: JwtService,
        private readonly userService: UserService
    ) {

    }


    async _openidToUser(openid: string) {
        let user = await this.userService.verifyOpenid(openid);
        if (!user) {
            user = await this.userService.openidCreated(openid);
        }
        return user;
    }

    async userToToken(user: UserEntity) {
        const uid = user.id, role = user.role;
        return this._generateToken(uid, role);
    }

    async wxCodeToToken(openid: string) {
        //把从code到openid的过程放到中间键里了！得到的数据放在req里了！
        const user = await this._openidToUser(openid);
        return this.userToToken(user);
    }


    _generateToken(id: number, scope: "visitor" | "buyer" | "seller" | "admin") {  //scope是用户身份权限值
        const token = this.jwtService.sign(
            {
                id, scope: this.roles[scope]
                //sub字段是看官方文档说要跟jwt保持一致用sub的，而不是uid。
            }
        );
        return {token};
    }

}