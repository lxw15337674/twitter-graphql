import {
  graphiqlKoa
} from 'apollo-server-koa'

module.exports = app => {
  router.get('/home/index', app.controller.home.index).
    .post('/home/index', app.controller.home.index).
    .get('/graphiql', async (ctx, next) => {
      await graphiqlKoa({
        endpointURL: '/graphql'
      })(ctx, next)
    })
}