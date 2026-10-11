import { Injectable } from '@nestjs/common';
import { UsersCreateDto } from 'src/dto/users/users.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { IQueryParams } from 'src/type/api/queryParams';
import { IEditUserProps } from 'src/type/api/users/props';
import { handleQueryParams } from 'src/utils/api/handleQueryParams';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async getAll(queryParams: IQueryParams['GET']) {
        const users = await this.prisma.user.findMany();

        return handleQueryParams.GET(users, queryParams);
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
