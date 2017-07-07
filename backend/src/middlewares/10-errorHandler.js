
export default (app) => {
    app.on('error', err =>
      console.error('server error', err)
    );
}