import http from 'http';
import app from './config/app';

const PORT = process.env.PORT || 5000;

http
  .createServer(app)
  .listen(PORT, () => console.log(`Ready! Listen on: http://0.0.0.0:${PORT}`));
