import {HttpModule, Module} from "@nestjs/common";
import {UserService} from "./user.service";
import {UserController} from "./user.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "./user.entity";

@Module({
    imports: [
        HttpModule,
        TypeOrmModule.forFeature([UserEntity])
    ],
    providers: [UserService],
    controllers: [UserController]
})
export class UserModule {
}
