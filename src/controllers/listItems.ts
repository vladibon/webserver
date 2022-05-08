import { RequestHandler } from 'express';
import { list } from '../data/list';

const listItems: RequestHandler = (_, res) => {
  res.json(list);
};

export default listItems;
