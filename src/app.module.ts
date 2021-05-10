import { MiddlewareConsumer, Module, NestModule} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {UserModule} from "./module/user/user.module";
import {mysqlOrm} from "../config/ormconfig";
import {Connection} from "typeorm";
import {UserEntity} from "./module/user/user.entity";
import {WxCodeMiddleware} from "./middleware/wx.code.middleware";
import {HttpGlobalModule} from "./module/httpGlobalModule";
import {ImgModule} from "./module/imgWork/img.module";


@Module({
    imports: [
        mysqlOrm({
            entities: [
                UserEntity
            ]
        }),
        UserModule,
        HttpGlobalModule,
        ImgModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {


    constructor(
        private readonly connection: Connection,
    ) {

    }

    configure(consumer: MiddlewareConsumer): any {
        consumer.apply(
            WxCodeMiddleware
        ).forRoutes(
            "user/token"
        );
    }
}
