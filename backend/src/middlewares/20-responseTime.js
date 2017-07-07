
// x-response-time

export default (app) => {
    app.use(async function(ctx, next) {
      const start = new Date();
      await next();
      const ms = new Date() - start;
      ctx.set('X-Response-Time', `${ms}ms`);
    });
};
