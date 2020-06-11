exports.keys = 'PAKIZHENG-MC1'

exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
}

exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0',
}

exports.middleware = [
  'robot'
]

exports.robot = {
  ua: [
    /Baiduspider/i,
  ]
}

exports.mysql = {
  // 单数据库信息配置
  client: {
    // host
    host: 'localhost',
    // 端口号
    port: '3306',
    // 用户名
    user: 'root',
    // 密码
    password: '123456',
    // 数据库名
    database: 'blog',
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
}

exports.security = {
  csrf: {
    enable: false,
  },
  domainWhiteList: [ 'http://localhost:8000' ],
};