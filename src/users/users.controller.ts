import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import type {
    UserCreateInput,
    UserUpdateInput,
} from 'prisma/src/generated/prisma/models/User';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('')
    async getAll() {
        return await this.usersService.getAll();
    }

    @Post('')
    async createUser(@Body() createUserBody: UserCreateInput) {
        return await this.usersService.createUser(createUserBody);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        return await this.usersService.deleteUser(id);
    }

    @Patch(':id')
    async editUser(
        @Param('id') id: string,
        @Body() editUserBody: UserUpdateInput,
    ) {
        return await this.usersService.editUser({
            userId: id,
            body: editUserBody,
        });
    }
}
