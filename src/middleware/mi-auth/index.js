async function auth(ctx, next) {
  ctx.user = {
    name: 'lixiwang',
    age: Math.random()
  }
  return next()
}
module.exports = auth