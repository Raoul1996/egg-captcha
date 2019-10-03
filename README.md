# egg-captcha

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-captcha.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-captcha
[travis-image]: https://img.shields.io/travis/raoul1996/egg-captcha.svg?style=flat-square
[travis-url]: https://travis-ci.org/raoul1996/egg-captcha
[codecov-image]: https://img.shields.io/codecov/c/github/raoul1996/egg-captcha.svg?style=flat-square
[codecov-url]: https://codecov.io/github/raoul1996/egg-captcha?branch=master
[david-image]: https://img.shields.io/david/raoul1996/egg-captcha.svg?style=flat-square
[david-url]: https://david-dm.org/raoul1996/egg-captcha
[snyk-image]: https://snyk.io/test/npm/egg-captcha/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-captcha
[download-image]: https://img.shields.io/npm/dm/egg-captcha.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-captcha

> captcha plugin for egg framework, based on [ccap](https://www.npmjs.com/package/ccap)
<!--
Description here.
-->

## Install

```bash
$ npm i egg-captcha --save
```

## Usage

```js
// {app_root}/config/plugin.js

exports.captcha = {
  enable: true,
  package: 'egg-captcha',
};
```
## Configuration

```js
// {app_root}/config/config.default.js

exports.captcha = {
  width: 256, // set width,default is 256
  height: 60, // set height,default is 60
  offset: 40, // set text spacing,default is 40
  quality: 100, // set pic quality,default is 50
  fontsize: 57 // set font size,default is 57
}
```
see [config/config.default.js](config/config.default.js) for more detail.

## Example

```js
// {app_root}/controller/user.js

async captcha() {
  const {ctx, service} = this
  const {captcha, txt} = await service.user.captcha()
  ctx.body = captcha
  ctx.type = 'image/png'
  // need open the egg-session plugin
  ctx.session.captcha = txt
}
```
```js
// {app_root}/service/user.js

async captcha() {
  const {app} = this
  const ary = app.captcha.generate()
  return {captcha: ary[1], txt: ary[0]}
}
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
