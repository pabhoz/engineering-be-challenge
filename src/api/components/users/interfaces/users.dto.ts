import { RoleEnum } from './users';

export class CreateUserDto {
    username: string;

    password: string;

    role?: RoleEnum;
} 