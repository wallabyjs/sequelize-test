describe('sequlize', function () {
  it('should work', function (done) {

    var Sequelize = require('sequelize');
    var sequelize = new Sequelize('database', 'username', 'password', {
      host: 'localhost',
      dialect: 'sqlite'
    });

    var User = sequelize.define('user', {
      firstName: {
        type: Sequelize.STRING,
        field: 'first_name'
      },
      lastName: {
        type: Sequelize.STRING
      }
    }, {
      freezeTableName: true
    });

    User.sync({force: true})
      .then(function () {
        return User.create({
          firstName: 'Foo',
          lastName: 'Bar'
        });
      })
      .then(function (user) {
        expect(user).toBeDefined();
        done();
      });
  });
});
