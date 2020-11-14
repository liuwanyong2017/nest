import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './business/user/user.service';
import { UserController } from './business/user/user.controller';
import {mysqlOrm} from "../config/ormconfig";
@Module({
  imports: [
      mysqlOrm
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
