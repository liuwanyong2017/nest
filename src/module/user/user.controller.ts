import {Request, Headers, Controller, Get, Post, UseGuards, } from "@nestjs/common";
import {AuthService} from "../auth/auth.service";
import {AuthGuard} from "@nestjs/passport";

@Controller("user")
export class UserController {
    constructor(
        private  authService: AuthService
    ) {
    }

    @Post("token")
    async getToken(@Request() req) {
        //这里有个先行的中间键执行了，从wxCode到openid这里了！
        return await this.authService.wxCodeToToken(req.openid);
    }

    @UseGuards(AuthGuard('jwt'))
    //守卫验证之后，默认把解析好的源数据放到了req.user上了！！
    @Get()
    async getUserDetail(@Request() req) {
        console.log(req.user);
        return "ok";
    }


}
