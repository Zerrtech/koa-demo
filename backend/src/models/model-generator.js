export default (app) => {
  const bookshelf = app.models.bookshelf;

  const Users = bookshelf.Model.extend({
    tableName: 'users',
    posts: function() {
      return this.hasMany(Posts)
    }
  });
  app.models.add('Users', Users);

  const Posts = bookshelf.Model.extend({
    tablename: 'posts',
    users: function() {
      return this.belongsTo(Users)
    }
  });
  app.models.add('Posts', Posts)
}
