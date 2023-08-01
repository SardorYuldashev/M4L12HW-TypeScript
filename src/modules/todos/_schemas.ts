import Joi from 'joi';

interface BodyInput {
  text?: string;
  list?: string;
  is_done?: boolean;
};

interface ParamsInput {
  id: string;
};

export const postTodoSchema = {
  body: Joi.object<BodyInput>({
    text: Joi.string().required(),
    list: Joi.string().required(),
  }),
};

export const getTodoSchema = {
  params: Joi.object<ParamsInput>({
    id: Joi.string().required(),
  }),
};

export const patchTodoSchema = {
  params: Joi.object<ParamsInput>({
    id: Joi.string().required(),
  }),
  body: Joi.object<BodyInput>({
    text: Joi.string(),
    is_done: Joi.boolean(),
    list: Joi.string(),
  }),
};

export const deleteTodoSchema = {
  params: Joi.object<ParamsInput>({
    id: Joi.string().required(),
  }),
};