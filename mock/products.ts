import { Request, Response } from 'express';

let initialProducts = [
  {
    id: 0,
    name: '螺丝',
    startTime: new Date('2022-3-14'),
    expiration: '3',
  },
  {
    id: 1,
    name: '螺母',
    startTime: new Date('2022-3-27'),
    expiration: '6',
  },
  {
    id: 2,
    name: '海螺',
    startTime: new Date('2022-4-18'),
    expiration: '1',
  },
];

export default {
  'GET /api/products': (req: Request, res: Response) => {
    res.json({
      status: 'OK',
      data: initialProducts,
    });
  },
  'POST /api/products/:id': (req: Request, res: Response) => {
    const { id } = req.query;
    initialProducts = initialProducts.filter((item) => item.id !== Number(id));
    res.json({
      status: 'OK',
      data: initialProducts,
    });
  },
};
