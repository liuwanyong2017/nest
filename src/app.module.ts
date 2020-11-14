import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './business/user/user.service';
import { UserController } from './business/user/user.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import {ormconfig} from "../config/ormconfig";
@Module({
  imports: [
      TypeOrmModule.forRoot(
          {
              port: 3306,
              host: "localhost",
              type: "mysql",
              username: "root",
              password: "kk201101",
              database: "nest",
              synchronize: true,  //同步的
              logging: true,
              entities: ["src/**/*.entity{.ts,.js}"]  //数据表的文件模块的导入！
          }
      )
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
