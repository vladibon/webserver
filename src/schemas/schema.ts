import Joi from 'joi';

export const Schema = Joi.object({
  item: Joi.string().required(),
});
