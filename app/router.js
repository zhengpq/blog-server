module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  router.get('/news', controller.news.list)
  router.get('/user/:id', controller.user.getUserInfo)

  // 获取文章内容
  router.get('/article', controller.article.article)

  // 文章编辑
  router.post('/publish/article', controller.article.publishArticle)
  router.post('/update/article', controller.article.updateArticle)

  // 管理相关
  router.get('/admin/articles', controller.article.articles)
  router.post('/admin/delete/article', controller.article.deleteArticle)
}