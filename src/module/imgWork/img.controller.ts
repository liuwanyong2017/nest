import {Controller, Post, UploadedFiles, UseGuards, UseInterceptors} from "@nestjs/common";
import {FileFieldsInterceptor,} from "@nestjs/platform-express";
import {AuthGuard} from "@nestjs/passport";


@Controller("upload")
export class ImgController {

    // @UseGuards(AuthGuard('jwt'))
    @Post("image")
    @UseInterceptors(FileFieldsInterceptor(
        [
            {name: "avatar", maxCount: 1},
        ],
    ))
    async uploadImg(@UploadedFiles() files) {
        files
        return files
    }
}
