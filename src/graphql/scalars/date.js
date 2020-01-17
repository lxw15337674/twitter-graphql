const moment = require('moment')
const {
  Kind
} = require('graphql/language')
const {
  GraphQLScalarType
} = require('graphql')
const customScalarDate = new GraphQLScalarType({
  name: 'Date',
  description: '时间类型',
  // 从客户端传递到服务端时的处理函数
  parseValue: value => moment(value).valueOf(),
  // 从服务端返回到客户端时的处理函数
  serialize: value => moment(value).format('YYYY-MM-DD HH:mm:ss:SSS'),
  // 自定义标量在 ast 中的字面量的处理函数
  parseLiteral: ast => {
    console.log(ast, Kind)
      (ast.kind === Kind.INT) ?
      parseInt(ast.value, 10) : null
  }
})

module.exports = {
  Date: customScalarDate
}