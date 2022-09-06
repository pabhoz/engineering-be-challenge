import { Router } from 'express';
import UsersController from './users.controller';

const todosRouter = Router();

todosRouter.get('/:id', UsersController.get);
todosRouter.get('/', UsersController.getAll);
todosRouter.post('/', UsersController.create);

export default todosRouter;
