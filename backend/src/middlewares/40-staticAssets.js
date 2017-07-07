const path = require('path');
const fs = require('fs');

export default (app) => {
    app.use(async function (ctx, next) {
        if (!ctx.path || ctx.path == "/" || ctx.path.match(/^\/?(index.html|static|favicon|manifest|service-worker)/)) {
            let fpath;

            if (!ctx.path || ctx.path == "/") {
                fpath = path.join(__dirname, "../../../frontend/build/", "/index.html");
            } else {
                fpath = path.join(__dirname, "../../../frontend/build/", ctx.path);
            }

            const fstat = await stat(fpath);
            if (fstat.isFile()) {
                ctx.type = path.extname(fpath);
                ctx.body = fs.createReadStream(fpath);
                return;
            }
        }

        await next();
    })
}

function stat(file) {
  return new Promise(function(resolve, reject) {
    fs.stat(file, function(err, stat) {
      if (err) {
        reject(err);
      } else {
        resolve(stat);
      }
    });
  });
}
