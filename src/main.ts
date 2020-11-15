import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {ValidationPipe} from "./section/validation.pipe";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(  //校验
        new ValidationPipe()
    );
    await app.listen(3000);
}

bootstrap();
