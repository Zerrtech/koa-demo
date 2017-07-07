import Koa from 'koa';
import websockets from './websockets';
import middlewares from './middlewares';

const app = new Koa();

websockets(app);
middlewares(app);

app.listen(3000);
