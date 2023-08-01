import { BadRequestError } from '../errors';

const httpValidator = ({ body, params, query }: any, schema: any) => {

  if (body) {
    const { error } = schema.body.validate(body);

    if (error) throw new BadRequestError(error);
  };

  if (params) {
    const { error } = schema.params.validate(params);

    if (error) throw new BadRequestError(error);
  };

  if (query) {
    const { error } = schema.query.validate(query);

    if (error) throw new BadRequestError(error);
  };

};

export default httpValidator;