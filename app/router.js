module.exports = app => {
  const { router, controller } = app
  router.get('/api/', controller.home.index)
  router.get('/api/news', controller.news.list)
  router.get('/api/user/:id', controller.user.getUserInfo)

  // 获取文章内容
  router.get('/api/article', controller.article.article)

  // 文章编辑
  router.post('/api/publish/article', controller.article.publishArticle)
  router.post('/api/update/article', controller.article.updateArticle)

  // 管理相关
  router.get('/api/admin/articles', controller.article.articles)
  router.post('/api/admin/delete/article', controller.article.deleteArticle)
}