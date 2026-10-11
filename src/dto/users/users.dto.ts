import { IsString } from 'class-validator';
import { USER_ERROR_MESSAGES } from './messages';

export class UsersCreateDto {
    @IsString({ message: USER_ERROR_MESSAGES.FIRST_NAME_NOT_FILLED })
    firstName!: string;

    @IsString({ message: USER_ERROR_MESSAGES.LAST_NAME_NOT_FILLED })
    lastName!: string;
}

export type UsersUpdateDto = Partial<UsersCreateDto>;
