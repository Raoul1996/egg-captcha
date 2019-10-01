'use strict';
const Service = require('egg').Service;

class CaptchaService extends Service {
  async captcha() {
    const { app } = this;
    const ret = app.captcha.generate();
    return { captcha: ret && ret[1], txt: ret && ret[0] };
  }
}

module.exports = CaptchaService;
