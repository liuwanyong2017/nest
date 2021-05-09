import {HttpException, Injectable} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";

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
        private readonly jwtService: JwtService
    ) {

    }

    generateToken(uid: number, scope: "visitor" | "buyer" | "seller" | "admin") {  //scope是用户身份权限值
        const token = this.jwtService.sign(
            {
                uid, scope: this.roles[scope]
            }
        );
        console.log(this.jwtService.verify(token));
        return token;
    }

    getToken(val: string) {
        try {
            var token = this.jwtService.verify(val);
        } catch (e) {
            if (e.name === "TokenExpiredError") {
                throw new HttpException("token已过期！", 200);
            }
        }
        return token;
        //约定好前端，token用httpBasicAuth验证，放在header里
    }
}