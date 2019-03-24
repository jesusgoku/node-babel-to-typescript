import { Router } from 'express';

import hello from '../components/hello/routes';

const router = Router();

router.use('/hello', hello);

export { router as default };
