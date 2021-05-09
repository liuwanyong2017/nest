import {IsInt, IsString} from "class-validator";

export class UserDto{
    @IsInt()
    readonly id:number;
    @IsString()
    readonly name:string;
    @IsString()
    readonly password:string;
    @IsString()
    readonly openid:string;
    @IsString()
    readonly role:string;
    @IsString()
    readonly email:string;
    @IsString()
    readonly avatar:string;
}