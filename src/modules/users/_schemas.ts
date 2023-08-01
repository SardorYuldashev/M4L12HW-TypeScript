import Joi from "joi";

interface BodyInput {
  first_name?: string;
  last_name?: string;
  username?: string;
  password?: string;
};

interface ParamsInput {
  id: string;
};

export const postRegisterUserSchema = {
  body: Joi.object<BodyInput>({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

export const postLoginUserSchema = {
  body: Joi.object<BodyInput>({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

export const patchMeSchema = {
  body: Joi.object<BodyInput>({
    first_name: Joi.string(),
    last_name: Joi.string(),
    username: Joi.string(),
  }),
};

export const showUserSchema = {
  params: Joi.object<ParamsInput>({
    id: Joi.string(),
  }),
};

export const patchUserSchema = {
  params: Joi.object<ParamsInput>({
    id: Joi.string(),
  }),
  body: Joi.object<BodyInput>({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    username: Joi.string().required(),
  }),
};

export const updatePasswordSchema = {
  params: Joi.object<ParamsInput>({
    id: Joi.string(),
  }),
  body: Joi.object<BodyInput>({
    password: Joi.string().required(),
  }),
};

export const deleteUserSchmea: any = {
  params: Joi.object<ParamsInput>({
    id: Joi.string(),
  }),
};