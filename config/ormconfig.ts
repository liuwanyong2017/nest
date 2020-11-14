export const ormconfig = {
    port: 3306,
    host: "localhost",
    type: "mysql",
    username: "root",
    password: "kk201101",
    database: "nest",
    synchronize: true,  //同步的
    logging: true,
    entities: ["src/**/*.entity{.ts,.js}"]  //数据表的文件模块的导入！
};