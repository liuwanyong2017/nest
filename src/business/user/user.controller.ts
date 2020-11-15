import {Body, Controller, Get, Post} from "@nestjs/common";
import {UserService} from "./user.service";
import CreateUserDto from "./user.dto";

@Controller("user")
export class UserController {
    constructor(private readonly usersService: UserService) {
    }

    @Post("create")
    async create(@Body() createUserOto: CreateUserDto) {
        return await this.usersService.create(createUserOto);
    }

    @Get()
    async findAll() {
        return await this.usersService.findAll();
    }
}
