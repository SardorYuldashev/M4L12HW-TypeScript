import Joi from 'joi';

export default function (sortFields: string[]) {
  Joi.object({
    by: Joi.string().valid(...sortFields),
    order: Joi.string().valid("asc", "desc"),
  })
};