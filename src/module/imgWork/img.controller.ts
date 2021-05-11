import {Controller, Post, UploadedFiles, UseInterceptors} from "@nestjs/common";
import {FileFieldsInterceptor,} from "@nestjs/platform-express";


@Controller("upload")
export class ImgController {

    @Post("image")
    @UseInterceptors(FileFieldsInterceptor(
        [
            {name: "img", maxCount: 6}
        ],
    ))
    async uploadImg(@UploadedFiles() files) {
        return files
    }
}
