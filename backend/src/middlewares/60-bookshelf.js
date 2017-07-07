import bookshelf from 'koa-bookshelf';
import modelGenerator from '../models/modelGenerator';

export default (app) => {
    app.use(bookshelf('/app/models', {
      client: 'postgresql',
      connection: {
        host: 'localhost',
        user: 'react-app',
        password: 'react-app',
        database: 'react-app',
      },
    }));

    modelGenerator(app);
};
