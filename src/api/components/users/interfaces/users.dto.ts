/* eslint-disable max-classes-per-file */
import { RoleEnum } from './users';

export class CreateUserDto {
  username: string;

  password: string;

  role?: RoleEnum;
}

export class UpdateUserDto {
  username?: string;

  password?: string;

  role?: RoleEnum;
}
