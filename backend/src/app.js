import Koa from 'koa';
import middlewares from './middlewares';

const app = new Koa();

middlewares(app);

app.listen(3000);
