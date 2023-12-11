import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateLoginDto {

    @IsString()
    @IsNotEmpty()
readonly username: string;

@IsNotEmpty()
@IsString()
@MinLength(6)
readonly password: string;
}
