import { Injectable } from '@nestjs/common';
import {
    UserCreateInput,
    UserUpdateInput,
} from 'prisma/src/generated/prisma/models/User';
import { PrismaService } from 'src/prisma/prisma.service';

interface IEditUserProps {
    userId: string;
    body: UserUpdateInput;
}

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async getAll() {
        return await this.prisma.user.findMany();
    }

    async createUser(userDto: UserCreateInput) {
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
