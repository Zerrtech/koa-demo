const path = require('path');

module.exports = function (config) {
  if (typeof ((config || {}).connection || {}).filename !== 'undefined') {
    config.connection.filename = path.join(path.dirname(module.parent.filename), config.connection.filename);
  }

  const knex = require('knex')(config);
  const bookshelf = require('bookshelf')(knex);

  var models = new Proxy({}, {
    bookshelf: function() {
      return bookshelf
    },
    knex: function() {
      return knex
    },
    add: function(obj, prop, model) {
      obj[prop] = model;
    },
    get: function (obj, prop) {
      return obj[prop];
    }
  });

  return async function (ctx, next) {
    ctx.models = models;
    await next();
  };
};
