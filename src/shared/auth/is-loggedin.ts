import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import { UnauthorizedError } from '../errors';

const isLoggedIn = (req: any, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      throw new UnauthorizedError('Unauthorized.');
    };

    const decoded:any = jwt.verify(token, config.jwt.secret, { ignoreExpiration: false });

    req.user = decoded.user;

    next();
  } catch (error: any) {
    next(new UnauthorizedError(error.message));
  };
};

export default isLoggedIn;