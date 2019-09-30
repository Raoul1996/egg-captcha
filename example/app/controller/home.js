'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx} = this;
    const {captcha, txt} = await ctx.service.home.captcha()
    ctx.body = captcha
    ctx.type = 'image/png'
    // need open the egg-session plugin
    ctx.session.captcha = txt
  }
}

module.exports = HomeController;
