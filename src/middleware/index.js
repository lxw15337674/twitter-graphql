const bodyParser = require('koa-bodyparser');
const miRule = require('./mi-rule');
const path = require('path');
const auth = require('./mi-auth')
module.exports = app => {
  miRule({
    app,
    rules: [{
      folder: path.join(__dirname, '../restful/controller'),
      name: 'controller'
    }]
  });
  app.use(bodyParser());
  app.use(auth)
};