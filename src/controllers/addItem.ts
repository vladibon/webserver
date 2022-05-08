import { RequestHandler } from 'express';
import { add } from '../data/list';

const addItem: RequestHandler = (req, res) => {
  const { item } = req.body;

  typeof item === 'string'
    ? add(item)
    : res.status(400).json({
        status: 400,
        message: 'Item should be of type string',
        name: 'BadRequestError',
      });

  res.status(201).json(item);
};

export default addItem;
