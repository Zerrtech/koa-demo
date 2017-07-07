import bookshelfConnector from '../models/bookshelf-connector';
import modelGenerator from '../models/model-generator'

export default (app) => {
    app.use(bookshelfConnector({
      client: 'postgresql',
      connection: {
        host: 'localhost',
        user: 'react-app',
        password: 'react-app',
        database: 'react-app',
      }
    }));

    modelGenerator(app)
};
