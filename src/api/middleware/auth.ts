import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { forbiddenError } from '../common/errorHandlers';

export const checkToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers['x-access-token'];
    if (!token) { throw new Error('Invalid token');  }
    req.app.locals.user = jwt.verify(token as string, process.env.TOKEN_KEY);
    return next();
  } catch (error) {
    const { status, body } = forbiddenError('Invalid token');
    return res.status(status).send(body);
  }
};
