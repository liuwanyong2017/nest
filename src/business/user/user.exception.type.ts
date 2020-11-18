import {BaseException} from "../../section/http-exception.filter";


export class NameOccupied extends BaseException{
    constructor() {
        super('用户名已被占用！',403,40001);
    }
}