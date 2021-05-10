import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {ValidationPipe} from "./section/validation.pipe";
import {HttpExceptionFilter} from "./section/http-exception.filter";
import {AnyExceptionFilter} from "./section/any-exception.filter";
import * as express from "express";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
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
