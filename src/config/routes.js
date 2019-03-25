import { Router } from 'express';

import hello from '../components/hello/routes';
import ping from '../components/ping/routes';

const router = Router();

router.use('/hello', hello);
router.use('/ping', ping);

export { router as default };
