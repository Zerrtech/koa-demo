
export default (app) => {
    app.on('error', (err) =>
      // eslint-disable-next-line no-console
      console.error('server error', err)
    );
};
