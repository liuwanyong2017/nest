import {Module} from "@nestjs/common";
import {ImgController} from "./img.controller";
import {ImgService} from "./img.service";
import {MulterModule} from "@nestjs/platform-express";
import {diskStorage} from "multer";

@Module({
    imports: [
        MulterModule.register(
            {
                storage: diskStorage({
                    destination: `./public/upload/img`,
                    filename: (req, file, cd) => {
                        return cd(null, `${Date.now()}-`+file.originalname);
                    }
                })
            }
        )
    ],
    controllers: [ImgController],
    providers: [ImgService]
})
export class ImgModule {
}
