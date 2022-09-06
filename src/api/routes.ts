import { Router } from 'express';
import { checkToken } from './middleware/auth';
import indexRouter from './components/index/index.routes';
import todosRouter from './components/todos/todos.routes';
import userRouter from './components/users/users.routes';

const routes = Router();

routes.use('/', indexRouter);
routes.use('/todos', checkToken, todosRouter);
routes.use('/users', userRouter);

export default routes;
