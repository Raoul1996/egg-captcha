'use strict';

const Controller = require('egg').Controller;

class CaptchaController extends Controller {
  async index() {
    const { ctx } = this;
    const { captcha, txt } = await ctx.service.captcha.captcha();
    ctx.body = captcha;
    ctx.type = 'image/png';
    // need open the egg-session plugin
    ctx.session.captcha = txt;
  }
}

module.exports = CaptchaController;
