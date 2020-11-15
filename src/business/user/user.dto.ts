import {IsBoolean, IsInt, IsString} from "class-validator";

class CreateUserDto {
    @IsString()
    readonly password: string;

    @IsString()
    readonly name: string;

}
export class UpdateUserDto {

    @IsString()
    readonly password?: string;

    @IsString()
    readonly name?: string;

    @IsInt()
    readonly auth?: number;

    @IsBoolean()
    readonly deleted?: boolean;
}

export default CreateUserDto