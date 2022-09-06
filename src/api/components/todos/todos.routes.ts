import { Router } from 'express';
import ToDosController from './todos.controller';

const todosRouter = Router();

todosRouter.get('/:id', ToDosController.get);
todosRouter.get('/', ToDosController.getAll);
todosRouter.post('/', ToDosController.create);
todosRouter.put('/:id', ToDosController.update);
todosRouter.delete('/:id', ToDosController.delete);

export default todosRouter;
