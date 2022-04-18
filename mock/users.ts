import { Request, Response } from 'express';

export default {
  'POST /api/login': (req: Request, res: Response) => {
    const { username, password } = req.body;
    if (username === 'zwj' && password === '123') {
      res.send({
        status: 'OK',
        role: 'zwj',
        msg: '登录成功！',
      });
    } else if (username === 'admin' && password === '123') {
      res.send({
        status: 'OK',
        role: 'admin',
        msg: '登录成功！',
      });
    } else {
      res.send({
        status: '',
        msg: '用户名或密码错误！',
      });
    }
  },
  'POST /api/logout': (req: Request, res: Response) => {
    res.send({
      status: 'OK',
    });
  },
  'GET /api/users': (req: Request, res: Response) => {
    res.json({
      status: 'OK',
      data: [
        { id: 0, name: `小张0号`, age: 21, address: '西湖区紫金庭园' },
        { id: 1, name: `小张1号`, age: 21, address: '西湖区紫金庭园' },
        { id: 2, name: `小张2号`, age: 21, address: '西湖区紫金庭园' },
        { id: 3, name: `小张3号`, age: 21, address: '西湖区紫金庭园' },
        { id: 4, name: `小张4号`, age: 21, address: '西湖区紫金庭园' },
        { id: 5, name: `小张5号`, age: 21, address: '西湖区紫金庭园' },
        { id: 6, name: `小张6号`, age: 21, address: '西湖区紫金庭园' },
        { id: 7, name: `小张7号`, age: 21, address: '西湖区紫金庭园' },
        { id: 8, name: `小张8号`, age: 21, address: '西湖区紫金庭园' },
        { id: 9, name: `小张9号`, age: 21, address: '西湖区紫金庭园' },
        { id: 10, name: `小张10号`, age: 21, address: '西湖区紫金庭园' },
      ],
    });
  },
};
