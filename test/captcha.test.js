'use strict';

const mock = require('egg-mock');

describe('test/captcha.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/captcha-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, captcha')
      .expect(200);
  });
  it('should GET /captcha', () => {
    return app.httpRequest()
      .get('/captcha')
      .expectHeader('content-type')
      .except(200)
  });
});
