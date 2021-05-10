import {Body, Controller, Post, UploadedFiles, UseInterceptors} from "@nestjs/common";
import {FileFieldsInterceptor,} from "@nestjs/platform-express";

@Controller("upload")
export class ImgController {
    @Post("image")
    @UseInterceptors(FileFieldsInterceptor(
        [
            {name: "img", maxCount: 6}
        ],

    ))
    uploadImg(@UploadedFiles() flies) {
        console.log(flies);
        return "ok";
    }
}
