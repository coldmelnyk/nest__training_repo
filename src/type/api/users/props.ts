import { UsersUpdateDto } from 'src/dto/users/users.dto';

export interface IEditUserProps {
    userId: string;
    body: UsersUpdateDto;
}
