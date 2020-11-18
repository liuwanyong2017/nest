import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {ValidationPipe} from "./section/validation.pipe";
import {HttpExceptionFilter} from "./section/http-exception.filter";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalFilters(new HttpExceptionFilter());

    app.useGlobalPipes(  //校验
        new ValidationPipe()
    );
    await app.listen(3000);
}

bootstrap();
