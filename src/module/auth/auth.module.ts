import {Module} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {JwtModule} from "@nestjs/jwt";
import {config} from "../../../config/config";
import {PassportModule} from "@nestjs/passport";

@Module({
    imports: [
        PassportModule.register({defaultStrategy:'jwt'}),
        JwtModule.register({
            secret: config.secretKey,
            signOptions:{expiresIn:config.expiresIn}
        })
    ],
    providers: [AuthService],
    exports: [AuthService]
})
export class AuthModule {
}
