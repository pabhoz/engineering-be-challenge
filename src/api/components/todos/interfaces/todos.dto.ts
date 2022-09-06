import { StatusEnum } from './todos';

export class CreateToDoDto {
    title: string;

    description: string;

    status?: StatusEnum;

    owner: string;
} 