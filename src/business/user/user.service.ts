import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";
import UserDto from "./user.dto";

// import {User} from "../../bd/db_user";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>, //注入数据库依赖
    ) {
    }

    async create(userDto: UserDto): Promise<User> {
        const user = await this.findOneByName(userDto.name);
        if (user && user.id) throw new Error("用户名已占用！");
        return this.userRepository.create(userDto);
    }

    async delete(id: number) {
        return await this.userRepository.delete(id);
    }

    async update(userDto: UserDto) {
        return await this.userRepository.update(userDto.id, userDto);
    }

    async findOneById(id: number) {
        return await this.userRepository.findOne(id);
    }

    async findOneByName(name: string) {
        return await this.userRepository.findOne({name});
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }
}
