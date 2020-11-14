import {IsBoolean, IsInt, IsString} from "class-validator";

class UserDto {
    @IsInt()
    readonly id?: number;

    @IsString()
    readonly password: string;

    @IsString()
    readonly name: string;

    @IsInt()
    readonly auth?: number;

    @IsBoolean()
    readonly deleted?: boolean;
}

export default UserDto