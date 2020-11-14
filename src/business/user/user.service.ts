import {Injectable} from "@nestjs/common";

// import {User} from "../../bd/db_user";

@Injectable()
export class UserService {
    async findOne(username: string): Promise<any> {
        // return await User.findByName(username)
        return await 0;
    }
}
