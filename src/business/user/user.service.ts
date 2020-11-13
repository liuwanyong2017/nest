import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    findOne(username:string):string{
        if (username == 'ha'){
            return 'haha'
        }
        return 'oh!'
    }
}
