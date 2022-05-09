import { RequestHandler } from 'express';
import { add } from '../data/list';
import { Schema } from '../schemas/schema';

const addItem: RequestHandler = (req, res) => {
  try {
    const { item } = req.body;

    const { error } = Schema.validate(req.body);

    if (error) throw new Error('item should be of type string');

    add(item);

    res.status(201).json(item);
  } catch (error: any) {
    res.status(400).json(error.message);
  }
};

export default addItem;
