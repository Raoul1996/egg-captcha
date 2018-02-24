'use strict';
const captcha = require('../config/config.default');
const ccap = require('ccap')(captcha);
class Captcha {
  generate() {
    return ccap.get();
  }
}
module.exports = Captcha;
