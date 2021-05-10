import {forwardRef, HttpModule, Module} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {JwtModule} from "@nestjs/jwt";
import {config} from "../../../config/config";
import {PassportModule} from "@nestjs/passport";
import {UserModule} from "../user/user.module";
import {JwtStrategy} from "./jwt.strategy";

@Module({
    imports: [
        PassportModule.register({defaultStrategy:'jwt'}),
        JwtModule.register({
            secret: config.secretKey,
            signOptions:{expiresIn:config.expiresIn}
        }),
        forwardRef(()=>UserModule)
    ],
    providers: [AuthService,JwtStrategy],
    exports: [AuthService]
})
export class AuthModule {
}
