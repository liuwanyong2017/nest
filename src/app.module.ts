import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UserModule} from "./business/user/user.module";
import {mysqlOrm} from "../config/ormconfig";
import {TypeOrmModule} from "@nestjs/typeorm";


@Module({
  imports: [
      mysqlOrm(
          {
              entities: [
                  __dirname + "/**/*.entity{.ts,.js}"
              ]  //数据表的文件模块的导入！，全局静态文件地址。需要看app.module.ts文件的路径
          }
      ),
      UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
