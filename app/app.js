module.exports = (app) => {
  app.beforeStart(async () => {
    // 从配置中心获取 MySQL 的配置
    // { host: 'mysql.com', port: '3306', user: 'test_user', password: 'test_password', database: 'test' }
    const mysqlConfig = await app.configCenter.fetch('mysql')
    console.log('pakizheng444', mysqlConfig)
    app.database = app.mysql.createInstance(mysqlConfig)
  })
  app.listen(7001)
}
