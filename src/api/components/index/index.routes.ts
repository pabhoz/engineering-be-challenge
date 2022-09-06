import { Router, Response } from 'express';

const indexRouter = Router();

indexRouter.get('/', (_, res: Response) => {
  res.send(`Every.io ToDos API`);
});

export default indexRouter;
