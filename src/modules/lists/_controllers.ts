import { NextFunction, Request, Response } from "express";
import httpValidator from "../../shared/http-validator";
import { deleteListSchema, getListSchema, patchListSchema, postListSchema } from "./_schemas";
import addList from "./add-list";
import listLists from "./list-lists";
import showList from "./show-list";
import editList from "./edit-list";
import removeList from "./remove-list";

export const postList = async (req: any, res: Response, next: NextFunction) => {
  try {
    httpValidator({ body: req.body }, postListSchema);

    const result = await addList({ ...req.body, user: req.user.id });

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getLists = async (req: any, res: Response, next: NextFunction) => {
  try {
    const result = await listLists({ filters: { user: req.user.id } });

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getList = async (req: any, res: Response, next: NextFunction) => {
  try {
    httpValidator({ params: req.params }, getListSchema);

    const result = await showList({ id: req.params.id, user: req.user.id });

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const patchList = async (req: any, res: Response, next: NextFunction) => {
  try {
    httpValidator({ params: req.params, body: req.body }, patchListSchema);

    const result = await editList({
      id: req.params.id,
      user: req.user.id,
      ...req.body,
    });

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteList = async (req: any, res: Response, next: NextFunction) => {
  try {
    httpValidator({ params: req.params }, deleteListSchema);

    const result = await removeList({
      id: req.params.id,
      user: req.user.id,
    });

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};