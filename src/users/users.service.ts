import { Injectable } from '@nestjs/common';
import { User } from 'prisma/src/generated/prisma/client';
import { UsersCreateDto } from 'src/dto/users/users.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { IQueryParams } from 'src/type/api/queryParams';
import { IEditUserProps } from 'src/type/api/users/props';
import { handleQueryParams } from 'src/utils/api/handleQueryParams';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async getAll(queryParams: IQueryParams['GET']) {
        const users = await this.prisma.user.findMany(
            handleQueryParams.GET<User>(queryParams, ['firstName', 'lastName']),
        );

        return users;
    }

    async createUser(userDto: UsersCreateDto) {
        return await this.prisma.user.create({ data: userDto });
    }

    async deleteUser(userId: string) {
        return await this.prisma.user.delete({ where: { id: userId } });
    }

    async editUser({ userId, body }: IEditUserProps) {
        return await this.prisma.user.update({
            where: { id: userId },
            data: structuredClone(body),
        });
    }
}
