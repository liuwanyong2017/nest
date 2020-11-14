import {TypeOrmModule} from "@nestjs/typeorm";


export const mysqlOrm = TypeOrmModule.forRoot(
    {
        port: 3306,
        host: "localhost",
        type: "mysql",
        username: "root",
        password: "kk201101",
        database: "nest",
        synchronize: true,  //同步的
        logging: true,
        entities: ["../src/**/*.entity{.ts,.js}"]  //数据表的文件模块的导入！，全局静态文件地址。需要看app.module.ts文件的路径
    }
);