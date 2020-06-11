const Service = require('egg').Service

class UserService extends Service {
  async find(uid) {
    const user = await this.app.mysql.get('user', {userid: uid})
    return {user}
  }
  async insert(useInfo) {}
}

module.exports = UserService