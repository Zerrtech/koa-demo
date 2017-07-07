const KeyGrip = require('keygrip');

export default (app) => {
    // Encrypt session info with rotating keys
    app.use(async function(ctx, next) {
        app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');
        await next();
    });
};
