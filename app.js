'use strict';
const Captcha = require('./app/extend/captcha');
module.exports = app => {
  const captcha = new Captcha({});
  app.captcha = {
    generate() {
      return captcha.generate();
    },
  };
};
