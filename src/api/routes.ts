import { Router } from 'express';
import indexRouter from './components/index/index.routes';
import todosRouter from './components/todos/todos.routes';
import userRouter from './components/users/users.routes';

const routes = Router();

routes.use('/', indexRouter);
routes.use('/todos', todosRouter);
routes.use('/users', userRouter);

export default routes;
