
export default (app) => {
    app.use(ctx => {
        ctx.body = 'Hello World';
    });
}