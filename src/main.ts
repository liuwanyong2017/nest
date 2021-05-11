import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {ValidationPipe} from "./section/validation.pipe";
import {HttpExceptionFilter} from "./section/http-exception.filter";
import {AnyExceptionFilter} from "./section/any-exception.filter";
import * as express from "express";
import * as path from "path";
import {NestExpressApplication} from "@nestjs/platform-express";

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.useStaticAssets("public");
    app.use(express.json()); // For parsing application/json
    app.use(express.urlencoded({extended: true})); // For parsing application/x-www-form-urlencoded
    app.useGlobalFilters(new AnyExceptionFilter());
    app.useGlobalFilters(new HttpExceptionFilter());

    app.useGlobalPipes(  //校验
        new ValidationPipe()
    );
    await app.listen(3000);
}

bootstrap();
