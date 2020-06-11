const Service = require('egg').Service

class ArticleService extends Service {
  async articles() {
    const results = await this.app.mysql.select('Articles');
    console.log('pakizheng333', results)
    return results
  }
  async publishArticle(data) {
    const { title, type, content } = data
    const result = await this.app.mysql.insert('Articles', { title, type: type, content});
    return result
  }
  async updateArticle() {
  }
  async deleteArticle(id) {
    console.log('pakizheng333', id)
    const result = await this.app.mysql.delete('Articles', {
      id,
    })
    return result
  }
}

module.exports = ArticleService