import { Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "./user.entity";
import {Repository} from "typeorm";


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
    ) {
    }


    async verifyOpenid(openid) {
        const user = await this.usersRepository.findOne({
            where: {openid}
        });
        return user;
    }

    async openidCreated(openid) {
        const user = await this.usersRepository.save({openid});
        return user;
    }
}
