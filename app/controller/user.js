const Controller = require('egg').Controller

class UserController extends Controller {
  async getUserInfo() {
    const ctx = this.ctx;
    const userId = ctx.params.id;
    const user = await ctx.service.user.find(userId);
    console.log('pakizheng', user)
    ctx.body = user;
  }
}

module.exports = UserController