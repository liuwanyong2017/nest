import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(  //校验
        new ValidationPipe({
            whitelist: true,//过滤非白名单的属性
        })
    );
    await app.listen(3000);
}

bootstrap();
