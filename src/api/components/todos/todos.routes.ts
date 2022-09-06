import { Router } from 'express';
import ToDosController from './todos.controller';

const todosRouter = Router();

todosRouter.get('/:id', ToDosController.get);
todosRouter.get('/', ToDosController.getAll);
todosRouter.post('/', ToDosController.create);

export default todosRouter;
