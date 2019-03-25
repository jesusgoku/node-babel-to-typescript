import { Router } from 'express';
import * as controllers from './controllers';

const router = Router();

router.get('/', controllers.ping);

export { router as default };
