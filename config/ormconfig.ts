import {TypeOrmModule} from "@nestjs/typeorm";


export const mysqlOrm = (obj: object) => TypeOrmModule.forRoot(
    {
        port: 3306,
        host: "localhost",
        type: "mysql",
        username: "root",
        password: "kk201101",
        database: "nest",
        synchronize: true,  //同步的
        logging: true,
        ...obj
    }
);