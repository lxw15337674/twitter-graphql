const {
  SchemaDirectiveVisitor,
  AuthenticationError,
} = require('apollo-server-koa');
const { defaultFieldResolver } = require('graphql');

class AuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;

    field.resolve = async function(...args) {
      const context = args[2];
      const user = context.ctx.user;

      console.log('[CURRENT USER]', {
        user,
      });

      if (!user) throw new AuthenticationError('Authentication Failure');

      return resolve.apply(this, args);
    };
  }
}

module.exports = {
  auth: AuthDirective,
};
