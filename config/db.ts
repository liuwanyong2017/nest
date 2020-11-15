// const productConfig = {
//     mysql: {
//         port: 3306,
//         host: 'localhost',
//         user: 'root',
//         password: 'kk201101',
//         database: 'nest', // 库名
//         connectionLimit: 10, // 连接限制
//     },
// };
//
// const localConfig = {
//     mysql: {
//         port: 3306,
//         host: 'localhost',
//         user: 'root',
//         password: 'kk201101',
//         database: 'nest', // 库名
//         connectionLimit: 10, // 连接限制
//     },
// };
//
// // 本地运行是没有 process.env.NODE_ENV 的，借此来区分[开发环境]和[生产环境]
// const dbConfig = process.env.NODE_ENV ? productConfig : localConfig;
//
// export default dbConfig;