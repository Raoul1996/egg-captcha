"use strict";
const path = require("path")
/** @type Egg.EggPlugin */
exports.captcha = {
  enable: true,
  // enable bellow row when your clone egg-captcha and run the example server.
  // !!! don't use it on prod env. !!!
  path: path.join(__dirname, "../.."),

  // enable bellow row on prod env. must install this pkg via `npm i egg-captcha`
  // package:'egg-captcha'
};
