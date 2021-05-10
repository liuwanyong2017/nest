import {Injectable} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";
import {config} from "../../../config/config";


@Injectable()
//对于jwt令牌如何获取的设置：
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: config.secretKey
        });
    }

    async validate(data) {
        console.log(data,'iwt验证，守卫执行！');
        return data;
    }
}