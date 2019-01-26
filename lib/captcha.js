'use strict';
const captcha = require('../config/config.default');
const ccap = require('ccap');
class Captcha {
  constructor(option) {
    this.option = Object.assign(captcha, option);
    this.ccap = ccap(option);
  }
  generate() {
    return this.ccap.get();
  }
}
module.exports = Captcha;
