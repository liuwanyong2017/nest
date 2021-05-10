import {Global, HttpModule, Module} from "@nestjs/common";


@Global()
@Module({
    imports: [HttpModule],
    exports: [HttpModule],
    providers: [HttpModule]
})
export class HttpGlobalModule {

}