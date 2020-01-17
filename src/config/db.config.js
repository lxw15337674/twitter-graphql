module.exports = {
  username: 'root',
  password: 'root',
  database: 'koa',
  host: '10.121.69.8',
  port: '3306',
  dialect: 'mysql',
  // 地址
  // 端口
  port: 3306,
  // 连接池
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  // 数据表相关的全局配置
  define: {
    // 是否冻结表名
    // 默认情况下，表名会转换为复数形式
    freezeTableName: true,
    // 是否为表添加 createdAt 和 updatedAt 字段
    // createdAt 记录表的创建时间
    // updatedAt 记录字段更新时间
    timestamps: true,
    // 是否为表添加 deletedAt 字段
    // 默认情况下, destroy() 方法会删除数据，
    // 设置 paranoid 为 true 时，将会更新 deletedAt 字段，并不会真实删除数据。
    paranoid: false
  }
};
