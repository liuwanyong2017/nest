import {Injectable} from "@nestjs/common";

@Injectable()
export class ImgService {
    // writeImg(file) {
    //     const imgName = `${Date.now()}-` + file.originalname,
    //         imgPath = path.join(
    //             __dirname, "../../../../public/upload/img",
    //             imgName
    //         );
    //     const reader = createReadStream(file.path);
    //     const stream = createWriteStream(imgPath);
    //     reader.pipe(stream);
    //
    //     return new Promise((resolve, reject) => {
    //         stream.on(
    //             "close", () => {
    //                 resolve("public/upload/img/" + imgName);
    //             }
    //         );
    //         stream.on("error", err => {
    //             reject({err, file});
    //         });
    //     });
    // }
}
