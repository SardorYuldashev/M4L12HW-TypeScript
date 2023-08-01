import { NextFunction, Response } from "express";
import httpValidator from "../../shared/http-validator";
import { deleteTodoSchema, getTodoSchema, patchTodoSchema, postTodoSchema } from "./_schemas";
import addTodo from "./add-todo";
import listTodos from "./list-todos";
import showTodo from "./show-todo";
import editTodo from "./edit-todo";
import removeTodo from "./remove-todo";


export const postTodo = async (req: any, res: Response, next: NextFunction) => {
  try {
    httpValidator({ body: req.body }, postTodoSchema);

    const result = await addTodo({ ...req.body, user: req.user.id });

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  };
};

export const getTodos = async (req: any, res: Response, next: NextFunction) => {
  try {
    const result = await listTodos({ filters: { user: req.user.id } });

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  };
};

export const getTodo = async (req: any, res: Response, next: NextFunction) => {
  try {
    httpValidator({ params: req.params }, getTodoSchema);

    const result = await showTodo({ id: req.params.id, user: req.user.id });

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  };
};

export const patchTodo = async (req: any, res: Response, next: NextFunction) => {
  try {
    httpValidator({ params: req.params, body: req.body }, patchTodoSchema);

    const result = await editTodo({
      id: req.params.id,
      user: req.user.id,
      ...req.body,
    });

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  };
};

export const deleteTodo = async (req: any, res: Response, next: NextFunction) => {
  try {
    httpValidator({ params: req.params }, deleteTodoSchema);

    const result = await removeTodo({
      id: req.params.id,
      user: req.user.id,
    });

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  };
};