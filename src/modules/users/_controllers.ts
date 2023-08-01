import { NextFunction, Request, Response } from 'express';
import httpValidator from '../../shared/http-validator';
import { patchMeSchema, postLoginUserSchema, postRegisterUserSchema } from './_schemas';
import addUser from './add-user';
import loginUser from './login-user';
import editUser from './edit-user';
import showUser from './show-user';
import removeUser from './remove-user';

export const postRegisterUser = async (req: Request, res:Response, next: NextFunction) => {
  try {
    httpValidator({ body: req.body }, postRegisterUserSchema);

    const result = await addUser(req.body);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  };
};

export const postLoginUser = async (req: Request, res:Response, next: NextFunction) => {
  try {
    httpValidator({ body: req.body }, postLoginUserSchema);

    const result = await loginUser(req.body);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const patchMe = async (req: any, res:Response, next: NextFunction) => {
  try {
    httpValidator({ body: req.body }, patchMeSchema);

    const result = await editUser({ id: req.user.id, ...req.body });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getMe = async (req: any, res:Response, next: NextFunction) => {
  try {
    const result = await showUser({ id: req.user.id });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  };
};

export const deleteMe = async (req: any, res:Response, next: NextFunction) => {
  try {
    const result = await removeUser({ id: req.user.id });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

