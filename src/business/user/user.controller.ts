import {Body, Controller, Post} from "@nestjs/common";
import {UserService} from "./user.service";
import UserDto from "./user.dto";

@Controller("user")
export class UserController {
    constructor(private readonly usersService: UserService) {
    }

    @Post("create")
    async create(@Body() user: UserDto) {
        return await this.usersService.create(user);
    }
}
