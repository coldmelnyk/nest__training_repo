import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { type IQueryParams } from 'src/type/api/queryParams';
import { UsersCreateDto, type UsersUpdateDto } from 'src/dto/users/users.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('')
    async getAll(@Query() queryParams: IQueryParams['GET']) {
        return await this.usersService.getAll(queryParams);
    }

    @Post('')
    async createUser(@Body() createUserBody: UsersCreateDto) {
        return await this.usersService.createUser(createUserBody);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        return await this.usersService.deleteUser(id);
    }

    @Patch(':id')
    async editUser(
        @Param('id') id: string,
        @Body() editUserBody: UsersUpdateDto,
    ) {
        return await this.usersService.editUser({
            userId: id,
            body: editUserBody,
        });
    }
}
