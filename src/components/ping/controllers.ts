import { Request, Response } from 'express';

function ping(req: Request, res: Response) {
  return res.json({ ping: 'pong' });
}

export { ping };
