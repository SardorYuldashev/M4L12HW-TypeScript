import { NextFunction, Request, Response } from 'express';
import { NotFoundError, BadRequestError, UnauthorizedError, ForbiddenError } from './index'

export default (err: any, req: Request, res: Response, next: NextFunction) => {
  let status = 500;

  if (err instanceof BadRequestError) status = 400;
  else if (err instanceof UnauthorizedError) status = 401;
  else if (err instanceof ForbiddenError) status = 403;
  else if (err instanceof NotFoundError) status = 404;

  res.status(status).json({ error: err.message });
};