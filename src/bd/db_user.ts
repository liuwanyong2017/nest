import sequelize from "./sequelize";
import * as Sequelize from "sequelize";


export class User {
    static async findByName(name: string): Promise<any> {
        const sql = `
            SELECT
                user_id,real_name,role
            FROM
                admin_user
            WHERE
                account_name = ${name}
        `;
        try {
            const res = await sequelize.query(
                sql, {
                    type: Sequelize.QueryTypes.SELECT, // 查询方式
                    raw: true, // 是否使用数组组装的方式展示结果
                    logging: true, // 是否将 SQL 语句打印到控制台，默认为 true
                }
            );
            const user = res[0];
            return user ? {
                code: 200, data: {user}
            } : {
                code:200,msg:'查无此人！'
            };
        }catch (e) {
            return {
                code:503,
                msg:`server error:${e}`
            }
        }
    }
}
