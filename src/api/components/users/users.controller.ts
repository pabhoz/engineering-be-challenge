import { Request, Response } from 'express';
import { mongoDBErrorHandler } from '../../common/errorHandlers';
import { CreateUserDto } from './interfaces/users.dto';
import UsersService from './users.service';

const UsersController = {
  get: async (req: Request, res: Response) => {
    try {
      const user = await UsersService.get(req.params.id);
      res.status(200).send(user);
    } catch (error) {
      const { status, body } = mongoDBErrorHandler(error);
      res.status(status).send(body);
    }
  },

  getAll: async (_: Request, res: Response) => {
    try {
      const users = await UsersService.getAll();
      res.status(200).send(users);
    } catch (error) {
      const { status, body } = mongoDBErrorHandler(error);
      res.status(status).send(body);
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const data: CreateUserDto = {
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
      };
      const user = await UsersService.create(data);
      res.send(user).status(201);
    } catch (error: unknown) {
      const { status, body } = mongoDBErrorHandler(error);
      res.status(status).send(body);
    }
  },
};

export default UsersController;
