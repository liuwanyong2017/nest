import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {UserModule} from "./module/user/user.module";
import {mysqlOrm} from "../config/ormconfig";
import {Connection} from "typeorm";
import {UserEntity} from "./module/user/user.entity";


@Module({
    imports: [
        mysqlOrm({
            entities:[
                UserEntity
            ]
        }),
        UserModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    constructor(private readonly connection:Connection) {
    }
}
