import { Router } from 'express';
import UsersController from './users.controller';

const todosRouter = Router();

todosRouter.get('/:id', UsersController.get);
todosRouter.get('/', UsersController.getAll);
todosRouter.post('/', UsersController.create);
todosRouter.post('/login', UsersController.login);
todosRouter.put('/:id', UsersController.update);
todosRouter.delete('/:id', UsersController.delete);

export default todosRouter;
