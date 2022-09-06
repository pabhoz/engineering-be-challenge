/* eslint-disable no-underscore-dangle */
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { badRequestError, forbiddenError, mongoDBErrorHandler } from '../../common/errorHandlers';
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
      const { username, password, role } = req.body;
      const data: CreateUserDto = {
        username,
        password,
        role,
      };
      const user = await UsersService.create(data);
      res.send(user).status(201);
    } catch (error: unknown) {
      const { status, body } = mongoDBErrorHandler(error);
      res.status(status).send(body);
    }
  },

  login: async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      if(!(username && password)) {
        const { status, body } = badRequestError('Both, username and password are required to perform this operation');
        res.status(status).send(body);
      }

      const user = await UsersService.getByUsername(username);
      if (!user) {
        const { status, body } = forbiddenError('Invalid credentials');
        res.status(status).send(body);
      }

      const validPassword = await bcrypt.compare(password, user.password);
      if(!validPassword) {
        const { status, body } = forbiddenError('Invalid credentials');
        res.status(status).send(body);
      }

      const token = jwt.sign(
        { _id: user._id, username },
        process.env.TOKEN_KEY,
        {
          expiresIn: '1h',
        }
      );

      res.send(token).status(200);
    } catch (error: unknown) {
      const { status, body } = mongoDBErrorHandler(error);
      res.status(status).send(body);
    }
  },
};

export default UsersController;
