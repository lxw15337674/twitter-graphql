module.exports = {
  index: async (ctx, next) => {
    console.log(ctx.request.query);
    console.log(ctx.request.querystring);
    ctx.response.body = '<h1>HOME page</h1>';
  },
  login: async (ctx, next) => {},
  register: async (ctx, next) => {}
};
