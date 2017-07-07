
export default (app) => {
    app.use(async function(ctx, next) {
        let splitPath = ctx.path.split('/')
        let modelName = splitPath[0]
        let model = ctx.models.get(modelName)

        if (!model) {
          await next()
          return
        }

        let modelId = null;
        let result;

        if (splitPath.length >= 2) {
          let modelId = splitPath[1];
        }

        if (ctx.request.method === 'GET') {
          let where = {}
          if (modelId) {
            where['id'] = modelId;
          }

          result = await model.where(where)
        } else if (ctx.request.method === 'POST') {
          newModel = new model(ctx.request.post)
        }

    });
};
