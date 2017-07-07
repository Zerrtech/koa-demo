import koaws from '@zerrtech/koa-ws';

export default (app) => {
  var options = {
    heartbeat: true,
    heartbeatInterval: 60,
    serveClientFile: false,
    clientFilePath: null
  };

  const ws = koaws(app, options)

  app.use(ws)

  app.ws.register('hello', function* () {
    this.result('world!')
  });
}
