import { Request, Response } from 'express';
import { mongoDBErrorHandler } from '../../common/errorHandlers';
import { CreateToDoDto } from './interfaces/todos.dto';
import ToDosService from './todos.service';

const ToDosController = {
  get: async (req: Request, res: Response) => {
    try {
      const todo = await ToDosService.get(req.params.id);
      res.status(200).send(todo);
    } catch (error) {
      const { status, body } = mongoDBErrorHandler(error);
      res.status(status).send(body);
    }
  },

  getAll: async (_: Request, res: Response) => {
    try {
      const todos = await ToDosService.getAll();
      res.status(200).send(todos);
    } catch (error) {
      const { status, body } = mongoDBErrorHandler(error);
      res.status(status).send(body);
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const data: CreateToDoDto = {
        title: req.body.title,
        description: req.body.description,
        owner: ''
      };
      const todo = await ToDosService.create(data);
      res.send(todo).status(201);
    } catch (error: unknown) {
      const { status, body } = mongoDBErrorHandler(error);
      res.status(status).send(body);
    }
  },
};

export default ToDosController;
