/* eslint-disable max-classes-per-file */
import { StatusEnum } from './todos';

export class CreateToDoDto {
  title: string;

  description: string;

  status?: StatusEnum;

  owner: string;
}

export class UpdateToDoDto {
  title?: string;

  description?: string;

  status?: StatusEnum;
}
