import {Body, Controller, Post} from "@nestjs/common";
import {UserService} from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly usersService:UserService) {
    }
    @Post('find-one')
    async findOne(@Body() body:any){
        return await  this.usersService.findOne(body.username)
    }
}
