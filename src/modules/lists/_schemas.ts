import Joi from 'joi';

interface BodyInput {
  name?: string;
};

interface ParamsInput {
  id: string;
};

export const postListSchema = {
  body: Joi.object<BodyInput>({
    name: Joi.string().required(),
  }),
};

export const getListSchema = {
  params: Joi.object<ParamsInput>({
    id: Joi.string().required(),
  }),
};

export const patchListSchema = {
  params: Joi.object<ParamsInput>({
    id: Joi.string().required(),
  }),
  body: Joi.object<BodyInput>({
    name: Joi.string(),
  }),
};

export const deleteListSchema = {
  params: Joi.object<ParamsInput>({
    id: Joi.string().required(),
  }),
};
