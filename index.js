const Koa = require('koa');
const app = new Koa();
const apolloServer = require('./src/graphql/index.js');
const middleware = require('./src/middleware');
middleware(app);
apolloServer.applyMiddleware({
  app,
});

app.listen(
  {
    port: 4000,
  },
  () => console.log(`🚀 Server ready at http://localhost:4000/graphql`),
);
