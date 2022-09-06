import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { forbiddenError } from '../common/errorHandlers';

export const checkToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['x-access-token'];
    if (!token) {
        const { status, body } = forbiddenError();
        res.status(status).send(body);
    }

    try {
        req.app.locals.user = jwt.verify(token as string, process.env.TOKEN_KEY);
    } catch (error) {
        const { status, body } = forbiddenError('Invalid token');
        res.status(status).send(body);
    }
    return next();

};