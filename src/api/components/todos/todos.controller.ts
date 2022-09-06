/* eslint-disable no-underscore-dangle */
import { Request, Response } from 'express';
import { mongoDBErrorHandler } from '../../common/errorHandlers';
import { CreateToDoDto } from './interfaces/todos.dto';
import ToDosService from './todos.service';

const ToDosController = {
  get: async (req: Request, res: Response) => {
    try {
      const { user } = req.app.locals;
      console.log(user);
      const todo = await ToDosService.get(req.params.id, user._id);
      res.status(200).send(todo);
    } catch (error) {
      const { status, body } = mongoDBErrorHandler(error);
      res.status(status).send(body);
    }
  },

  getAll: async (req: Request, res: Response) => {
    try {
      const { user } = req.app.locals;
      console.log(user);
      const todos = await ToDosService.getAll(user._id);
      res.status(200).send(todos);
    } catch (error) {
      const { status, body } = mongoDBErrorHandler(error);
      res.status(status).send(body);
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const { user } = req.app.locals;
      const data: CreateToDoDto = {
        title: req.body.title,
        description: req.body.description,
        owner: user._id
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
