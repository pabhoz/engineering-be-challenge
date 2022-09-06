/* eslint-disable no-underscore-dangle */
import { Request, Response } from 'express';
import { mongoDBErrorHandler } from '../../common/errorHandlers';
import { CreateToDoDto, UpdateToDoDto } from './interfaces/todos.dto';
import ToDosService from './todos.service';

const ToDosController = {
  get: async (req: Request, res: Response) => {
    try {
      const { user } = req.app.locals;
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
      const { title, description } = req.body;
      const data: CreateToDoDto = {
        title,
        description,
        owner: user._id,
      };
      const todo = await ToDosService.create(data);
      res.send(todo).status(201);
    } catch (error: unknown) {
      const { status, body } = mongoDBErrorHandler(error);
      res.status(status).send(body);
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const { user } = req.app.locals;
      const { id } = req.params;
      const { title, description, status } = req.body;
      const data: UpdateToDoDto = {
        title,
        description,
        status,
      };
      const update = await ToDosService.update(id, data);
      if (!update){
        res.send({ message: `Unexpected error performing update for ToDo ${id}`}).status(500);
      }
      res.send({ _id: id, ...data, owner: user._id }).status(201);
    } catch (error: unknown) {
      const { status, body } = mongoDBErrorHandler(error);
      res.status(status).send(body);
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deleted = await ToDosService.delete(id);
      if(!deleted) {
        res.send({ message: `Unexpected error performing delete for ToDo ${id}`}).status(500);
      }
      res.status(200).send({message: `ToDo ${id} was deleted`});
    } catch (error) {
      const { status, body } = mongoDBErrorHandler(error);
      res.status(status).send(body);
    }
  },

};

export default ToDosController;
