const Service = require('egg').Service

class ArticleService extends Service {
  async articles() {
    const results = await this.app.mysql.select('Articles');
    return results
  }
  async article(id) {
    console.log('pakizheng778', parseInt(id))
    const idToNumber = parseInt(id, 10)
    const result = await this.app.mysql.get('Articles', {id})
    return result
  }
  async publishArticle(data) {
    const { title, type, content } = data
    const result = await this.app.mysql.insert('Articles', { title, type: type, content});
    return result
  }
  async updateArticle(data) {
    const { id, title, type, content } = data
    const row = {
      id,
      title,
      type,
      content
    }
    const result = await this.app.mysql.update('Articles', row);
    return result
  }
  async deleteArticle(id) {
    const result = await this.app.mysql.delete('Articles', {
      id,
    })
    return result
  }
}

module.exports = ArticleService