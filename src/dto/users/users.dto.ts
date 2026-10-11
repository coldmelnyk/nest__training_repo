import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { USER_ERROR_MESSAGES } from './messages';

export class UsersCreateDto {
    @IsString({ message: USER_ERROR_MESSAGES.FIRST_NAME_NOT_FILLED })
    @IsNotEmpty()
    firstName!: string;

    @IsString({ message: USER_ERROR_MESSAGES.LAST_NAME_NOT_FILLED })
    @IsNotEmpty()
    lastName!: string;
}

export class UsersUpdateDto extends PartialType(UsersCreateDto) {}
