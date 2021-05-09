import {Body, Controller, Post} from "@nestjs/common";
import {UserService} from "./user.service";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Post("token")
    async getToken(@Body("account") code: string) {
        console.log(code,1);
        const token = await this.userService.codeToToken(code);
        console.log(token,3);
        return token;
    }
}
