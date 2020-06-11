const { Success, Fail } = require('../lib/respone_status')

const Controller = require('egg').Controller

class ArticleController extends Controller {
  async articles() {
    const { ctx } = this
    const results = await ctx.service.article.articles()
    ctx.body = Success(200, '拉取列表成功', results)
  }
  async publishArticle() {
    const { ctx } = this
    const result = await ctx.service.article.publishArticle(ctx.request.body)
    const insertSuccess = result.affectedRows === 1
    if (insertSuccess) {
      ctx.body = Success()
    } else {
      ctx.body = Fail()
    }
  }
  async updateArticle() {}

  async deleteArticle() {
    const { ctx } = this
    const { id } = ctx.request.body
    const result = await ctx.service.article.deleteArticle(id)
    const deleteSuccess = result.affectedRows === 1
    if ( deleteSuccess ) {
      ctx.body = Success()
    } else {
      ctx.body = Fail()
    }
  }
}

module.exports = ArticleController
